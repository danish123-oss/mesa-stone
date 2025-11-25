'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main className="relative">
        <HeroSection />

      </main>

      <section className="min-h-screen bg-[#E0115F] flex items-center justify-center z-10">
        <h2 className="text-6xl font-bold max-w-7xl tracking-[3.5px] leading-[1.2] text-center text-[#FFFDD0]">
          This is Mesa Stone, we’ve reimagined the frybread taco. Handmade with care. <br /> A golden, pillowy bread made with bold, fresh ingredients. Our tacos are an artisan celebration of taste, texture, and unforgettable satisfaction. Bringing together the perfect balance of comfort and craft
        </h2>
      </section>
    </>
  );
}
