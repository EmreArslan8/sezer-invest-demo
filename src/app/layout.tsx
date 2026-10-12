import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Sezer Invest – Profesyonel Emlak Danışmanlığı",
  description:
    "Kağıthane merkezli Sezer Invest: kiralık ve satılık gayrimenkul, mülk ve kiracı yönetimi, ofis kiralama ve ücretsiz ekspertiz.",
  icons: { icon: "/media/brand/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
