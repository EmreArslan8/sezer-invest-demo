import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "İlanlar",
  description: "Sezer Invest satılık ve kiralık konut, ofis ve ticari gayrimenkul ilanları.",
};

const filters = [
  { value: "", label: "Tümü" },
  { value: "satilik", label: "Satılık" },
  { value: "kiralik", label: "Kiralık" },
];

export default async function ListingsPage(props: PageProps<"/ilanlar">) {
  const { tip } = await props.searchParams;
  const active = typeof tip === "string" ? tip : "";
  const items = active ? listings.filter((l) => l.type === active) : listings;

  return (
    <>
      <PageHero
        title="İlanlar"
        description="Satılık ve kiralık konut, ofis ve ticari gayrimenkul portföyümüz."
        crumbs={[{ href: "/ilanlar", label: "İlanlar" }]}
      />
      <section className="py-16">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {filters.map((f) => (
                <Link
                  key={f.value}
                  href={f.value ? `/ilanlar?tip=${f.value}` : "/ilanlar"}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    active === f.value ? "bg-navy-900 text-white" : "bg-cream text-navy-900 hover:bg-gold-300/40"
                  }`}
                >
                  {f.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-navy-700/70">{items.length} ilan listeleniyor</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
          <p className="mt-10 rounded-lg bg-cream p-4 text-center text-sm text-navy-700/80">
            Bu sayfadaki ilanlar demo amaçlı örnek verilerdir. Canlı sürümde portföy, ilan yönetim paneli veya
            CRM entegrasyonu üzerinden otomatik güncellenecektir.
          </p>
        </div>
      </section>
    </>
  );
}
