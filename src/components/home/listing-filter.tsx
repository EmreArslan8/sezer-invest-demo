"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { listings, type ListingStatus } from "@/lib/listings";
import { categoryTypes, type CategoryKey } from "@/data/site";

export type Filter = {
  status: ListingStatus | "";
  type: string;
  category: CategoryKey | "";
  query: string;
};

type Ctx = {
  filter: Filter;
  setFilter: (f: Partial<Filter>) => void;
  reset: () => void;
  active: boolean;
  results: typeof listings;
};

const empty: Filter = { status: "", type: "", category: "", query: "" };
const FilterContext = createContext<Ctx | null>(null);
const norm = (s: string) => s.toLocaleLowerCase("tr-TR");

export function ListingFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setState] = useState<Filter>(empty);

  const value = useMemo<Ctx>(() => {
    const q = norm(filter.query.trim());
    const results = listings.filter(
      (l) =>
        (!filter.status || l.status === filter.status) &&
        (!filter.type || l.type === filter.type) &&
        (!filter.category || categoryTypes[filter.category].includes(l.type)) &&
        (!q || norm(`${l.title} ${l.address}`).includes(q)),
    );
    return {
      filter,
      results,
      active: Object.values(filter).some(Boolean),
      setFilter: (f) => setState((prev) => ({ ...prev, ...f })),
      reset: () => setState(empty),
    };
  }, [filter]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useListingFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useListingFilter, ListingFilterProvider içinde kullanılmalı");
  return ctx;
}

export const listingTypes = [...new Set(listings.map((l) => l.type))];
