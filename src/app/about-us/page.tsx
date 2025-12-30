import React from 'react'
import AboutUsHeroSection from '@/components/about-us/AboutUsHeroSection'
import AboutUsContentSection from '@/components/about-us/AboutUsContentSection'
import FooterSection from '@/components/FooterSection'

const AboutUs = () => {
    return (
        <main className="relative">
            <AboutUsHeroSection />
            <AboutUsContentSection />
            <FooterSection />
        </main>
    )
}

export default AboutUs