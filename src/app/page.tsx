import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { listings } from "@/lib/listings";
import { services, site, stats } from "@/lib/site";

const reasons = [
  { title: "Dijital Süreç", text: "Sözleşmeden raporlamaya kadar tüm adımları online takip edin." },
  { title: "7/24 Ulaşılabilirlik", text: "Mülk sahipleri ve kiracılar için kesintisiz destek hattı." },
  { title: "Yetki Belgeli", text: "Taşınmaz Ticareti Yetki Belgesi ile güvenilir ve yasal hizmet." },
  { title: "Şeffaf İletişim", text: "Her aşamada net bilgilendirme, sürpriz maliyet yok." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(201,162,77,0.3),transparent_55%)]" />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow !text-gold-400">{site.legalName}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-6xl">
              Mülkünüz için <span className="text-gold-400">güvenilir</span> ve dijital çözüm ortağı
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Alım, satım, kiralama ve mülk yönetiminde uçtan uca profesyonel hizmet. Mülk sahipleri ve
              kiracılar için 7/24 ulaşılabilir, şeffaf bir süreç.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ilanlar" className="rounded-md bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-400">
                İlanları İncele
              </Link>
              <Link href="/iletisim" className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-bold hover:bg-white/10">
                Ücretsiz Değerleme İste
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="font-display text-3xl font-bold text-gold-400 sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Gayrimenkulün her aşamasında yanınızdayız"
            text="Konuttan ticari alana, tek seferlik satıştan uzun dönem yönetime kadar ihtiyacınıza uygun hizmet."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="group relative rounded-xl border border-navy-900/10 bg-cream p-8 transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg"
              >
                <span className="font-display text-5xl font-bold text-gold-500/40">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{s.short}</p>
                <span className="mt-6 inline-block text-sm font-bold text-gold-600 group-hover:underline">
                  Detaylı bilgi →
                </span>
                {s.premium && (
                  <span className="absolute top-6 right-6 rounded-full bg-navy-900 px-3 py-1 text-[10px] font-bold tracking-wider text-gold-300 uppercase">
                    Premium
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* İlanlar */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Portföy" title="Öne çıkan ilanlar" />
            <Link href="/ilanlar" className="text-sm font-bold text-gold-600 hover:underline">
              Tüm ilanlar →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.slice(0, 3).map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Neden biz */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Neden Sezer Invest?"
            title="Gayrimenkulde yeni nesil hizmet anlayışı"
            text="Geleneksel emlak danışmanlığını dijital araçlarla birleştiriyoruz. Mülkünüzle ilgili her şey tek bir noktadan, şeffaf ve ölçülebilir şekilde yönetilir."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-navy-900/10 p-6">
                <div className="mb-4 h-1 w-10 rounded bg-gold-500" />
                <h3 className="font-bold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm text-navy-700/80">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow !text-gold-400">Bize Ulaşın</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Mülkünüzü birlikte değerlendirelim</h2>
            <p className="mt-4 text-white/70">
              Formu doldurun, uzman danışmanımız en kısa sürede sizi arasın. Dilerseniz doğrudan arayabilir
              veya WhatsApp üzerinden yazabilirsiniz.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={site.phoneHref} className="block font-bold text-gold-300">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block text-white/80">{site.email}</a>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 text-navy-900 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
