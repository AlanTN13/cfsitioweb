import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CF Consultores | Comercio Internacional",
  description: "Asesoramiento en importaciones y exportaciones. Te ayudamos a evaluar costos, ordenar documentación y coordinar tu operación de comercio exterior.",
  keywords: ["comercio exterior", "importación", "exportación", "consultoría", "aduana", "logística"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
