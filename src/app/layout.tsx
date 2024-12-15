// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google"; // Importando fuentes válidas de Google
import "./globals.css";

// Definiendo las fuentes
const inter = Inter({
  variable: "--font-inter",  // Definimos una variable CSS para la fuente Inter
  subsets: ["latin"],        // Idioma de la fuente
});

const roboto = Roboto({
  variable: "--font-roboto",  // Definimos otra variable para la fuente Roboto
  subsets: ["latin"],
  weight: ["400", "700"],     // Puedes agregar más pesos si es necesario
});

export const metadata: Metadata = {
  title: "SNK App",
  description: "Pagina oficial de SNK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
