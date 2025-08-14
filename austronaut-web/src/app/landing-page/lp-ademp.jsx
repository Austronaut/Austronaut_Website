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
import SpotlightCard from "../../components/ui/spotlight";
import ScrollVelocity from "@/components/ui/scrollvelocity";
import AnimatedList from "@/components/ui/animated-list";
import CurvedLoop from "@/components/ui/curved-loop";

export default function AndrewDempsterSection() {
  const items = [
    "All areas relevant to GPS receiver design and signal processing, including all new GNSS systems and signals, interference, multipath, and hardware optimisation. New location technologies such as Locata and WiFi",
    "Developing GNSS reflectometry for space and airborne platforms",
    "Developing space resources, specifically the Widle Project",
    "Developing cubesats - UNSW-EC0, INSPIRE-2 (launched 2017)",
    'Pursuing the "Garada" Synthetic Aperture Radar Formation Flying project, originally funded under the Australian Space Research Program',
  ];

  return (
    <div className="w-full flex justify-center bg-black py-16 px-4">
      <div className="flex flex-col md:flex-row-reverse rounded-2xl overflow-hidden w-full max-w-7xl gap-10 shadow-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent z-10 rounded-lg" />
          <img
            src="/lpphotos/ab-2.png"
            alt="Andrew Dempster Headshot"
            className="w-full h-full object-cover border-yellow-600 border-3 rounded-2xl"
          />
        </div>

        {/* Text Section wrapped in SpotlightCard */}
        <SpotlightCard
          spotlightColor="rgba(255, 191, 0, 0.1)"
          className="border-yellow-600 border-2 w-full md:w-1/2 h-full flex flex-col justify-center backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 text-white relative z-20"
        >
          <p className="text-sm text-yellow-600 uppercase font-inter-bold mb-2 tracking-wider">
            Academic Spotlight
          </p>
          <h2 className="text-4xl md:text-6xl font-inter-bold mb-4 leading-tight">
            Dr. Andrew Dempster
          </h2>
          <h4 className="text-sm text-gray-400 mb-2 font-inter-regular tracking-tight">
            PhD (Cambridge) 1995, Electrical Engineering and Telecommunications
          </h4>
          <h4 className="text-xl text-gray-200 mb-6 font-inter-regular">
            Director of the Australian Centre for Space Engineering Research
            (ACSER)
          </h4>
          <h4 className="text-2xl font-inter-bold mb-4">Andrew's Research</h4>

          <div className="">
            <AnimatedList
              items={items}
              onItemSelect={(item, index) => console.log(item, index)}
              showGradients={false}
              enableArrowNavigation={true}
              displayScrollbar={true}
              className="w-full"
            />
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
