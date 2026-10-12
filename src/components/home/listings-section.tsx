"use client";

import { SOURCE } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { ListingCard } from "./listing-card";
import { useListingFilter } from "./listing-filter";

export function ListingsSection() {
  const { results, active, reset } = useListingFilter();

  return (
    <section id="ilanlar" className="scroll-mt-20 bg-sky py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="İlanlar"
          title="En Son Yayınlanan İlanlar"
          text="Sezer Invest tecrübesi ve bilgisi ile ilan sahipleri ile ihtiyaç sahiplerini buluşturuyoruz."
        />

        {active && (
          <p className="mt-8 text-center text-small text-ink-soft">
            Aramanıza uygun {results.length} ilan ·{" "}
            <button onClick={reset} className="font-semibold text-gold underline">
              filtreyi temizle
            </button>
          </p>
        )}

        {results.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((l) => (
              <ListingCard key={l.slug} listing={l} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-10 text-center shadow-md shadow-ink/5">
            <p className="text-h3">Bu kriterlere uygun ilan şu an bulunmuyor.</p>
            <p className="mt-2 text-small text-ink-soft">Aradığınız mülk için bizi arayın, portföyümüzden size uygun seçenekleri iletelim.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={`${SOURCE}/sizden-gelenler/`}
            className="inline-block rounded-md bg-gold px-7 py-3.5 text-small font-semibold text-white transition hover:bg-ink"
          >
            Tüm İlanları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
