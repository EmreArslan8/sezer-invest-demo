import type { MetadataRoute } from "next";
import { listings } from "@/lib/listings";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/kurumsal",
    "/hizmetlerimiz",
    "/ilanlar",
    "/iletisim",
    ...services.map((s) => `/hizmetlerimiz/${s.slug}`),
    ...listings.map((l) => `/ilanlar/${l.id}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
