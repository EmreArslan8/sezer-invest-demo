import Link from "next/link";
import PropertyVisual from "./PropertyVisual";
import { formatPrice, typeLabel, type Listing } from "@/lib/listings";

export default function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/ilanlar/${listing.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-navy-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <PropertyVisual
          hue={listing.hue}
          category={listing.category}
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 rounded px-2.5 py-1 text-xs font-bold text-white ${
            listing.type === "satilik" ? "bg-navy-900" : "bg-gold-600"
          }`}
        >
          {typeLabel[listing.type]}
        </span>
        <span className="absolute top-3 right-3 rounded bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wider text-navy-700 uppercase">
          Demo ilan
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-semibold text-gold-600">
          {listing.district} · {listing.neighborhood}
        </p>
        <h3 className="font-display text-lg font-bold text-navy-900">{listing.title}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy-700/80">
          <span>{listing.category}</span>
          {listing.rooms && <span>{listing.rooms}</span>}
          <span>{listing.area} m²</span>
        </div>
        <p className="mt-auto pt-2 text-xl font-extrabold text-navy-900">{formatPrice(listing)}</p>
      </div>
    </Link>
  );
}
