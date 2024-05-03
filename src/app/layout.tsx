import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "@/styles/globals.css";
import NextTopLoader from 'nextjs-toploader';


const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FULLBOOKS",
  description: "E-Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}><NextTopLoader />{children}</body>
    </html>
  );
}
