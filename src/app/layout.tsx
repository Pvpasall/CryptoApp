import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Crypto-app",
  description:
    "Crypto App est une application qui permet de se connecter à son wallet et de convertir EUR/ETH et vice versa.",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-200",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
