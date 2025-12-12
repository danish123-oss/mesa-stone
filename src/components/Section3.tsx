'use client';

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

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

            if (imageRef.current) {
                gsap.fromTo(imageRef.current, {
                    scale: 0.9,
                    opacity: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                    immediateRender: false,
                });
            }

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen bg-[#FFFDD0] flex flex-col items-center justify-center z-10 relative lg:mb-[100px]!">
            <div className="absolute inset-0 w-full h-full">
                <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src="/Children Playing.svg"
                        alt="Partner background"
                        fill
                        className=" w-full h-full  lg:h-[1000px]! "
                        priority
                    />

                </div>
            </div>

            <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-20">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center ">
                        <div ref={leftContentRef} className="flex flex-col justify-center absolute lg:top-40 top-10 left-10" style={{ opacity: 1 }}>
                            <h2 className="text-[42px] lg:text-[52px]  font-bold tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] xl:tracking-[3.5px] leading-[1.1] text-[#E0115F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] lobster-regular">
                                Unity Through Food <br />
                                Let's Connect & Collaborate
                            </h2>
                        </div>

                        <div ref={rightContentRef} className="flex flex-col absolute max-w-lg mx-auto lg:bottom-0 bottom-10 right-0 justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 mt-8 md:mt-0" style={{ opacity: 1 }}>
                            <p className="text-[#E0115F] text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] leading-relaxed tracking-[0.5px] sm:tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px] font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                                We bring people together through food, fun, music & community.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3

