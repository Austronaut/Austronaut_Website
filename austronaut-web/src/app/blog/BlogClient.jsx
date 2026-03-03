"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";
import Navbar from "@/components/ui/navbar";
import Popup from "@/components/ui/popup";
import WebsiteFooter from "../others/website-footer";
import ChromaGrid from "@/components/ui/chromagrid";

export default function BlogClient({ posts }) {
  const router = useRouter();

  const MemoizedGalaxy = useMemo(
    () => (
      <Galaxy
        density={0.4}
        glowIntensity={0.05}
        starSpeed={0.1}
        rotationSpeed={0}
        speed={0.4}
        twinkleIntensity={0.15}
        className="absolute inset-0 z-0"
      />
    ),
    [],
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-inter-regular">
      <Navbar />
      <Popup />
      {MemoizedGalaxy}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow w-full flex flex-col items-center py-26 px-4">
          <div className="text-center mb-12">
            {/* <Image
              src="/logos/main-logo-transparent.png"
              alt="UNSW Austronauts Logo"
              width={150}
              height={150}
              className="mx-auto mb-4"
            /> */}

            <h1 className="text-8xl font-inter-bold tracking-tight text-white drop-shadow-lg">
              The <i>Blogs</i>.
            </h1>
            <p className="mt-4 text-1xl font-inter-italic max-w-xl mx-auto text-gray-300">
              From Whiteboard to Space: Our Development Story
            </p>
          </div>
          <div className="w-full max-w-6xl flex justify-center">
            <ChromaGrid
              items={posts}
              onSelect={(post) => router.push(`/blog/${post.slug}`)}
            />
          </div>
          {/* <div className="w-full max-w-6xl">
            <ChromaGrid
              items={posts}
              onSelect={(post) => router.push(`/blog/${post.slug}`)}
              className="justify-start"
              radius={120}
            />
          </div> */}
        </main>

        <WebsiteFooter />
      </div>
    </div>
  );
}
