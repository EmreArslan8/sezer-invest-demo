import Image from "next/image";
import { ChevronRight, Mail, MessageCircle, Phone } from "lucide-react";
import { SOURCE, contact, footerLinks } from "@/data/site";

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-h3 text-white">{title}</h3>
      <span aria-hidden className="mt-2 block w-10 border-t-2 border-gold" />
      <ul className="mt-5 grid gap-3 text-small">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="flex items-start gap-1.5 text-white/75 hover:text-gold-light">
              <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-gold" /> {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <footer
        className="bg-ink bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(-135deg, #00072b, rgba(0,28,85,0.9)), url(/media/brand/footer-bg.webp)",
        }}
      >
        <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/media/brand/logo.png" alt="Sezer Invest Real Estate" width={600} height={455} className="h-28 w-auto" />
            <ul className="mt-6 grid gap-3 text-small">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-gold-light">
                  <Phone className="size-4 text-gold" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-gold-light">
                  <Mail className="size-4 text-gold" /> {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <LinkList title="Hızlı Linkler" links={footerLinks.quick} />
          <LinkList title="Hızlı İlanlar" links={footerLinks.listings} />

          <div>
            <h3 className="text-h3">İlan Ekle</h3>
            <span aria-hidden className="mt-2 block w-10 border-t-2 border-gold" />
            <p className="mt-5 text-small text-white/75">
              Sistemimize dahil olarak ilanlarını ekleyebilir ve en son eklenen ilanları kontrol edebilirsiniz.
            </p>
            <a href={`${SOURCE}/signup/`} className="mt-5 inline-flex rounded-md bg-gold px-5 py-2.5 text-small font-semibold hover:bg-gold-light">
              Kayıt Ol
            </a>
          </div>
        </div>

        <div className="bg-ink/80">
          <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5 text-small text-white/70">
            <p>© {new Date().getFullYear()} {contact.company}</p>
            <div className="flex gap-2">
              <a href={contact.facebook} target="_blank" rel="noopener" className="rounded bg-gold px-3 py-1.5 text-tiny font-semibold text-white">
                Facebook
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener" className="rounded bg-gold px-3 py-1.5 text-tiny font-semibold text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener"
        className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25d366] py-2 pr-4 pl-2 text-small font-semibold text-white shadow-lg shadow-black/25 hover:brightness-105"
      >
        <span className="grid size-9 place-items-center rounded-full bg-white/20">
          <MessageCircle className="size-5" />
        </span>
        Bize Ulaşın
      </a>
    </>
  );
}
