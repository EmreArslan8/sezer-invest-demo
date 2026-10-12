import { MarketTicker } from "@/components/home/market-ticker";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ListingFilterProvider } from "@/components/home/listing-filter";
import { About } from "@/components/home/about";
import { ListingsSection } from "@/components/home/listings-section";
import { Testimonials } from "@/components/home/testimonials";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <MarketTicker />
      <Header />
      <main>
        <ListingFilterProvider>
          <Hero />
          <About />
          <ListingsSection />
        </ListingFilterProvider>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
