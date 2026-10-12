import Image from "next/image";
import { Bath, BedDouble, CalendarDays, Car, MapPin, UserRound } from "lucide-react";
import { agent } from "@/data/site";
import { formatDate, formatPrice, statusLabel, type Listing } from "@/lib/listings";

export function ListingCard({ listing: l }: { listing: Listing }) {
  const facts = [
    { icon: BedDouble, label: "Yatak Odası", value: l.bedrooms },
    { icon: Bath, label: "Banyo", value: l.bathrooms },
    { icon: Car, label: "Park Alanı", value: l.parking },
  ];

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-ink/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <a href={l.sourceUrl} target="_blank" rel="noopener" className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={l.image}
          alt={l.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 flex flex-wrap gap-1.5 text-tiny font-semibold text-white">
          <span className="rounded bg-orange px-2 py-1">{l.type}</span>
          <span className="rounded bg-cyan px-2 py-1">İlan Tipi {statusLabel[l.status]}</span>
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-10 pb-3 text-white">
          <span className="block text-small">{l.area} m²</span>
          <span className="block text-h3 font-bold">
            {formatPrice(l.price)}
            {l.priceNote && <span className="ml-1.5 text-tiny font-semibold uppercase">{l.priceNote}</span>}
          </span>
        </span>
      </a>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-3 text-h3 uppercase">
          <a href={l.sourceUrl} target="_blank" rel="noopener" className="hover:text-gold">
            {l.title}
          </a>
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-small text-ink-soft">
          <MapPin className="mt-0.5 size-3.5 shrink-0" />
          <span className="line-clamp-2">{l.address}</span>
        </p>

        <ul className="mt-4 grid grid-cols-3 divide-x divide-line rounded-md border border-line text-center">
          {facts.map((f) => (
            <li key={f.label} className="px-1 py-2">
              <span className="block text-tiny text-ink-soft">{f.label}</span>
              <span className="mt-1 flex items-center justify-center gap-1 text-small font-semibold">
                <f.icon className="size-3.5 text-ink-soft" /> {f.value ?? "NA"}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-tiny text-ink-soft">
          <span className="flex items-center gap-1.5 font-semibold text-ink">
            <UserRound className="size-3.5" /> {agent}
          </span>
          {l.date && (
            <span className="flex items-center gap-1">
              <CalendarDays className="size-3.5" /> {formatDate(l.date)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
