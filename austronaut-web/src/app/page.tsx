import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black">
      {/* Image positioned behind text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mb-40">
        <Image
          src="/cube_sat.png"
          alt="cube_sat"
          width={900}
          height={900}
          className="object-cover"
        />
      </div>

      {/* Text content in front and centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-8 mt-52">
        <h1 className="text-6xl mb-8">AUStronaut</h1>
        <p className="max-w-4xl text-lg leading-relaxed">
          ACSER's work is in three areas relevant to space: satellite
          navigation, small spacecraft design, and space resources. With
          Australia's space industry growing rapidly, experience in actual space
          projects will assist graduates seeking those highly competitive roles.
          We have already seen our interns placed in senior space positions
          around the globe.
        </p>
      </div>
    </div>
  );
}
