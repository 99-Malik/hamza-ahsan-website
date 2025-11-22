import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

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
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17395932761" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17395932761');
        ` }} />

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
