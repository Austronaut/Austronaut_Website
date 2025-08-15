// app/layout.tsx (or pages/_app.tsx)
import { Silkscreen, Inter } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AUStronauts",
  description: "Aude Machinari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.variable}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}