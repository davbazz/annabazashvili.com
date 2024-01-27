import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/shared/header/component";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  preload: true,
  adjustFontFallback: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Bazashvili",
  description: "Mental health recovery with Anna Bazashvili",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative bg-secondary text-tertiary overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
