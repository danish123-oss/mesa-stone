'use client';

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !leftContentRef.current || !rightContentRef.current) return;

            gsap.fromTo(leftContentRef.current, {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true,
                },
                immediateRender: false,
            });

            if (buttonRef.current) {
                gsap.fromTo(buttonRef.current, {
                    x: -80,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                    immediateRender: false,
                });
            }

            gsap.fromTo(rightContentRef.current, {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true,
                },
                immediateRender: false,
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className=" bg-[#FFFDD0] lg:h-screen h-[500px] flex flex-col items-center justify-center z-10 relative">
            <div className="relative z-10 w-full h-full  flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-20">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center ">
                        <div ref={leftContentRef} className="flex flex-col justify-center absolute lg:top-40 top-10 left-10" style={{ opacity: 1 }}>
                            <h2 className="text-[42px] lg:text-[52px]  font-bold tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] xl:tracking-[3.5px] leading-[1.1] text-[#E0115F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] lobster-regular">
                                Unity Through Food <br />
                                Let&apos;s Connect & Collaborate
                            </h2>
                            <div ref={buttonRef} className="group cursor-pointer relative mt-10 w-40 h-40 sm:w-48 sm:h-48 md:w-[250px] md:h-[150px] flex items-center justify-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]" style={{ opacity: 1 }}>
                                <Image
                                    src="/Mesa%20Stone%20Logo%20Round%20Shape.svg"
                                    alt="Flavor Map"
                                    fill
                                    className="object-contain animate-spin-slow group-hover:animate-spin-fast "
                                    style={{ animationDuration: '8s' }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-center gap-2 z-10">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-[60px] md:h-[60px] text-[#E0115F] transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                <p className='text-center text-[#E0115F] text-[17px] tracking-[2px] font-medium! absolute left-[160px] w-full'>Where to Find Us</p>
                            </div>
                        </div>

                        <div ref={rightContentRef} className="flex flex-col absolute max-w-2xl mx-auto lg:bottom-0 bottom-10 right-0 justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 mt-8 md:mt-0" style={{ opacity: 1 }}>
                            <Image src="/London Map.svg" alt="Map" width={1000} height={1000} className='w-full h-full lg:w-[1000px] lg:h-[800px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapSection

