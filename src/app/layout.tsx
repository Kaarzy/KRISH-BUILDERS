import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://krishbuilders.com"
  ),
  title: {
    default: "Krish Builders | Premium High-Rise Apartments in Hyderabad",
    template: "%s | Krish Builders",
  },
  description:
    "Hyderabad's trusted name in premium high-rise residential apartments. 15+ years of excellence, 6 landmark projects, 10,000+ happy families. RERA registered.",
  keywords: [
    "Krish Builders",
    "Hyderabad apartments",
    "high-rise apartments",
    "luxury apartments Hyderabad",
    "premium residential",
    "Gachibowli apartments",
    "Kondapur apartments",
    "RERA registered builder",
    "Hyderabad real estate",
  ],
  authors: [{ name: "Krish Builders" }],
  creator: "Krish Builders",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Krish Builders",
    title: "Krish Builders | Premium High-Rise Apartments in Hyderabad",
    description:
      "Hyderabad's trusted name in premium high-rise residential apartments. 15+ years of excellence, 6 landmark projects, 10,000+ happy families.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Krish Builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Builders | Premium High-Rise Apartments in Hyderabad",
    description:
      "Hyderabad's trusted name in premium high-rise residential apartments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
