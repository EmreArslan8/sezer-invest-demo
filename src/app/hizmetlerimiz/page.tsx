import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Gayrimenkul alım-satım-kiralama, ofis kiralama ve satış yönetimi, mülk ve kiracı yönetimi.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Gayrimenkul yolculuğunuzun her aşamasında profesyonel ve dijital çözümler."
        crumbs={[{ href: "/hizmetlerimiz", label: "Hizmetlerimiz" }]}
      />
      <section className="py-20">
        <div className="container-x space-y-8">
          {services.map((s, i) => (
            <article key={s.slug} className="grid gap-6 rounded-xl border border-navy-900/10 p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <span className="font-display text-5xl font-bold text-gold-500/50">0{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 text-navy-700/80">{s.short}</p>
              </div>
              <Link
                href={`/hizmetlerimiz/${s.slug}`}
                className="rounded-md bg-navy-900 px-6 py-3 text-center text-sm font-bold text-white hover:bg-navy-700"
              >
                İncele
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
