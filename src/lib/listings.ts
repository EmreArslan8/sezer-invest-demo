import data from "@/data/listings.json";

export type ListingStatus = "satilik" | "kiralik";

export type Listing = {
  id: number | null;
  slug: string;
  title: string;
  status: ListingStatus;
  type: string;
  price: number;
  priceNote: string | null;
  area: number;
  address: string;
  bedrooms: string | null;
  bathrooms: string | null;
  parking: string | null;
  netM2: number | null;
  buildingYear: string | null;
  date: string | null;
  image: string;
  sourceUrl: string;
};

export const listings = data as Listing[];

export const statusLabel: Record<ListingStatus, string> = { satilik: "Satılık", kiralik: "Kiralık" };

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

