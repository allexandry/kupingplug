// package
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

// lib
import { cn } from "@/lib/utils";

// css
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arch'Afrik - L'Afrique en beauté, la qualité en priorité",
  description: "Arch'Afrik - Le Portail des Produits Africains Authentiques et de Qualité. Decouvrez les dernieres tendances et collection de produits Africains aux meilleurs prix.",
  keywords: "african products, authentic products, african fashion, african market, african clothing, african accessories, african jewelry, quality products, african beauty, african culture, african heritage, african art, african crafts, african home decor, african food, african spices, african gifts, african souvenirs",
  authors: [{ name: "Arch'Afrik" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },




};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, poppins.variable)}>
      <body>{children}</body>
    </html>
  );
}
