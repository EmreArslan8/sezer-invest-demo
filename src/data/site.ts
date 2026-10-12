// Tüm metinler mevcut sezerinvest.com.tr içeriğinden alınmıştır.

export const SOURCE = "https://www.sezerinvest.com.tr";

export const contact = {
  company: "Sezer Invest",
  phone: "+90 537 848 70 08",
  phoneHref: "tel:+905378487008",
  whatsapp: "905378487008",
  email: "info@sezerinvest.com.tr",
  address: "Hamidiye Mah., Zeynep Sok., No:4A, Kağıthane, İstanbul",
  instagram: "https://www.instagram.com/sezer.invest/",
  facebook: "https://www.facebook.com/people/Sezer-Invest-Gayrimenkul-Danışmanlık/61565893199413/",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const p = (slug: string) => `${SOURCE}/${slug}/`;

export const nav: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "#",
    children: [
      { label: "Nasıl Çalışıyoruz?", href: p("nasil-calisiyoruz") },
      { label: "Vizyon ve Misyonumuz", href: p("vizyon-ve-misyonumuz") },
      { label: "Sertifika ve Belgelerimiz", href: p("sertifika-ve-belgelerimiz") },
      { label: "Bizimle Çalışmak İster misiniz?", href: p("bizimle-calismak-ister-misiniz") },
      { label: "KVKK", href: p("kvkk") },
    ],
  },
  { label: "Ev Sahibi Sistemi", href: p("ev-sahibi-sistemi") },
  {
    label: "Hizmetlerimiz",
    href: p("hizmetlerimiz"),
    children: [
      { label: "Mülk ve Kiracı Yönetimi", href: p("mulk-ve-kiraci-yonetimi") },
      { label: "Gayrimenkul Alım, Satım, Kiralama", href: p("gayrimenkul-alim-satim-kiralama") },
      { label: "Ofis Kiralama ve Satış Yönetimi", href: p("ofis-kiralama-ve-satis-yonetimi") },
    ],
  },
  {
    label: "İlanlarımız",
    href: "#ilanlar",
    children: [
      { label: "Sizden Gelenler", href: p("sizden-gelenler") },
      { label: "Sahibinden", href: "https://www.sahibinden.com" },
      { label: "Hepsi Emlak", href: "https://www.hepsiemlak.com" },
    ],
  },
  { label: "Blog", href: p("blog") },
  { label: "İletişim", href: p("iletisim") },
];

export const categories = [
  { key: "bina", label: "Bina" },
  { key: "arsa", label: "Arsa - Tarla" },
  { key: "ev", label: "Ev" },
  { key: "ofis", label: "Ofis" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

/** Kategori → ilan "Tip" alanı eşlemesi. Yeni tip eklendiğinde yalnızca burası güncellenir. */
export const categoryTypes: Record<CategoryKey, string[]> = {
  bina: ["BİNA"],
  arsa: ["ARSA", "TARLA"],
  ev: ["RESİDANCE/DAİRE", "DAİRE", "VİLLA", "MÜSTAKİL"],
  ofis: ["OFİS", "DÜKKAN"],
};

export const about = {
  eyebrow: "SEZER INVEST",
  title: "Gayrimenkulünüzle ilgili tüm ihtiyaçlarınızda Sezer Invest’in farkını yaşayın.",
  text: "Sezer Invest olarak kalıplaşmış emlak anlayışını geride bırakarak yenilikçi bir yaklaşım benimsiyoruz. Hem mülk sahiplerine hem de kiracılara 7/24 erişilebilir hizmet sunuyor, işlemleri dijital ortama taşıyarak hız ve güvenliği bir arada sunuyoruz. Gayrimenkul sektöründe güçlü bir çözüm ortağı olmayı hedefliyor, müşterilerimizin beklentilerini aşan sonuçlar üretmek için çalışıyoruz.",
  points: ["Resmi işlemlerde profesyonel destek", "Mülk yönetimi ve teknik destek hizmetleri"],
};

export const testimonials = [
  {
    name: "Ali Yılmaz",
    text: "Sezer Invest ile çalışmak gerçek bir ayrıcalıktı. Dijital platformları sayesinde mülküm kısa sürede kiralandı. Tüm süreç boyunca 7/24 online destek aldım ve işlemlerim inanılmaz hızlı ilerledi. Gayrimenkul sektöründe böyle yenilikçi bir yaklaşımı deneyimlemek çok keyifliydi. Mülk sahibi olarak içim artık çok rahat.",
  },
  {
    name: "Zeynep Demir",
    text: "Uzun vadeli kiralık bir ev arayışındaydım ve Sezer Invest ile yollarımız kesişti. Geniş portföyleri sayesinde ihtiyacıma uygun bir ev bulmam çok kolay oldu. Tüm süreç, profesyonel bir ekibin desteğiyle sorunsuz şekilde ilerledi. Ev kiralama sürecinin bu kadar kolay olacağını hiç düşünmezdim!",
  },
  {
    name: "Mehmet Kaya",
    text: "Sezer Invest’in sunduğu teknik destek paketlerinden yararlandım ve gerçekten çok memnun kaldım. Evimin kullanılabilirliği sürekli sağlandı ve herhangi bir sorun yaşamadım. Mülk yönetimi konusunda bu kadar kapsamlı bir hizmet alabileceğimi düşünmezdim. Tüm ekibe teşekkür ederim!",
  },
];

export const footerLinks = {
  quick: [
    { label: "Nasıl Çalışıyoruz?", href: p("nasil-calisiyoruz") },
    { label: "Sertifika ve Belgelerimiz", href: p("sertifika-ve-belgelerimiz") },
    { label: "Bizimle Çalışmak İster misiniz?", href: p("bizimle-calismak-ister-misiniz") },
    { label: "Ev Sahibi Sistemi", href: p("ev-sahibi-sistemi") },
    { label: "Hizmetlerimiz", href: p("hizmetlerimiz") },
  ],
  listings: [
    { label: "Sizden Gelenler", href: p("sizden-gelenler") },
    { label: "Sahibinden", href: "https://www.sahibinden.com" },
    { label: "Hepsi Emlak", href: "https://www.hepsiemlak.com" },
  ],
};

export const agent = "Halil İbrahim Sezer";
