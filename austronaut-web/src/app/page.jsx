"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Timeline from "./landing-page/lp-timeline";
import SpotlightCard from "@/components/ui/spotlight";
import QB50Section from "./landing-page/lp-qb50";
import AndrewDempsterSection from "./landing-page/lp-ademp";
import CurvedLoop from "@/components/ui/curved-loop";
import ScrollVelocity from "@/components/ui/scrollvelocity";
import WebsiteFooter from "./others/website-footer";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 500); // 3 second delay
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: 'UNSW VIP Project',
      description:
        'Team of 12 passionate multidisciplinary engineering students from UNSW',
      icon: (
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clipRule="evenodd"/>
        <path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"/>
      </svg>
      ),
    },
    {
      title: 'Our Mission',
      description:
        'Developing a 6U CubeSat with innovative tether payloads to explore Earth’s ionosphere by 2027',
      icon: (
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
      </svg>
      ),
    },
    {
      title: 'Research Driven',
      description:
        'Intending to conduct pioneering research on space weather',
      icon: (
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3-1.3431 3-3 3-3-1.34315-3-3Zm2 3.62992c-.1263-.04413-.25-.08799-.3721-.13131-1.33928-.47482-2.49256-.88372-4.77995-.8482C4.84875 8.66593 4 9.46413 4 10.5v7.2884c0 1.0878.91948 1.8747 1.92888 1.8616 1.283-.0168 2.04625.1322 2.79671.3587.29285.0883.57733.1863.90372.2987l.00249.0008c.11983.0413.24534.0845.379.1299.2989.1015.6242.2088.9892.3185V9.62992Zm2-.00374V20.7551c.5531-.1678 1.0379-.3374 1.4545-.4832.2956-.1034.5575-.1951.7846-.2653.7257-.2245 1.4655-.3734 2.7479-.3566.5019.0065.9806-.1791 1.3407-.4788.3618-.3011.6723-.781.6723-1.3828V10.5c0-.58114-.2923-1.05022-.6377-1.3503-.3441-.29904-.8047-.49168-1.2944-.49929-2.2667-.0352-3.386.36906-4.6847.83812-.1256.04539-.253.09138-.3832.13765Z"/>
      </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      {/* 🚀 Hero Section: Fullscreen Video + Logo */}
      <div className="relative w-full h-[100svh] overflow-hidden">
        {/* YouTube Background Video with fade-in */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/lp-hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50 z-5" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
          {/* Logo centered over video */}
          <Image
            src="/logos/main-logo-transparent.png"
            alt="cube_sat"
            width={250}
            height={250}
            className="object-contain"
          />
          <p className="max-w-4xl text-sm text-white font-bigcalson-italic mt-4">
            An UNSW student-led CubeSat mission.
          </p>
        </div>
      </div>

      {/* 🧭 Section A: Image Left, Text Right */}
      <div className="w-full flex justify-center mt-30 mb-10 bg-black">
        <div className="flex flex-row rounded-lg overflow-hidden w-full max-w-6xl gap-10">
          <div className="w-full bg-black text-white">
            <h2 className="text-5xl md:text-8xl text-center mb-12 font-inter-bold">WE ARE THE AUS<span className="font-inter-regular">TRONAUTS</span></h2>
            <div className="flex flex-wrap justify-center gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-blue shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full sm:w-[90%] md:w-[30%]"
                >
                <SpotlightCard key={index} className="p-6 rounded-2xl border-white" spotlightColor="rgba(255, 191, 0, 0.2)">
                    <div className="flex justify-center mb-4">{card.icon}</div>
                    <h3 className="text-2xl font-inter-bold text-center mb-4">{card.title}</h3>
                    <p className="text-base font-inter-italic text-center text-gray-300">{card.description}</p>
                </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      {/* 🛰️ Mission Objective */}
      {/* <div className="w-full flex justify-center px-4 bg-black">
          <div className="justify-start text-white text-center px-8">
            <p className="max-w-4xl text-xl leading-relaxed font-bigcalson-italic text-justify mx-auto">
              Our mission is to advance space science
              while providing real-world aerospace experience to the next generation
              of engineers.
            </p>
          </div>
      </div> */}
      

      {/*Need to create a seperate react jsx component file for this*/}
      <div className="w-full flex flex-col justify-center items-center mb-20 bg-black">

        <div className="w-full flex flex-col justify-center p-10 text-white bg-black">
              <h2 className="mb-7 text-center text-8xl font-inter-bold tracking-tight object-contain">Project 2027</h2>
              <h2 className="mb-7 mb-1 text-center text-lg font-inter-regular tracking-tight">To research, design and launch a 6U cubesat to measure space weather.</h2>
        </div>

        <div className="w-full flex justify-center bg-black">
          <Timeline/>
        </div>
      </div>

      <QB50Section/>

      <div className="w-full">
        <h2 className="text-center text-5xl md:text-8xl font-inter-bold tracking-tight object-contain hover:scale-105 transition duration-300 ease-in-out ">The <span className="font-inter-bold-italic underline decoration-yellow-600 underline-offset-10 decoration-2">Academic</span> Lead</h2>
      </div>

      <AndrewDempsterSection/>
      
      <WebsiteFooter/>
    </div>
  );
}
