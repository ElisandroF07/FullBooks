import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "@/styles/globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react"


const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullBooks",
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
