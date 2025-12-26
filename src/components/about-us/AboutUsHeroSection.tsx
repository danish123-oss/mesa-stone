'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const AboutUsHeroSection = () => {
    const textRef = useRef<HTMLHeadingElement>(null)
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        if (!textRef.current) return

        const words = textRef.current.querySelectorAll('.word')

        gsap.fromTo(
            words,
            { y: '110%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                delay: 0.3,
            }
        )
    }, [])

    return (
        <>
            <section className="relative lg:min-h-[1000px] min-h-[600px] rounded-bl-[40%] rounded-br-[40%] lg:rounded-bl-[60%] lg:rounded-br-[60%]   w-full overflow-hidden bg-[#E0115F] py-20">
                <div className="w-full lg:max-w-[1000px] mx-auto lg:mt-[120px] mt-[60px]">
                    <div className='px-6 lg:px-0'>
                        <h1
                            ref={textRef}
                            className="text-3xl w-full text-center lg:text-5xl  font-bold text-white mb-8  overflow-hidden uppercase tracking-tight"
                        >
                            “Mesa Stone was created to honour the past and inspire the future. We highlight Native food traditions, elevated with re-imagined ingredients that have nourished generations, and celebrate the extraordinary impact (often unknown) the Indigenous cuisine has had all over the world.” —Mod, Founder
                        </h1>
                    </div>
                    {/* 
                    <div ref={descRef} className="text-white text-lg lg:text-xl leading-relaxed space-y-6">
                        <p>
                            And in general - the business of people with absolutely &quot;unfrozen&quot; experience. To Mesa Stone.
                        </p>
                        <p>
                            Now we feel like experimenters, actually, as in the beginning.
                        </p>
                        <p>
                            We are like in a laboratory, where the result is tasted. If it suits us, it means it will definitely suit one of you!
                        </p>
                    </div> */}
                </div>
            </section>

            <section className="relative lg:min-h-[300px] min-h-[300px] w-full   flex items-center rounded-bl-[100px] justify-center">

                <div className="relative z-10 flex items-center justify-center py-20">
                    <div className='absolute top-[-150px] lg:top-[-400px]'>


                        <div className="relative w-[90vw] max-w-[700px] aspect-square">
                            <div
                                className="absolute inset-0 rounded-full overflow-hidden cursor-pointer group shadow-2xl"
                                onClick={() => setShowVideo(true)}
                            >
                                <Image
                                    src="/Woman Eating Taco.svg"
                                    alt="About Mesa Stone"
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-[#E0115F]/30 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#E0115F] border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg width="32" height="36" viewBox="0 0 24 28" fill="none" className="ml-2">
                                            <path d="M23 12.2679C24.3333 13.0377 24.3333 14.9623 23 15.7321L3.5 26.8564C2.16667 27.6262 0.5 26.664 0.5 25.1244L0.5 2.87564C0.5 1.33604 2.16667 0.373753 3.5 1.14359L23 12.2679Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute inset-0 pointer-events-none animate-spin"
                                style={{ animationDuration: '20s' }}
                            >
                                <svg className="w-full h-full" viewBox="0 0 700 700">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 350, 350 m -310, 0 a 310,310 0 1,1 620,0 a 310,310 0 1,1 -620,0"
                                        />
                                    </defs>
                                    <text className="text-xl lg:text-2xl fill-[#FFFDD0] uppercase font-bold tracking-[0.3em]">
                                        <textPath xlinkHref="#circlePath" startOffset="0%">
                                            • MESA STONE • FRYBREAD • AUTHENTIC • TRADITIONAL • MESA STONE • FRYBREAD •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showVideo && (
                <div
                    className="fixed inset-0 z-50 bg-black/20 bg-opacity-95 flex items-center justify-center p-6 backdrop-blur-sm"
                    onClick={() => setShowVideo(false)}
                >
                    <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-16 right-0 w-12 h-12 rounded-full bg-[#E0115F] text-white text-3xl flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            ×
                        </button>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutUsHeroSection
