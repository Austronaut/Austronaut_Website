import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen bg-black">
      {/* First Section */}
      <div className="relative flex flex-col h-screen w-full">
        {/* First Image positioned behind text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/logos/main-logo.png"
            alt="cube_sat"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* First Text content at bottom */}
        <div className="relative z-10 flex flex-col justify-end h-full text-white text-center px-8 pb-16">
          <p className="max-w-4xl text-lg leading-relaxed mx-auto">
            ACSER's work is in three areas relevant to space: satellite
            navigation, small spacecraft design, and space resources. With
            Australia's space industry growing rapidly, experience in actual
            space projects will assist graduates seeking those highly
            competitive roles. We have already seen our interns placed in senior
            space positions around the globe.
          </p>
        </div>
      </div>

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
          <h1 className="text-6xl mb-8">Our Flagship Project</h1>
          <p className="max-w-4xl text-lg leading-relaxed mx-auto">
            The QB50 project is a network of 50 cube satellites (CubeSats) that
            were launched together in December 2016 into a 'string-of-pearls'
            configuration in a circular orbit at 320 km altitude, inclination 79
            degrees. The UNSW contribution to the QB50 project began in 2012,
            with a boost of $250,000 secured for the project by Dr Elias
            Aboutanios. The satellite, named UNSW-EC0, carried an Ion Neutral
            Mass Spectrometer instrument to study the composition of the
            thermosphere.
          </p>
        </div>
      </div>
    </div>
  );
}
