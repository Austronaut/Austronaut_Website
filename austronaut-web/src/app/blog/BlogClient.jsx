"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";
import Navbar from "@/components/ui/navbar";
import Popup from "@/components/ui/popup";
import WebsiteFooter from "../others/website-footer";
import ChromaGrid from "@/components/ui/chromagrid";
import { PortableText } from "@portabletext/react";

export default function BlogClient({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const MemoizedGalaxy = useMemo(
    () => (
      <Galaxy
        density={0.6}
        glowIntensity={0.1}
        starSpeed={0.1}
        rotationSpeed={0}
        speed={0.4}
        twinkleIntensity={0.2}
        className="absolute inset-0 z-0"
      />
    ),
    []
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      <Navbar />
      <Popup />
      {MemoizedGalaxy}

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow w-full flex flex-col items-center py-16 px-4">
          <div className="text-center mb-12">
            <Image
              src="/logos/main-logo-transparent.png"
              alt="UNSW Austronauts Logo"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h1 className="text-6xl font-inter-bold tracking-tight text-white drop-shadow-lg">
              Dev Log
            </h1>
            <p className="mt-4 text-md font-inter-italic max-w-xl mx-auto text-gray-300">
              Updates from the team
            </p>
          </div>

          <div className="w-full max-w-6xl">
            {!selectedPost ? (
              <ChromaGrid
                items={posts}
                onSelect={(post) => setSelectedPost(post)}
                className="justify-center"
              />
            ) : (
              <article className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg p-6 md:p-8
                bg-gradient-to-br from-white/0 to-white/0 backdrop-blur-lg border border-white/30"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-300 hover:text-white transition mb-6 underline underline-offset-4"
                >
                  ← Back to posts
                </button>

                <div className="relative w-full h-[240px] md:h-[360px] rounded-2xl overflow-hidden border border-white/20 mb-6">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-200">
                  {selectedPost.title}
                </h2>
                <p className="mt-2 text-sm font-normal text-gray-300">
                  {selectedPost.handle}
                </p>

                <div className="mt-6 text-gray-200 leading-relaxed">
                  <PortableText value={selectedPost.content} />
                </div>
              </article>
            )}
          </div>
        </main>

        <WebsiteFooter />
      </div>
    </div>
  );
}