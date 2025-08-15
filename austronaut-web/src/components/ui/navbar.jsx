"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md text-white px-4 sm:px-6 py-3 sm:py-4 shadow-lg z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/logos/main-logo-transparent.png"
            alt="Austronauts Logo"
            width={30} // smaller on phones
            height={30}
            className="object-contain"
          />
          <span className="text-lg sm:text-xl font-inter-bold tracking-tight">AUSTRONAUTS</span>
        </Link>
        <div className="space-x-4 sm:space-x-6 text-xs sm:text-sm tracking-tight font-inter-bold">
          <Link href="/team" className="hover:text-yellow-400 font-inter-bold transition">OUR TEAM</Link>
          <Link href="/enquiry" className="hover:text-yellow-400 font-inter-bold transition">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
