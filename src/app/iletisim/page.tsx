import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sezer Invest ile iletişime geçin. Telefon, e-posta ve iletişim formu.",
};

const channels = [
  { label: "Telefon", value: site.phone, href: site.phoneHref },
  { label: "WhatsApp", value: "Hemen yazın", href: site.whatsappHref },
  { label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { label: "Bölge", value: site.region },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        description="Sorularınız, değerleme talepleriniz ve ilanlarınız için bize ulaşın."
        crumbs={[{ href: "/iletisim", label: "İletişim" }]}
      />
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {channels.map((c) => (
              <div key={c.label} className="rounded-xl border border-navy-900/10 p-6">
                <p className="eyebrow">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-2 block text-lg font-bold text-navy-900 hover:text-gold-600"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-bold text-navy-900">{c.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-navy-900/10 p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="mb-6 font-display text-2xl font-bold text-navy-900">Bize yazın</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
