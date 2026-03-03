"use client";

import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import WebsiteFooter from "@/app/others/website-footer";

export default function BlogPostClient({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-inter-regular">
      <Navbar />

      <Galaxy
        density={0.4}
        glowIntensity={0.05}
        starSpeed={0.1}
        rotationSpeed={0}
        speed={0.4}
        twinkleIntensity={0.15}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow w-full flex flex-col items-center py-16 px-4">
          <div className="w-full max-w-5xl mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 font-inter-bold transition"
            >
              ← Back to posts
            </Link>
          </div>
          {children}
        </main>

        <WebsiteFooter />
      </div>
    </div>
  );
}
