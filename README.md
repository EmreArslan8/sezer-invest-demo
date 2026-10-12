# Sezer Invest — Next.js Demo

[sezerinvest.com.tr](https://www.sezerinvest.com.tr) WordPress sitesinin özel yazılıma (Next.js) geçişi için demo.

## Teknoloji

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Server Action ile iletişim formu (doğrulama dahil)

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Ana sayfa: hero, hizmetler, öne çıkan ilanlar, neden biz, iletişim formu |
| `/kurumsal` | Hakkımızda, vizyon & misyon, sertifikalar, kariyer |
| `/hizmetlerimiz` | Hizmet listesi |
| `/hizmetlerimiz/[slug]` | Hizmet detayları (alım-satım-kiralama, ofis, mülk-kiracı yönetimi) |
| `/ilanlar` | İlan listesi, satılık / kiralık filtresi (`?tip=satilik`) |
| `/ilanlar/[id]` | İlan detayı, arama / WhatsApp / form |
| `/iletisim` | İletişim kanalları ve form |

Ayrıca `sitemap.xml`, `robots.txt`, 404 sayfası ve sabit WhatsApp butonu bulunur.

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Demo notları / canlıya geçiş öncesi yapılacaklar

- **İçerik:** Firma bilgileri `src/lib/site.ts`, ilanlar `src/lib/listings.ts` içinde. İlanlar örnek veridir ("Demo ilan" etiketli); gerçek portföy için yönetim paneli / CMS veya CRM entegrasyonu eklenmeli.
- **Görseller:** İlan görselleri şimdilik ilana özel SVG illüstrasyonlarıdır; gerçek fotoğraflar `next/image` ile eklenecek.
- **Logo ve renkler:** Geçici logo ve lacivert/altın palet kullanıldı (`src/app/globals.css`). Kurumsal kimlik dosyaları gelince güncellenmeli.
- **İletişim formu:** `src/app/actions.ts` şu an yalnızca sunucu loguna yazar; e-posta (Resend/SMTP) veya CRM bağlantısı eklenmeli.
- **Metinler:** Vizyon-misyon ve hakkımızda metinleri taslaktır, mevcut siteden birebir aktarılmalı.
- **SEO yönlendirmeleri:** Eski WordPress URL'leri (`/hizmetlerimiz/...`) korunmuştur; diğer eski adresler için `next.config.ts` içinde 301 yönlendirmeleri tanımlanmalı.
