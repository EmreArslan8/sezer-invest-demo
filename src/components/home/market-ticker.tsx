import { BarChart3 } from "lucide-react";
import { getRates } from "@/lib/rates";

const fmt = new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export async function MarketTicker() {
  const data = await getRates();
  if (!data) return null;

  const items = data.rates.map((r) => (
    <span key={r.code} className="flex shrink-0 items-center gap-2 rounded-md bg-white/5 px-3 py-1">
      <span className="font-semibold text-white">{r.code}/TRY</span>
      <span className="text-white/80 tabular-nums">{fmt.format(r.value)}</span>
    </span>
  ));

  return (
    <div className="flex h-9 items-center gap-3 overflow-hidden bg-ink text-tiny text-white/70">
      <span className="flex shrink-0 items-center gap-1.5 pl-4 font-semibold text-white">
        <BarChart3 className="size-3.5 text-cyan" /> Piyasa Özeti
      </span>
      <span className="shrink-0 rounded bg-cyan/15 px-2 py-0.5 font-semibold text-cyan">DÖVİZ</span>
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="animate-ticker flex w-max gap-2" aria-label="Döviz kurları">
          {items}
          <span aria-hidden className="flex gap-2">{items}</span>
        </div>
      </div>
      <span className="hidden shrink-0 pr-4 sm:block">
        <span className="font-semibold text-cyan">TCMB</span> Günlük Kurlar · {data.date}
      </span>
    </div>
  );
}
