'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const overlayTextRef = useRef<HTMLDivElement>(null);
    const contentTextRef = useRef<HTMLDivElement>(null);
    const ctaButtonRef = useRef<HTMLDivElement>(null);
    const backgroundTextRef = useRef<HTMLDivElement>(null);
    const bottomGradientRef = useRef<HTMLDivElement>(null);
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

            gsap.to([bottomGradientRef.current, scrollIndicatorRef.current], {
                opacity: 0,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                }
            });

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
        <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden bg-[#FFFDD0]">
            <div
                ref={backgroundTextRef}
                className="absolute inset-0 h-screen flex items-center justify-center pointer-events-none overflow-hidden z-0"
                style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
            >
                <div className="relative w-full rotate-[-8deg] h-full flex flex-col items-center justify-center gap-20 md:gap-28" style={{ willChange: 'transform' }}>
                    <div className="flex gap-8 whitespace-nowrap animate-scroll-left" style={{ transform: 'rotate(-3deg)' }}>
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
                        className="object-contain"
                        style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 from-black/20 via-transparent to-[#FFFDD0]/60" />
                </div>
            </div>

            <div
                ref={overlayTextRef}
                className="absolute inset-0 h-screen flex max-[1000px]:mt-[30px] flex-col md:flex-row md:gap-[100px] gap-10 items-center justify-center md:justify-start px-8 md:px-16 lg:px-24 pointer-events-none z-20"
                style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
            >
                <div className="relative max-w-4xl text-center">
                    {['A', 'Crispy', 'Pillow', 'Of', 'Chewy', 'Delight'].map((word, index) => (
                        <h1
                            key={index}
                            className="text-[7vw] sm:text-[10vw] md:text-[8vw] font-modern-love-caps font-bold leading-[0.9] tracking-tight text-[#E0115F] mix-blend-overlay uppercase"
                        >
                            {word}
                        </h1>
                    ))}
                </div>

                <div className='flex items-center flex-col justify-center lg:mt-[400px]'>
                    <div className="relative text-center max-w-3xl">
                        <p className="text-base sm:text-lg md:text-[20px] text-white leading-relaxed font-medium drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                            “Bruv... these frybread tacos are actually unreal. That crunch on the outside, soft inside — levels. Smoky beef with roasted peppers, salsa dripping everywhere, its good messy and well worth it! Then you’ve got the sweet corn cream, the chicken with lime — proper flavour bomb. Forget the plate, the frybread’s doing the job. Warm, banging, I’m defs coming back for more.”
                        </p>
                    </div>
                    <div className="group cursor-pointer relative w-40 h-40 sm:w-48 sm:h-48 md:w-[350px] md:h-[250px] flex items-center justify-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                        <Image
                            src="/Mesa%20Stone%20Logo%20Round%20Shape.svg"
                            alt="Flavor Map"
                            fill
                            className="object-contain animate-spin-slow group-hover:animate-spin-fast"
                            style={{ animationDuration: '8s' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-center gap-2 z-10">
                            <svg
                                className="w-10 h-10 sm:w-6 sm:h-6 md:w-[120px] md:h-[120px] text-[#E0115F] lg:text-[#FFFDD0] transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={contentTextRef}
                className="absolute inset-0 h-screen flex items-center justify-center px-6 md:px-12 z-30"
                style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
            >

            </div>

            <div
                ref={ctaButtonRef}
                className="absolute inset-0 h-screen flex items-center justify-center pointer-events-auto z-30"
                style={{ paddingTop: '300px', willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
            >

            </div>

            <div
                ref={bottomGradientRef}
                className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#E0115F] to-transparent pointer-events-none z-20"
            />

            <div
                ref={scrollIndicatorRef}
                className="fixed bottom-12 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-30"
            >
                <svg className="w-8 h-8 text-[#FFFDD0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

