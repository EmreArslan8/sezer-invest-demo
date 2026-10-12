"use client";

import { Building, Building2, ChevronsDown, Home, Trees, Search } from "lucide-react";
import { categories, type CategoryKey } from "@/data/site";
import { listingTypes, useListingFilter } from "./listing-filter";

const categoryIcons: Record<CategoryKey, typeof Building> = {
  bina: Building2,
  arsa: Trees,
  ev: Home,
  ofis: Building,
};

const select =
  "h-12 w-full appearance-none rounded-md border-0 bg-transparent px-3 text-small font-medium text-ink outline-none";

const toListings = () => document.getElementById("ilanlar")?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const { filter, setFilter } = useListingFilter();

  return (
    <section
      className="relative bg-navy bg-cover bg-center pt-20 pb-14 text-center text-white sm:pt-24"
      style={{ backgroundImage: "linear-gradient(rgba(0,7,45,0.45), rgba(0,7,45,0.55)), url(/media/brand/hero-bg.jpg)" }}
    >
      <div className="container-x">
        <p className="text-brand">Sezer Invest</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-display">
          Her Türlü <span className="text-cyan">Kiralık ve Satılık</span> Gayrimenküllerinizi Değerlendirmek İçin Bize
          Ulaşabilirsiniz
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lead text-white/85">
          Güvenli yatırımlarla geleceğinize değer katın. Yenilikçi çözümlerle başarıya giden yolda yanınızdayız.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toListings();
          }}
          className="mx-auto mt-12 grid max-w-5xl gap-1 rounded-lg bg-white/15 p-1.5 shadow-2xl shadow-black/30 sm:grid-cols-[1fr_auto_auto_auto]"
        >
          <label className="flex items-center rounded-md bg-white px-3">
            <span className="sr-only">İlan başlığı ile ara</span>
            <input
              value={filter.query}
              onChange={(e) => setFilter({ query: e.target.value })}
              placeholder="İlan başlığı ile ara..."
              className="h-12 w-full bg-transparent text-small font-medium text-ink outline-none placeholder:text-ink-soft"
            />
          </label>
          <div className="rounded-md bg-white sm:w-44">
            <select
              aria-label="İlan tipi"
              value={filter.status}
              onChange={(e) => setFilter({ status: e.target.value as typeof filter.status })}
              className={select}
            >
              <option value="">İlan Tipi Seç</option>
              <option value="kiralik">Kiralık</option>
              <option value="satilik">Satılık</option>
            </select>
          </div>
          <div className="rounded-md bg-white sm:w-48">
            <select
              aria-label="İlan türü"
              value={filter.type}
              onChange={(e) => setFilter({ type: e.target.value })}
              className={select}
            >
              <option value="">İlan Türü Seç</option>
              {listingTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <button className="flex h-12 items-center justify-center gap-2 rounded-md bg-cyan px-8 text-small font-semibold text-white transition hover:bg-gold">
            <Search className="size-4" /> Arama
          </button>
        </form>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {categories.map((c) => {
            const Icon = categoryIcons[c.key];
            const active = filter.category === c.key;
            return (
              <button
                key={c.key}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter({ category: active ? "" : c.key });
                  toListings();
                }}
                className={`flex flex-col items-center gap-3 rounded-md border px-4 py-7 transition ${
                  active ? "border-cyan bg-cyan/15" : "border-white/25 bg-white/5 hover:border-cyan hover:bg-white/10"
                }`}
              >
                <Icon className="size-9 stroke-[1.4]" />
                <span className="text-small font-medium">{c.label}</span>
              </button>
            );
          })}
        </div>

        <button type="button" onClick={toListings} aria-label="İlanlara in" className="mx-auto mt-12 flex flex-col items-center text-cyan">
          <span className="flex h-10 w-6 justify-center rounded-full border-2 border-white/70 pt-2">
            <span className="h-2 w-1 animate-bounce rounded-full bg-white" />
          </span>
          <ChevronsDown className="mt-1 size-5" />
        </button>
      </div>
    </section>
  );
}
