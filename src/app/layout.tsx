import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const grotesque = Space_Grotesk({
  variable: "--font-grotesque-family",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Descolgado",
  description: "Descolgado — a personal blog / digital magazine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${grotesque.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
