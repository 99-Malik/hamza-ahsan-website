import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { googleAdsConfig } from "@/config/googleAds";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Appliance Repair Services in Dubai and Abu Dhabi",
  description: "Expert appliance repair services for all major brands. Certified technicians, genuine parts, and same-day service available throughout Dubai and Abu Dhabi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking - Google Tag */}
        <Script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsConfig.tagId}`} 
          strategy="afterInteractive"
        />

        {/* Google Tag Initialization with Enhanced Conversions */}
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsConfig.tagId}', {'allow_enhanced_conversions': true});
          `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen">
          <Header />
          <main className="max-w-screen overflow-hidden">{children}</main>
          <Footer />
          <FloatingContactButtons />
        </div>
      </body>
    </html>
  );
}
