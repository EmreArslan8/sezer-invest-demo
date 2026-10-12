// Demo ilanlar — gerçek portföy entegrasyonu (CRM / ilan sitesi API) yapılana kadar örnek veri.
export type Listing = {
  id: string;
  title: string;
  type: "satilik" | "kiralik";
  category: "Daire" | "Ofis" | "Dükkan" | "Rezidans";
  district: string;
  neighborhood: string;
  price: number;
  rooms?: string;
  area: number;
  floor?: string;
  age?: number;
  features: string[];
  description: string;
  hue: number;
};

export const listings: Listing[] = [
  {
    id: "kagithane-3-1-site-ici",
    title: "Site İçinde Havuzlu 3+1 Daire",
    type: "satilik",
    category: "Daire",
    district: "Kağıthane",
    neighborhood: "Merkez Mah.",
    price: 9_750_000,
    rooms: "3+1",
    area: 135,
    floor: "7. Kat",
    age: 4,
    features: ["Havuz", "Kapalı Otopark", "Güvenlik", "Asansör", "Ebeveyn Banyosu"],
    description:
      "Metroya yürüme mesafesinde, sosyal donatılı site içinde geniş ve aydınlık 3+1 daire. Güney cephe, açık mutfak ve geniş balkon.",
    hue: 215,
  },
  {
    id: "kagithane-2-1-kiralik",
    title: "Metroya Yakın Eşyalı 2+1",
    type: "kiralik",
    category: "Daire",
    district: "Kağıthane",
    neighborhood: "Çağlayan Mah.",
    price: 38_000,
    rooms: "2+1",
    area: 95,
    floor: "3. Kat",
    age: 8,
    features: ["Eşyalı", "Asansör", "Doğalgaz", "Balkon"],
    description:
      "Ulaşım akslarına yakın, bakımlı binada eşyalı 2+1 kiralık daire. Hemen taşınmaya hazır.",
    hue: 160,
  },
  {
    id: "seyrantepe-ofis-plaza",
    title: "Plaza Katında 220 m² Ofis",
    type: "kiralik",
    category: "Ofis",
    district: "Kağıthane",
    neighborhood: "Seyrantepe",
    price: 145_000,
    area: 220,
    floor: "12. Kat",
    age: 6,
    features: ["Resepsiyon", "Toplantı Odası", "Jeneratör", "Otopark", "Manzara"],
    description:
      "A sınıfı plazada, şehir manzaralı, dekorasyonu tamamlanmış ofis katı. Kurumsal firmalar için ideal.",
    hue: 35,
  },
  {
    id: "sisli-rezidans-1-1",
    title: "Rezidans İçinde 1+1 Yatırımlık",
    type: "satilik",
    category: "Rezidans",
    district: "Şişli",
    neighborhood: "Mecidiyeköy",
    price: 7_200_000,
    rooms: "1+1",
    area: 72,
    floor: "15. Kat",
    age: 5,
    features: ["Concierge", "Fitness", "Kapalı Otopark", "Kiracılı"],
    description:
      "Yüksek kira getirili, kiracılı 1+1 rezidans dairesi. Yatırımcılar için düzenli getiri fırsatı.",
    hue: 275,
  },
  {
    id: "kagithane-dukkan-cadde",
    title: "Cadde Üzeri Köşe Dükkan",
    type: "satilik",
    category: "Dükkan",
    district: "Kağıthane",
    neighborhood: "Gültepe",
    price: 14_500_000,
    area: 110,
    floor: "Zemin + Asma",
    age: 12,
    features: ["Köşe Konum", "Geniş Vitrin", "Asma Kat", "Yüksek Tavan"],
    description:
      "Yoğun yaya trafiğine sahip cadde üzerinde, iki cepheli köşe dükkan. Her sektöre uygun.",
    hue: 5,
  },
  {
    id: "besiktas-4-1-bogaz",
    title: "Boğaz Manzaralı 4+1 Daire",
    type: "kiralik",
    category: "Daire",
    district: "Beşiktaş",
    neighborhood: "Levent",
    price: 120_000,
    rooms: "4+1",
    area: 210,
    floor: "9. Kat",
    age: 10,
    features: ["Boğaz Manzarası", "Güvenlik", "Kapalı Otopark", "Giyinme Odası"],
    description:
      "Kısmi Boğaz manzaralı, prestijli lokasyonda geniş aile dairesi. Uzun dönem kiracı tercih edilir.",
    hue: 195,
  },
];

export function formatPrice(listing: Listing) {
  const formatted = new Intl.NumberFormat("tr-TR").format(listing.price);
  return listing.type === "kiralik" ? `${formatted} ₺ / ay` : `${formatted} ₺`;
}

export const typeLabel = { satilik: "Satılık", kiralik: "Kiralık" } as const;

export function getListing(id: string) {
  return listings.find((l) => l.id === id);
}
