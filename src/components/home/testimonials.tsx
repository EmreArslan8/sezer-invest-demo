import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Müşterilerimiz Ne Diyor?"
          text="Sezer Invest olarak her zaman müşteri memnuniyetini önceliğimiz yapıyoruz. Mülk sahiplerinden kiracılara kadar herkesin ihtiyaçlarını yenilikçi ve güvenilir çözümlerle karşılamaktan gurur duyuyoruz."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border border-line bg-white p-6 shadow-md shadow-ink/5">
              <div className="flex items-center gap-3">
                <Image src="/media/brand/logo.png" alt="" width={600} height={455} className="h-10 w-auto" />
                <figcaption className="flex-1 text-h3">{t.name}</figcaption>
                <Quote className="size-9 text-cyan/30" />
              </div>
              <blockquote className="mt-4 text-small text-ink-soft">{t.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
