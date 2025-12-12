'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import SplashScreen from "@/components/SplashScreen";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import FooterSection from "@/components/FooterSection";
import Section3 from '@/components/Section3';
import MapSection from '@/components/MapSection';
import LastSection from '@/components/LastSection';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main className="relative">
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <MapSection />
        <LastSection />
        <FooterSection />
      </main>


    </>
  );
}
