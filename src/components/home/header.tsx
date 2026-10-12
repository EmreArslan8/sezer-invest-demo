"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Plus, User, X } from "lucide-react";
import { SOURCE, nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Sezer Invest ana sayfa" className="shrink-0">
          <Image src="/media/brand/logo.png" alt="Sezer Invest Real Estate" width={600} height={455} className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
          {nav.map((item, i) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className={`flex items-center gap-1 py-7 text-small font-medium transition hover:text-gold-light ${
                  i === 0 ? "text-gold-light" : "text-white"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="size-3.5 opacity-70" />}
              </a>
              {item.children && (
                <div className="invisible absolute top-full left-0 min-w-60 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl shadow-ink/20 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a key={c.label} href={c.href} className="block rounded-lg px-3 py-2.5 text-small font-medium text-ink hover:bg-sky hover:text-gold">
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`${SOURCE}/signup/`} className="hidden items-center gap-1.5 text-small font-medium text-cyan hover:text-white md:flex">
            <User className="size-4" /> Giriş Yap
          </a>
          <a
            href={`${SOURCE}/ilan-ekle/`}
            className="hidden items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 text-small font-semibold text-white transition hover:bg-gold-light sm:flex"
          >
            <Plus className="size-4" /> İlan Ekle
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-md text-white lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-x max-h-[70vh] overflow-y-auto pb-5 lg:hidden" aria-label="Mobil menü">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              <a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-body font-medium text-white">
                {item.label}
              </a>
              {item.children?.map((c) => (
                <a key={c.label} href={c.href} className="block py-2 pl-4 text-small text-white/65">
                  {c.label}
                </a>
              ))}
            </div>
          ))}
          <a href={`${SOURCE}/ilan-ekle/`} className="mt-4 flex items-center justify-center gap-2 rounded-md bg-gold py-3 font-semibold text-white">
            <Plus className="size-4" /> İlan Ekle
          </a>
        </nav>
      )}
    </header>
  );
}
