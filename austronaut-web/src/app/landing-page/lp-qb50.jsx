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
import SpotlightCard from "@/components/ui/spotlight";
import ScrollVelocity from "@/components/ui/scrollvelocity";

export default function QB50Section() {

    const cards = [
        {
            title: 'About QB50',
            description: 'Pioneered by UNSW, QB50 is an international mission that launched 50 CubeSats into low Earth orbit in 2016 to study the thermosphere.',
            videoSrc: '/videos/unsw-eco-part-one.mp4',
        },
        {
            title: 'Cubesat Development',
            description: 'UNSW-EC0 carried four payloads testing GPS, radiation resilience, microkernel stability, and 3D-printed material performance.',
            videoSrc: '/videos/unsw-eco-part-two.mp4',
        },
        {
            title: 'Research Conducted',
            description: 'Our payload, The Ion Neutral Mass Spectrometer (INMS), gathered data on thermospheric particles to study atmospheric composition.',
            videoSrc: '/videos/unsw-eco-part-three.mp4',
        },
    ];

    return (
       <div className="w-full mb-15 bg-black text-white">
        <div className="w-full mb-5">
            <ScrollVelocity
                texts={['OUR FLAGSHIP PROJECT QB50']} 
                velocity={10} 
                className="font-inter-bold text-5xl md:text-8xl"
            />
            <ScrollVelocity
                texts={['OUR FLAGSHIP PROJECT QB50']} 
                velocity={10} 
                className="font-inter-italic text-5xl md:text-8xl"
            />
        </div>
        <div className="w-full p-5 md:p-20 flex flex-wrap justify-center gap-10">
            {cards.map((card, index) => (
                <div
                key={index}
                className="relative rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out w-full sm:w-[90%] md:w-[30%] h-80"
                >
                    {/* Full video background */}
                    <video
                        className="absolute inset-0 rounded-2xl w-full h-full object-cover"
                        src={card.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                {/* Overlay */}
                    <div className="relative z-10 w-full h-full rounded-2xl border-1 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                        <h3 className="text-2xl font-inter-bold-italic text-white mb-2 text-center">{card.title}</h3>
                        <p className="text-sm text-gray-200 font-inter-italic text-center">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}