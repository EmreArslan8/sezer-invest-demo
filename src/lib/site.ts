export const site = {
  name: "Sezer Invest",
  legalName: "Sezer Invest Gayrimenkul",
  tagline: "Gayrimenkulde dijital ve güvenilir çözüm ortağınız",
  description:
    "Sezer Invest; gayrimenkul alım, satım, kiralama, ofis yönetimi ve mülk-kiracı yönetimi hizmetlerini dijital ve şeffaf bir süreçle sunar.",
  url: "https://www.sezerinvest.com.tr",
  phone: "+90 537 848 70 08",
  phoneHref: "tel:+905378487008",
  whatsappHref: "https://wa.me/905378487008",
  email: "info@sezerinvest.com.tr",
  city: "İstanbul",
  region: "Kağıthane / İstanbul",
};

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/ilanlar", label: "İlanlar" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  features: { title: string; text: string }[];
  steps: string[];
  premium?: boolean;
};

export const services: Service[] = [
  {
    slug: "gayrimenkul-alim-satim-kiralama",
    title: "Gayrimenkul Alım, Satım, Kiralama",
    short:
      "Konut ve ticari gayrimenkullerde doğru değerleme, hedefli pazarlama ve güvenli işlem süreci.",
    intro:
      "Mülkünüzü satarken, kiraya verirken ya da yeni bir yatırım ararken tüm süreci uçtan uca yönetiyoruz. Piyasa analizinden tapu devrine kadar her adımda yanınızdayız.",
    features: [
      { title: "Piyasa Değerlemesi", text: "Bölge verileri ve emsal analizleriyle gerçekçi fiyatlandırma." },
      { title: "Profesyonel Pazarlama", text: "Profesyonel fotoğraf, ilan yönetimi ve hedefli dijital tanıtım." },
      { title: "Alıcı / Kiracı Eşleştirme", text: "Ön elemeden geçmiş, ciddi ve doğru adaylarla görüşmeler." },
      { title: "Hukuki ve Tapu Süreçleri", text: "Sözleşme, ekspertiz ve tapu işlemlerinde eksiksiz takip." },
    ],
    steps: ["Ücretsiz ön görüşme", "Değerleme ve strateji", "Pazarlama ve gösterimler", "Pazarlık ve sözleşme", "Tapu / teslim"],
  },
  {
    slug: "ofis-kiralama-ve-satis-yonetimi",
    title: "Ofis Kiralama ve Satış Yönetimi",
    short:
      "Kurumsal ihtiyaçlara uygun ofis ve ticari alanların bulunması, kiralanması ve satış yönetimi.",
    intro:
      "Şirketinizin büyüme planına uygun ofis alanını bulmak ya da ticari mülkünüzü doğru kurumsal kiracıyla buluşturmak için sürecin tamamını profesyonelce yönetiyoruz.",
    features: [
      { title: "İhtiyaç Analizi", text: "Ekip büyüklüğü, lokasyon ve bütçeye göre alan planlaması." },
      { title: "Portföy Taraması", text: "Plaza, iş merkezi ve müstakil ofis seçeneklerinin karşılaştırması." },
      { title: "Kurumsal Kiracı Ağı", text: "Ticari mülkler için güvenilir kurumsal kiracı bağlantıları." },
      { title: "Sözleşme Müzakeresi", text: "Kira artış, süre ve tadilat koşullarında lehinize pazarlık." },
    ],
    steps: ["İhtiyaç belirleme", "Alternatif sunumu", "Yerinde inceleme", "Müzakere", "Teslim ve taşınma desteği"],
  },
  {
    slug: "mulk-ve-kiraci-yonetimi",
    title: "Mülk ve Kiracı Yönetimi",
    short:
      "Kira tahsilatından bakım-onarıma, kiracı ilişkilerinden 7/24 acil destek hattına kadar tam yönetim.",
    intro:
      "Mülkünüzün değerini korurken size zaman kazandırıyoruz. Kiracı ilişkileri, bakım-onarım ve kira süreçleri tek bir noktadan, dijital raporlarla yönetilir.",
    features: [
      { title: "Kira Takibi", text: "Düzenli tahsilat takibi ve aylık dijital raporlama." },
      { title: "Bakım ve Onarım", text: "Periyodik kontroller ve anlaşmalı ustalarla hızlı müdahale." },
      { title: "Kiracı İlişkileri", text: "Tüm talep ve iletişimin profesyonel yönetimi." },
      { title: "7/24 Acil Destek", text: "Su kaçağı, elektrik arızası gibi acil durumlarda kesintisiz destek." },
    ],
    steps: ["Mülk inceleme", "Yönetim planı", "Kiracı yerleştirme", "Düzenli raporlama", "Sürekli bakım"],
    premium: true,
  },
];

export const stats = [
  { value: "7/24", label: "Mülk sahibi ve kiracı desteği" },
  { value: "%100", label: "Dijital ve şeffaf süreç" },
  { value: "3", label: "Uzmanlık alanı" },
  { value: "İstanbul", label: "Odak bölge" },
];
