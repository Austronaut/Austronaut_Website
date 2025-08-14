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
                <a href="https://www.instagram.com/unswaustronauts/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                </a>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="mt-10 justify-center text-center text-xs text-gray-500 font-inter-regular">
                © AUStronauts {new Date().getFullYear()}. All rights reserved.
            </div>
            </footer>
    );
}