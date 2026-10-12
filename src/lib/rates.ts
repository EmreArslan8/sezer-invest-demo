import "server-only";

export type Rate = { code: string; value: number };

const CODES = ["USD", "EUR", "GBP", "CHF", "AUD", "CAD", "SAR", "JPY", "RUB", "CNY", "AZN"];

/** TCMB günlük kurları (döviz satış). Saatlik yenilenir; hata olursa şerit gizlenir. */
export async function getRates(): Promise<{ date: string; rates: Rate[] } | null> {
  try {
    const res = await fetch("https://www.tcmb.gov.tr/kurlar/today.xml", { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const xml = await res.text();
    const date = xml.match(/Tarih="([^"]+)"/)?.[1] ?? "";
    const rates = CODES.flatMap((code) => {
      const block = xml.match(new RegExp(`CurrencyCode="${code}">([\\s\\S]*?)</Currency>`))?.[1];
      // JPY gibi 100 birimlik kurlar TCMB'nin yayınladığı haliyle gösterilir.
      const sell = Number(block?.match(/<ForexSelling>([\d.]+)<\/ForexSelling>/)?.[1]);
      return sell ? [{ code, value: sell }] : [];
    });
    return rates.length ? { date, rates } : null;
  } catch {
    return null;
  }
}
