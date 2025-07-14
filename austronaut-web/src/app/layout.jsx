// app/layout.tsx (or pages/_app.tsx)
import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={silkscreen.variable}>
      <body className={silkscreen.className}>{children}</body>
    </html>
  );
}
