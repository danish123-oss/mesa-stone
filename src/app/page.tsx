'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import SplashScreen from "@/components/SplashScreen";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import FooterSection from "@/components/FooterSection";
import Section3 from '@/components/Section3';
import LastSection from '@/components/LastSection';
import SrollAnimationalSection from '@/components/SrollAnimationalSection';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="relative">
        <div className="fixed inset-0 z-0 overflow-auto">
          <FooterSection />
        </div>

        <div className="relative z-10">
          <main className="relative">
            <HeroSection />
            <Section1 />
            <Section2 />
            <Section3 />
            <SrollAnimationalSection />
            <LastSection />
            <div className="h-screen" />
          </main>
        </div>
      </div>
    </>
  );
}
