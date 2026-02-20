import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CF Consultores | Comercio Internacional",
  description: "Consultoría estratégica en comercio internacional. Importá y exportá con seguridad y eficiencia. Acompañamos a empresas y emprendedores.",
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
