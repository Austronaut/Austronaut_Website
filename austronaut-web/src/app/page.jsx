import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen bg-black">
      {/* 🚀 Hero Section: Fullscreen Video + Logo */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* YouTube Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/lp-background-video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 z-5" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-8">
          {/* Logo centered over video */}
            <Image
              src="/logos/main-logo-transparent.png"
              alt="cube_sat"
              width={250}
              height={250}
              className="object-contain"
            />
            <p className="max-w-4xl text-sm text-white text-bold font-bigcalson-italic">
              An UNSW’s student-led CubeSat mission.
            </p>
        </div>
      </div>

      {/* 🛰️ Section 1 */}
      <div className="relative flex flex-col w-full py-25">
        <div className="relative z-10 flex flex-col justify-start text-white text-center">
          <h1 className="text-5xl mb-10 font-sterion">WE ARE THE Austronauts</h1>
          <p className="max-w-4xl text-xl mb-10 leading-relaxed text-justify mx-auto mb-0">
            As part of the UNSW Vertically Integrated Projects (VIP) program, 
            our team of 12 passionate engineering students is designing 
            and building a 6U CubeSat equipped with innovative tether payloads 
            and scientific instruments to measure charged particles and magnetic
            fields in Earth’s ionosphere
          </p>
          <p className="max-w-4xl text-xl leading-relaxed font-bigcalson-italic text-justify mx-auto mb-0">
            Our mission is to advance space science 
            while providing real-world aerospace experience to the next generation 
            of engineers. Explore our journey from design and build to launch and 
            operations.
          </p>
        </div>
      </div>

      {/* 🛰️ Section 2 */}
      <div className="relative flex flex-col h-screen w-full">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/lpphotos/cube_sat2.png"
            alt="cube_sat2"
            width={900}
            height={900}
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full text-white text-center px-8 pb-16">
          <h1 className="text-6xl mb-8 font-sterion">Our Flagship Project</h1>
          <p className="max-w-4xl text-lg leading-relaxed mx-auto">
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
  );
}
