import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Sezer Invest hakkında: vizyon ve misyonumuz, sertifika ve belgelerimiz, kariyer.",
};

const values = [
  { title: "Güven", text: "Her işlemde yasal ve şeffaf süreç." },
  { title: "Hız", text: "Dijital altyapı ile hızlı dönüş ve takip." },
  { title: "Uzmanlık", text: "Bölgeyi ve piyasayı yakından tanıyan ekip." },
  { title: "Süreklilik", text: "Satış sonrasında da devam eden ilişki." },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        title="Kurumsal"
        description={site.tagline}
        crumbs={[{ href: "/kurumsal", label: "Kurumsal" }]}
      />

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Gayrimenkulde dijital dönüşümün öncüsü"
            text="Sezer Invest; gayrimenkul alım, satım ve kiralama süreçlerini dijital bir formatta yürüten, mülk sahipleri ve kiracılara 7/24 erişim imkânı sunan bir gayrimenkul danışmanlık firmasıdır. Konut ve ticari mülklerde, satış öncesinden kira yönetimine kadar tüm süreci tek elden yönetiyoruz."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-cream p-6">
                <h3 className="font-display text-xl font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-navy-700/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vizyon-misyon" className="scroll-mt-28 bg-navy-900 py-20 text-white">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="eyebrow !text-gold-400">Vizyonumuz</p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Gayrimenkul hizmetlerinde teknolojiyi ve insan odaklı danışmanlığı birleştirerek, İstanbul&apos;un en
              güvenilir ve erişilebilir gayrimenkul markalarından biri olmak.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="eyebrow !text-gold-400">Misyonumuz</p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Mülk sahipleri, yatırımcılar ve kiracılar için doğru bilgiye dayalı, şeffaf ve hızlı çözümler üreterek
              her işlemde kalıcı bir güven ilişkisi kurmak.
            </p>
          </div>
        </div>
      </section>

      <section id="sertifikalar" className="scroll-mt-28 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Sertifika ve Belgelerimiz" title="Yetkili ve güvenilir hizmet" center />
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {["Taşınmaz Ticareti Yetki Belgesi", "Mesleki Yeterlilik Belgesi"].map((doc) => (
              <div key={doc} className="flex items-center gap-4 rounded-xl border border-navy-900/10 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-500/20 text-xl text-gold-600">★</span>
                <span className="font-semibold text-navy-900">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kariyer" className="scroll-mt-28 bg-cream py-20">
        <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Kariyer"
            title="Bizimle çalışmak ister misiniz?"
            text="Gayrimenkul sektöründe kariyer yapmak isteyen, dinamik ve müşteri odaklı ekip arkadaşları arıyoruz."
          />
          <Link
            href="/iletisim"
            className="rounded-md bg-navy-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-navy-700"
          >
            Başvuru Yap
          </Link>
        </div>
      </section>
    </>
  );
}
