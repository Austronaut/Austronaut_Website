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

export default function Timeline(){
    return (
        <div className="p-1 flex flex-col md:flex-row-reverse rounded-lg overflow-hidden w-full max-w-6xl gap-10">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start md:text-end">
                    <SpotlightCard className="custom-spotlight-card transform hover:scale-102 transition duration-300 ease-in-out border-pink-500" spotlightColor="rgba(242, 0, 255, 0.2)">
                            <time className="font-mono font-inter-italic">2025</time>
                            <div className="text-2xl font-inter-bold font-black mb-2">Research & Development</div>
                            <p className="font-inter-italic font-xs text-right">
                                Laying the groundwork through feasibility studies, tech scouting, and early prototyping to define the mission’s direction.
                            </p>
                    </SpotlightCard>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                    <SpotlightCard className="custom-spotlight-card transform hover:scale-102 transition duration-300 ease-in-out border-sky-500" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <time className="font-mono font-inter-italic">2026</time>
                        <div className="text-2xl font-inter-bold font-black mb-2">Design & Fabrication</div>
                            <p className="font-inter-italic font-xs text-left">
                                Engineering teams design critical systems and begin fabrication of mission components with rigorous quality standards.
                            </p>
                    </SpotlightCard>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start md:text-end">
                    <SpotlightCard className="custom-spotlight-card transform hover:scale-102 transition duration-300 ease-in-out border-orange-500" spotlightColor="rgba(255, 123, 0, 0.2)">
                    <time className="font-mono font-inter-italic">2027</time>
                    <div className="text-2xl font-inter-bold font-black mb-2">Assembly, Testing & Launch</div>
                        <p className="font-inter-italic font-xs text-right">
                            Subsystems are integrated, tested for space readiness, and launched after completing mission simulations and flight checks.
                        </p>
                    </SpotlightCard>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                <SpotlightCard className="custom-spotlight-card transform hover:scale-102 transition duration-300 ease-in-out border-teal-500" spotlightColor="rgba(13, 255, 0, 0.2)">
                    <time className="font-mono font-inter-italic">2028</time>
                    <div className="text-2xl font-inter-bold font-black mb-2">Data Collection & Operations</div>
                        <p className="font-inter-italic font-xs text-left">
                            The system enters active operation, transmitting valuable data to ground teams for real-time analysis and mission tracking.
                        </p>
                </SpotlightCard>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <SpotlightCard className="custom-spotlight-card transform hover:scale-102 transition duration-300 ease-in-out border-purple-500" spotlightColor="rgba(38, 0, 96, 0.2)">
                    <time className="font-mono font-inter-italic">2029</time>
                    <div className="text-2xl font-inter-bold font-black mb-2">De-orbiting and Closeout</div>
                        <p className="font-inter-italic font-xs text-right">
                            The mission concludes with a safe de-orbit. Data is reviewed, findings documented, and the project formally closed.
                        </p>
                    </SpotlightCard>
                </div>
            </li>
            </ul>
        </div>
    );
}