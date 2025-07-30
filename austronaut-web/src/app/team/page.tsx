import React from "react";
import TiltedCard from "../../components/react-bits/TiltedCard";

const page = () => {
  const busTeamMembers = [
    { name: "Sarah Mitchell", role: "Bus Operations Manager" },
    { name: "James Rodriguez", role: "Route Coordinator" },
    { name: "Emily Chen", role: "Safety Supervisor" },
    { name: "Marcus Johnson", role: "Maintenance Lead" },
    { name: "Lisa Thompson", role: "Driver Coordinator" },
    { name: "David Park", role: "Fleet Analyst" },
    { name: "Rachel Adams", role: "Logistics Specialist" },
  ];

  const payloadTeamMembers = [
    { name: "Dr. Alex Carter", role: "Payload Systems Lead" },
    { name: "Samantha Lee", role: "Hardware Engineer" },
    { name: "Kevin Zhang", role: "Integration Specialist" },
    { name: "Maria Gonzalez", role: "Test Engineer" },
    { name: "Ryan O'Connor", role: "Systems Analyst" },
    { name: "Nina Patel", role: "Quality Assurance" },
  ];

  const softwareTeamMembers = [
    { name: "Dicko Evaldo", role: "Software Architect" },
    { name: "Ranbir Grover", role: "Full Stack Developer" },
    { name: "Divakar Dessai", role: "Frontend Developer" },
  ];

  const TeamSection = ({ title, members, containerClass = "" }) => (
    <section className={`py-16 ${containerClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            {title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center mx-auto">
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="w-full max-w-[200px] text-center"
            >
              <TiltedCard
                imageSrc="lpphotos/andrew-headshot.jpg"
                altText={`${member.name} - ${member.role}`}
                captionText={`${member.name} - ${member.role}`}
                containerHeight="200px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
              <div className="mt-4">
                <p className="text-white text-lg font-semibold mb-1">
                  {member.name}
                </p>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center bg-gray-950">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/team-image.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-wider">
            Meet The Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            The dedicated professionals driving innovation and excellence in our
            mission
          </p>
        </div>
      </section>

      {/* Academic Lead Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Academic Lead
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[280px] text-center">
              <TiltedCard
                key="Andrew Dempster"
                imageSrc="lpphotos/andrew-headshot.jpg"
                altText="Andrew Dempster - Academic Lead"
                captionText="Andrew Dempster - Academic Lead"
                containerHeight="280px"
                containerWidth="280px"
                imageHeight="280px"
                imageWidth="280px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
              <div className="mt-6">
                <p className="text-white text-lg font-semibold mb-2">
                  Andrew Dempster
                </p>
                <p className="text-gray-300 text-sm">Academic Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Team */}
      <TeamSection
        title="Bus Team"
        members={busTeamMembers}
        containerClass="bg-gray-950"
      />

      {/* Payload Team */}
      <TeamSection
        title="Payload Team"
        members={payloadTeamMembers}
        containerClass="bg-gray-950"
      />

      {/* Software Team */}
      <TeamSection
        title="Software Team"
        members={softwareTeamMembers}
        containerClass="bg-gray-950"
      />

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">Austronaut</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
