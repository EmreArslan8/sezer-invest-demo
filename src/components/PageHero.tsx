import Link from "next/link";

export default function PageHero({
  title,
  description,
  crumbs = [],
}: {
  title: string;
  description?: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,77,0.25),transparent_50%)]" />
      <div className="container-x relative py-16 sm:py-20">
        <nav aria-label="Sayfa yolu" className="mb-4 flex flex-wrap gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-gold-300">Ana Sayfa</Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex gap-2">
              <span>/</span>
              <Link href={c.href} className="hover:text-gold-300">{c.label}</Link>
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl font-display text-3xl font-bold sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-white/75">{description}</p>}
      </div>
    </section>
  );
}
