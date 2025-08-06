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
          width={32}
          height={32}
          className="w-8 h-8"
        />
      ),
      members: [
        "Sarah Mitchell",
        "James Rodriguez",
        "Alex Chen",
        "Emma Thompson",
      ],
    },
    {
      name: "Payload Team",
      image: "/lpphotos/payloads-team.jpg",
      icon: (
        <Image
          src="/logos/instruments-logo.png"
          alt="Payload Team Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      ),
      members: ["Dr. Michael Chen", "Lisa Wang", "David Park", "Rachel Kim"],
    },
    {
      name: "Software Team",
      image: "/lpphotos/software-team.jpg",
      icon: (
        <Image
          src="/logos/software-logo.png"
          alt="Software Team Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      ),
      members: ["Divakar Dessai", "Ranbir Grover", "Dicko Evaldo"],
    },
    // {
    //   name: "Operations Team",
    //   image: "/team-images/operations-team.jpg",
    //   icon: (
    //     <Image
    //       src="/logos/tether-logo.png"
    //       alt="Operations Team Logo"
    //       width={32}
    //       height={32}
    //       className="w-8 h-8"
    //     />
    //   ),
    //   members: ["Chris Taylor", "Anna Garcia", "Mark Johnson", "Zoe Brown"],
    // },
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

          <div className="space-y-12">
            {teams.map((team, index) => (
              <div
                key={index}
                className="w-full transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <SpotlightCard
                  className="p-8 border-white/20 border-2 rounded-2xl"
                  spotlightColor="rgba(255, 255, 255, 0.1)"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side: Team Name, Icon and Image */}
                    <div className="text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start items-center gap-4 mb-6">
                        {team.icon}
                        <h3 className="text-2xl md:text-4xl font-inter-bold text-white">
                          {team.name}
                        </h3>
                      </div>

                      {/* Team Image */}
                      <div className="flex justify-center lg:justify-start">
                        <Image
                          src={team.image}
                          alt={`${team.name} photo`}
                          width={400}
                          height={260}
                          className="w-full max-w-lg object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Right Side: Team Members */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-inter-bold text-white mb-6 text-center lg:text-left">
                        Team Members
                      </h4>
                      {team.members.map((member, memberIndex) => (
                        <div
                          key={memberIndex}
                          className="py-4 px-6 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:bg-gray-700/50 transition duration-200"
                        >
                          <p className="text-white font-inter-regular text-center lg:text-left text-lg">
                            {member}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
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
