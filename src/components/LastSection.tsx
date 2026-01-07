'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function LastSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const overlayTextRef = useRef<HTMLDivElement>(null);
    const contentTextRef = useRef<HTMLDivElement>(null);
    const ctaButtonRef = useRef<HTMLDivElement>(null);
    const backgroundTextRef = useRef<HTMLDivElement>(null);
    // const bottomGradientRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const scrollDistance = window.innerHeight * 0.8;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: `+=${scrollDistance}px`,
                    scrub: 0.5,
                    markers: false,
                    anticipatePin: 1,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                }
            });

            gsap.set(backgroundTextRef.current, { opacity: 0 });

            gsap.set(imageWrapperRef.current, {
                transformOrigin: 'center center',
            });

            tl.to(overlayTextRef.current, {
                y: -window.innerHeight * 2,
                opacity: 0,
                ease: 'none',
                force3D: true,
            })
                .to(contentTextRef.current, {
                    y: -window.innerHeight * 2,
                    opacity: 0,
                    ease: 'none',
                    force3D: true,
                }, 0)
                .to(ctaButtonRef.current, {
                    y: -window.innerHeight * 2,
                    opacity: 0,
                    ease: 'none',
                    force3D: true,
                }, 0)
                .to(imageWrapperRef.current, {
                    scale: isMobile ? 0.8 : 0.8,
                    scaleY: isMobile ? 0.6 : 0.48,
                    ease: 'none',
                    force3D: true,
                }, 0)
                .to(backgroundTextRef.current, {
                    opacity: 1,
                    ease: 'none',
                    force3D: true,
                }, 0);

            // gsap.to([bottomGradientRef.current, scrollIndicatorRef.current], {
            //     opacity: 0,
            //     scrollTrigger: {
            //         trigger: heroRef.current,
            //         start: 'bottom bottom',
            //         end: 'bottom top',
            //         scrub: 0.5,
            //     }
            // });

            gsap.from(overlayTextRef.current?.children || [], {
                opacity: 0,
                y: 100,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.from(contentTextRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: 'power2.out',
                delay: 1.2,
                clearProps: 'all'
            });

            gsap.from(ctaButtonRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: 1.6,
                clearProps: 'all'
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden bg-[#FFFDD0] z-11 rounded-bl-[50px] rounded-br-[50px]">
            <div
                ref={backgroundTextRef}
                className="absolute inset-0 h-screen flex items-center justify-center pointer-events-none overflow-hidden z-0"
                style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
            >
                <div className="relative w-full rotate-[-8deg] h-full flex flex-col items-center justify-center gap-20 md:gap-28" style={{ willChange: 'transform' }}>
                    <div className="flex  gap-8 whitespace-nowrap animate-scroll-left" style={{ transform: 'rotate(-3deg)' }}>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-[#E0115F] ">
                            Discover Your Taste •  Try Every Options
                        </h2>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-[#E0115F] ">
                            Discover Your Taste •  Try Every Options
                        </h2>
                    </div>

                    <div className="flex gap-8 whitespace-nowrap animate-scroll-right" style={{ transform: 'rotate(2deg)' }}>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-transparent " style={{ WebkitTextStroke: '2px #E0115F' }}>
                            Dive Into Delight• Bite Into Bliss• Dive Into Delight•
                        </h2>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-transparent " style={{ WebkitTextStroke: '2px #E0115F' }}>
                            Dive Into Delight• Bite Into Bliss• Dive Into Delight•
                        </h2>
                    </div>

                    <div className="flex gap-8 whitespace-nowrap animate-scroll-left" style={{ transform: 'rotate(-2.5deg)' }}>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-[#E0115F] ">
                            Find Your Flavour • Choose Your Bite • Find Your Flavour • Choose Your Bite •
                        </h2>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none tracking-wider text-[#E0115F] ">
                            Find Your Flavour • Choose Your Bite • Find Your Flavour • Choose Your Bite •
                        </h2>
                    </div>
                </div>
            </div>

            <div
                ref={imageWrapperRef}
                className="absolute inset-0 w-full h-screen z-10"
                style={{
                    willChange: 'transform',
                    transform: 'translate3d(0,0,0)',
                    backfaceVisibility: 'hidden',
                    perspective: '1000px'
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/Woman Eating Taco.svg"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                        style={{ objectPosition: 'center' }}
                    />
                    {/* <div className="absolute inset-0 from-black/20 via-transparent to-[#FFFDD0]/60" /> */}
                </div>
            </div>




        </section>
    );
}

