import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/hizmetlerimiz/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage(props: PageProps<"/hizmetlerimiz/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        description={service.intro}
        crumbs={[
          { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
          { href: `/hizmetlerimiz/${service.slug}`, label: service.title },
        ]}
      />
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {service.premium && (
              <div className="rounded-xl border border-gold-500/40 bg-gold-300/20 p-5 text-sm text-navy-900">
                <strong>Premium paket:</strong> 7/24 acil destek hattı yalnızca Premium yönetim paketine dahildir.
              </div>
            )}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Neler sunuyoruz?</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div key={f.title} className="rounded-xl border border-navy-900/10 bg-cream p-6">
                    <h3 className="font-bold text-navy-900">{f.title}</h3>
                    <p className="mt-2 text-sm text-navy-700/80">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Süreç nasıl işler?</h2>
              <ol className="mt-6 space-y-4">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-bold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-navy-900">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <aside className="h-fit rounded-xl border border-navy-900/10 p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-bold text-navy-900">Bilgi alın</h2>
            <p className="mt-1 mb-5 text-sm text-navy-700/80">
              veya hemen arayın: <a href={site.phoneHref} className="font-bold text-gold-600">{site.phone}</a>
            </p>
            <ContactForm defaultSubject={service.title} compact />
          </aside>
        </div>
      </section>
    </>
  );
}
