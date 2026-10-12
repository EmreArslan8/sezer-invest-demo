"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import { services } from "@/lib/site";

const initial: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30";

export default function ContactForm({
  defaultSubject = "",
  compact = false,
}: {
  defaultSubject?: string;
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-green-600/20 bg-green-50 p-8 text-center">
        <p className="font-display text-2xl font-bold text-navy-900">Teşekkürler!</p>
        <p className="mt-2 text-navy-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form key={JSON.stringify(v)} action={action} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`} noValidate>
      <Field label="Ad Soyad *" error={state.errors?.name}>
        <input name="name" defaultValue={v.name} autoComplete="name" className={inputClass} required />
      </Field>
      <Field label="Telefon *" error={state.errors?.phone}>
        <input name="phone" defaultValue={v.phone} type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" className={inputClass} required />
      </Field>
      <Field label="E-posta" error={state.errors?.email}>
        <input name="email" defaultValue={v.email} type="email" autoComplete="email" className={inputClass} />
      </Field>
      <Field label="Konu">
        <select name="subject" defaultValue={v.subject ?? defaultSubject} className={inputClass}>
          <option value="">Seçiniz</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="İlan hakkında">İlan hakkında</option>
          <option value="Diğer">Diğer</option>
        </select>
      </Field>
      <Field label="Mesajınız *" error={state.errors?.message} full>
        <textarea name="message" defaultValue={v.message} rows={5} className={inputClass} required />
      </Field>
      {state.status === "error" && (
        <p className="text-sm font-semibold text-red-600 col-span-full" role="alert">{state.message}</p>
      )}
      <div className="col-span-full">
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-gold-500 px-8 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Gönderiliyor…" : "Gönder"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "col-span-full" : ""}`}>
      <span className="text-sm font-semibold text-navy-900">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
