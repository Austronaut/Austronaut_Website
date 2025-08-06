"use client";
import React from "react";
import Image from "next/image";
import WebsiteFooter from "../others/website-footer";
import SpotlightCard from "../../components/ui/spotlight";
import AndrewDempsterSection from "../landing-page/lp-ademp"; // Add this line

const TeamPage = () => {
  // Team data structure
  const teams = [
    {
      name: "Bus Team",
      image: "/lpphotos/bus-team.jpg",
      icon: (
        <Image
          src="/logos/busteam-logo.png"
          alt="Bus Team Logo"
          width={64} // Changed from 32 to 64
          height={64} // Changed from 32 to 64
          className="w-16 h-16" // Changed from w-8 h-8 to w-16 h-16
        />
      ),
      members: [
        "Sarah Mitchell",
        "James Rodriguez",
        "Alex Chen",
        "Emma Thompson",
      ],
      color: {
        spotlight: "rgba(220, 38, 38, 0.1)",
        border: "border-red-600",
        text: "text-red-600",
      },
    },
    {
      name: "Payload Team",
      image: "/lpphotos/payloads-team.jpg",
      icon: (
        <Image
          src="/logos/instruments-logo.png"
          alt="Payload Team Logo"
          width={64} // Changed from 32 to 64
          height={64} // Changed from 32 to 64
          className="w-16 h-16" // Changed from w-8 h-8 to w-16 h-16
        />
      ),
      members: ["Dr. Michael Chen", "Lisa Wang", "David Park", "Rachel Kim"],
      color: {
        spotlight: "rgba(234, 88, 12, 0.1)",
        border: "border-orange-600",
        text: "text-orange-600",
      },
    },
    {
      name: "Software Team",
      image: "/lpphotos/software-team.jpg",
      icon: (
        <Image
          src="/logos/software-logo.png"
          alt="Software Team Logo"
          width={64} // Changed from 32 to 64
          height={64} // Changed from 32 to 64
          className="w-16 h-16" // Changed from w-8 h-8 to w-16 h-16
        />
      ),
      members: ["Divakar Dessai", "Ranbir Grover", "Dicko Evaldo"],
      color: {
        spotlight: "rgba(147, 51, 234, 0.1)",
        border: "border-purple-600",
        text: "text-purple-600",
      },
    },
  ];

  return (
    <div className="w-full h-full bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mb-16 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/team-images/team-hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-inter-bold mb-6 tracking-tight">
            Meet The Team
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-inter-regular">
            The dedicated professionals driving innovation and excellence in our
            mission.
          </p>
        </div>
      </section>

      {/* Academic Lead Section */}
      <div className="w-full">
        <h2 className="text-center text-5xl md:text-8xl font-inter-bold tracking-tight object-contain hover:scale-105 transition duration-300 ease-in-out">
          The{" "}
          <span className="font-inter-bold-italic underline decoration-yellow-600 underline-offset-10 decoration-2">
            Academic
          </span>{" "}
          Lead
        </h2>
      </div>

      <AndrewDempsterSection />

      {/* Teams Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-inter-bold text-white mb-4 tracking-tight">
              Our Teams
            </h2>
          </div>

          <div className="space-y-16">
            {teams.map((team, index) => (
              <div
                key={index}
                className="w-full transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="w-full flex justify-center bg-black py-8 px-4">
                  <div className="flex flex-col md:flex-row-reverse rounded-2xl overflow-hidden w-full max-w-7xl gap-10 shadow-lg">
                    <div className="w-full md:w-1/2 relative">
                      <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent z-10 rounded-lg" />
                      <Image
                        src={team.image}
                        alt={`${team.name} photo`}
                        width={600}
                        height={400}
                        className={`w-full h-full object-contain ${team.color.border} border-3 rounded-2xl`}
                      />
                    </div>
                    <SpotlightCard
                      spotlightColor={team.color.spotlight}
                      className={`${team.color.border} border-2 w-full md:w-1/2 h-full flex flex-col justify-center backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 text-white relative z-20`}
                    >
                      <p
                        className={`text-sm ${team.color.text} uppercase font-inter-bold mb-2 tracking-wider`}
                      >
                        Team Spotlight
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        {team.icon}
                        <h2 className="text-4xl md:text-6xl font-inter-bold leading-tight">
                          {team.name}
                        </h2>
                      </div>
                      <h4 className="text-2xl font-inter-bold mb-6 text-gray-200">
                        Team Members
                      </h4>
                      <div className="space-y-3">
                        {team.members.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="py-3 px-5 bg-gray-800/30 rounded-lg border border-gray-700/20 hover:bg-gray-700/30 transition duration-200"
                          >
                            <p className="text-gray-200 font-inter-regular text-lg">
                              {member}
                            </p>
                          </div>
                        ))}
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <WebsiteFooter />
    </div>
  );
};

export default TeamPage;
