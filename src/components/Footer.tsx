import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm leading-relaxed">{site.description}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Menü</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-300">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Hizmetlerimiz</h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className="hover:text-gold-300">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">İletişim</h3>
          <ul className="space-y-2 text-sm">
            <li><a href={site.phoneHref} className="hover:text-gold-300">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-gold-300">{site.email}</a></li>
            <li>{site.region}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.</span>
          <span>Taşınmaz Ticareti Yetki Belgeli İşletme</span>
        </div>
      </div>
    </footer>
  );
}
