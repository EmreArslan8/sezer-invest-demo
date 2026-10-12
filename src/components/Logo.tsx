import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Sezer Invest ana sayfa">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-gold-500 font-display text-xl font-bold text-navy-950">
        S
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold ${light ? "text-white" : "text-navy-900"}`}>
          Sezer Invest
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.25em] uppercase ${light ? "text-gold-300" : "text-gold-600"}`}>
          Gayrimenkul
        </span>
      </span>
    </Link>
  );
}
