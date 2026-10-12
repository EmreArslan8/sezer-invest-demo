import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-32 text-center">
      <p className="font-display text-7xl font-bold text-gold-500">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-navy-900">Sayfa bulunamadı</h1>
      <p className="mt-3 text-navy-700/80">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
      <Link href="/" className="mt-8 rounded-md bg-navy-900 px-7 py-3 text-sm font-bold text-white hover:bg-navy-700">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
