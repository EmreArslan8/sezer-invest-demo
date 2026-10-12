import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PropertyVisual from "@/components/PropertyVisual";
import ContactForm from "@/components/ContactForm";
import { formatPrice, getListing, listings, typeLabel } from "@/lib/listings";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/ilanlar/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const listing = getListing(id);
  return listing ? { title: listing.title, description: listing.description } : {};
}

export default async function ListingPage(props: PageProps<"/ilanlar/[id]">) {
  const { id } = await props.params;
  const listing = getListing(id);
  if (!listing) notFound();

  const details = [
    ["İlan Tipi", typeLabel[listing.type]],
    ["Kategori", listing.category],
    ["Konum", `${listing.district}, ${listing.neighborhood}`],
    ["Brüt Alan", `${listing.area} m²`],
    ...(listing.rooms ? [["Oda Sayısı", listing.rooms]] : []),
    ...(listing.floor ? [["Bulunduğu Kat", listing.floor]] : []),
    ...(listing.age !== undefined ? [["Bina Yaşı", String(listing.age)]] : []),
  ];

  return (
    <>
      <PageHero
        title={listing.title}
        description={`${listing.district} · ${listing.neighborhood}`}
        crumbs={[
          { href: "/ilanlar", label: "İlanlar" },
          { href: `/ilanlar/${listing.id}`, label: listing.title },
        ]}
      />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="overflow-hidden rounded-xl">
              <PropertyVisual hue={listing.hue} category={listing.category} className="aspect-[16/9] w-full" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 pb-6">
              <p className="font-display text-3xl font-bold text-navy-900">{formatPrice(listing)}</p>
              <span className="rounded bg-gold-300/40 px-3 py-1 text-xs font-bold tracking-wider text-navy-900 uppercase">
                Demo ilan
              </span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Açıklama</h2>
              <p className="mt-4 leading-relaxed text-navy-700/90">{listing.description}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">İlan Detayları</h2>
              <dl className="mt-4 grid gap-px overflow-hidden rounded-xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
                {details.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 bg-white px-5 py-3 text-sm">
                    <dt className="text-navy-700/70">{k}</dt>
                    <dd className="font-semibold text-navy-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Özellikler</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {listing.features.map((f) => (
                  <li key={f} className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-navy-900">
                    ✓ {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="h-fit space-y-4 rounded-xl border border-navy-900/10 p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-bold text-navy-900">Bu ilanla ilgileniyorum</h2>
            <div className="grid grid-cols-2 gap-2">
              <a href={site.phoneHref} className="rounded-md bg-navy-900 py-3 text-center text-sm font-bold text-white hover:bg-navy-700">
                Ara
              </a>
              <a
                href={`${site.whatsappHref}?text=${encodeURIComponent(`Merhaba, "${listing.title}" ilanı hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#25D366] py-3 text-center text-sm font-bold text-white hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
            <ContactForm defaultSubject="İlan hakkında" compact />
            <Link href="/ilanlar" className="block text-center text-sm font-semibold text-gold-600 hover:underline">
              ← Tüm ilanlara dön
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
