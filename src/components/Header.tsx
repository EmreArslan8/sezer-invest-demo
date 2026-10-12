"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="hidden bg-navy-950 text-xs text-white/80 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span>{site.tagline}</span>
          <div className="flex gap-6">
            <a href={site.phoneHref} className="hover:text-gold-300">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-gold-300">{site.email}</a>
          </div>
        </div>
      </div>
      <div className="container-x flex h-18 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                isActive(item.href) ? "text-gold-600" : "text-navy-900 hover:text-gold-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Mülkünüzü Değerlendirelim
          </Link>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-navy-900/15 lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-900/10 bg-white lg:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-semibold ${isActive(item.href) ? "text-gold-600" : "text-navy-900"}`}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-3 text-sm text-navy-700">{site.phone}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
