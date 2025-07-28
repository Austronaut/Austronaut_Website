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

export default function WebsiteFooter(){
    return (
        <footer className="bg-black text-white px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                
                {/* Left: Logo/Title */}
                <div className="text-2xl font-inter-bold tracking-tight">
                   <Image
                        src="/logos/main-logo-transparent.png"
                        alt="cube_sat"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4">
                <a href="#" className="hover:scale-110 transition duration-300">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                </a>
                {/* <a href="#" className="hover:text-yellow-400 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.39 2.84 8.12 6.76 9.45.49.09.67-.21.67-.47v-1.7c-2.75.6-3.32-1.33-3.32-1.33-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1.01.07 1.55 1.04 1.55 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.2-.25-4.52-1.1-4.52-4.89 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85.004 1.7.114 2.5.337 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.57 1.03 2.65 0 3.8-2.33 4.64-4.55 4.88.36.31.69.93.69 1.88v2.8c0 .26.18.56.68.46a10 10 0 006.8-9.45c0-5.51-4.45-9.96-9.96-9.96z"/>
                    </svg>
                </a> */}
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="mt-10 justify-center text-center text-xs text-gray-500 font-inter-regular">
                © AUStronauts {new Date().getFullYear()}. All rights reserved.
            </div>
            </footer>
    );
}