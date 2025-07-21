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

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 500); // 3 second delay
    return () => clearTimeout(timer);
  }, []);

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
      <div className="w-full flex justify-center p-10 mt-30 bg-black">
        <div className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden w-full max-w-6xl gap-10">
          {/* Image */}
          <div className="w-full rounded-lg">
            <img
              src="/lpphotos/stub-team.jpeg"
              alt="Austronauts Team Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full flex flex-col justify-center text-white bg-black">
            <h2 className="text-6xl font-inter-bold tracking-tight mb-4">WE ARE THE AUSTRONAUTS</h2>
            <p className="text-md text-justify font-inter-regular leading-relaxed">
              As part of the UNSW Vertically Integrated Projects (VIP) program,
              our team of 12 passionate engineering students is designing
              and building a 6U CubeSat equipped with innovative tether payloads
              and instruments to measure charged particles and magnetic
              fields in Earth’s ionosphere.
            </p>
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
      
      
      <div className="w-full flex justify-center p-10 mb-10 bg-black">
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full max-w-6xl gap-10">
          {/* QB50 Animation Video */}
          <div className="w-full transition-opacity duration-1000 ease-in-out">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/videos/unsw-eco.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>

          {/* Text */}
          <div className="w-full flex flex-col justify-center text-white bg-black">
            <h2 className="text-8xl font-inter-bold tracking-tight mb-4 break-words">Our Flagship Project</h2>
            <p className="text-md text-justify font-inter-regular leading-relaxed">
              The QB50 project is a network of 50 cube satellites (CubeSats) that
              were launched together in December 2016 into a 'string-of-pearls'
              configuration in a circular orbit at 320 km altitude, inclination 79
              degrees. The UNSW contribution to the QB50 project began in 2012,
              with a boost of $250,000 secured for the project by Dr Elias
              Aboutanios. The satellite, named UNSW-EC0, carried an Ion Neutral
              Mass Spectrometer instrument to study the composition of the
              thermosphere.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center p-10 bg-black">
        <div className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden w-full max-w-6xl gap-10">
          {/* Dempter's Photo */}
          <div className="w-full rounded-lg">
            <img
              src="/lpphotos/andrew-headshot.jpg"
              alt="Andrew Dempster Headshot"
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full h-full flex flex-col justify-center p-8 text-white bg-black">
            <h2 className="scroll-m-20 mb-10 text-left text-8xl font-inter-bold tracking-tight object-contain">Meet Our Academic</h2>
            <h2 className="scroll-m-20 mb-1 text-left text-4xl font-inter-bold tracking-tight">Dr. Andrew Dempster</h2>
            <h4 className="text-gray-400 mb-4 text-sm font-inter-regular tracking-tight text-balance">PhD (Cambridge) 1995, Electical Engineering and Telecommunications</h4>
            <h4 className="text-gray-100 mb-8 text-2xl font-inter-regular tracking-tight text-balance">Director of the Australian centre for space engineering research (ACSER)</h4>
            <h4 className="text-2xl font-inter-bold tracking-tight text-balance">Current Research</h4>
            <ul className="ml-6 list-disc [&>li]:mt-2 [&>li]:font-inter-regular">
              <li className="mt-2 font-inter-regular text-justify">All areas relevant to GPS receiver design and signal processing, including all new GNSS systems and signals, interference, multipath, and hardware optimisation. New location technologies such as Locata and WiFi.</li>
              <li className="mt-2 font-inter-regular text-balanced">Developing GNSS reflectometry for space and airborne platforms.</li>
              <li className="mt-2 font-inter-regular text-balance">Developing space resources, specifically the <span className="font-inter-regular underline">Wilde</span> project.</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Need to create a seperate react jsx component file for this*/}
      <div className="w-full flex flex-col p-10 justify-center items-center mb-10 bg-black">

        <div className="w-full flex flex-col justify-center p-8 text-white bg-black">
              <h2 className="scroll-m-20 mb-7 text-center text-8xl font-inter-bold tracking-tight object-contain">Project 2027</h2>
              <h2 className="scroll-m-20 mb-1 text-center text-lg font-inter-regular tracking-tight">To research, design and launch a 6U cubesat to measure space weather.</h2>
        </div>

      <div className="w-full flex justify-center p-10 bg-black">
        <Timeline/>
      </div>
    
    </div>

      
      {/* <div className="mb-10 relative w-full h-screen overflow-hidden">
        <div
          className={`absolute p-30 justify-center top-0 left-0 w-full h-full z-0 pointer-events-none yt-wrapper transition-opacity duration-1000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="yt-frame-container">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/2Cen3uMG_ik?autoplay=1&mute=1&controls=0&loop=1&playlist=2Cen3uMG_ik&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1&cc_load_policy=1"
              title="Background Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div> 
      */}
    

      {/* 🛰️ Section 2
      <div className="relative flex flex-col h-screen w-full">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
        </div>
      </div> */}
    </div>
  );
}
