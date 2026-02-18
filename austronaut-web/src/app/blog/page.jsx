"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";
import Navbar from "@/components/ui/navbar";
import Popup from "@/components/ui/popup";
import WebsiteFooter from "../others/website-footer";
import ChromaGrid from "@/components/ui/chromagrid"; // adjust path as needed

const posts = [
  {
    id: 1,
    image: "/lpphotos/cube_sat.png",
    title: "An amazing blog post",
    subtitle: "Which tells you all about the thing",
    handle: "Feb 2026",
    gradient: "linear-gradient(145deg,#1e3a8a,#020617)",
    borderColor: "#3b82f6"
  },
  {
    id: 2,
    image: "/lpphotos/cube_sat2.png",
    title: "Another Pearler of a post",
    subtitle: "Which tells you some great info",
    handle: "Feb 2026",
    gradient: "linear-gradient(145deg,#0f766e,#020617)",
    borderColor: "#14b8a6"
  },
  {
    id: 3,
    image: "/project-stages/2.png",
    title: "Whats this? Another Post?",
    subtitle: "And what a great post it is",
    handle: "Mar 2026",
    gradient: "linear-gradient(145deg,#7c2d12,#020617)",
    borderColor: "#f97316"
  },
  {
    id: 4,
    image: "/instagram-photos/1.png",
    title: "Still postin shit",
    subtitle: "How good is this? Hey? Yeaaaah",
    handle: "Mar 2026",
    gradient: "linear-gradient(145deg,#581c87,#020617)",
    borderColor: "#a855f7"
  },
  {
    id: 5,
    image: "/instagram-photos/2.png",
    title: "Another Post",
    subtitle: "Gotta actually flesh some of these out",
    handle: "Mar 2026",
    gradient: "linear-gradient(145deg,#064e3b,#020617)",
    borderColor: "#22c55e"
  },
  {
    id: 6,
    image: "/instagram-photos/3.png",
    title: "Yo someone PLEASE ",
    subtitle: "figure out how to change the font",
    handle: "Apr 2026",
    gradient: "linear-gradient(145deg,#991b1b,#020617)",
    borderColor: "#ef4444"
  }
];


export default function BlogPage() {
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
                    priority={false}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-200">{selectedPost.title}</h2>
                <p className="mt-2 text-sm font-normal text-gray-300">{selectedPost.handle}</p>
                <p className="mt-4 text-lg italic text-gray-200">{selectedPost.subtitle}</p>


                <div className="mt-6 text-gray-200 leading-relaxed whitespace-pre-line">
                  {selectedPost.content || "No content yet."}
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