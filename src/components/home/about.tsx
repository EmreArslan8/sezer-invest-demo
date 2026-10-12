import Image from "next/image";
import { FileCheck2, ClipboardCheck } from "lucide-react";
import { about } from "@/data/site";

const icons = [FileCheck2, ClipboardCheck];

export function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Image
          src="/media/brand/gallery.webp"
          alt="Sezer Invest portföyünden iç mekan görselleri"
          width={1180}
          height={967}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full"
        />

        <div>
          <p className="text-eyebrow text-gold">{about.eyebrow}</p>
          <h2 className="mt-3 text-h2">{about.title}</h2>
          <span aria-hidden className="mt-5 flex items-center gap-2 text-gold">
            <span className="grid size-4 place-items-center border border-current">
              <span className="size-1.5 bg-current" />
            </span>
            <span className="w-12 border-t-2 border-dotted border-current" />
          </span>
          <p className="mt-5 text-body text-ink-soft">{about.text}</p>

          <ul className="mt-8 grid gap-6">
            {about.points.map((p, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={p} className="flex items-center gap-5">
                  <span className="grid size-16 shrink-0 place-items-center rounded-lg border border-gold/40 text-gold">
                    <Icon className="size-8 stroke-[1.4]" />
                  </span>
                  <span className="text-h3">{p}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
