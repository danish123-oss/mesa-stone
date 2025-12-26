'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const AboutUsContentSection = () => {
    const sectionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionsRef.current) return

        const sections = sectionsRef.current.querySelectorAll('.content-section')

        sections.forEach((section) => {
            const header = section.querySelector('.section-header')
            const desc = section.querySelector('.section-desc')
            const img = section.querySelector('.section-image')
            const path = section.querySelector('.path-line')
            const circle = section.querySelector('.path-circle')

            if (header) {
                gsap.fromTo(
                    header,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            end: 'top 50%',
                            scrub: 1,
                        },
                    }
                )
            }

            if (desc) {
                gsap.fromTo(
                    desc,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 75%',
                            end: 'top 45%',
                            scrub: 1,
                        },
                    }
                )
            }

            if (img) {
                gsap.fromTo(
                    img,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 70%',
                            end: 'top 40%',
                            scrub: 1,
                        },
                    }
                )
            }

            if (circle && path) {
                gsap.to(circle, {
                    motionPath: {
                        path: path as SVGPathElement,
                        align: path as SVGPathElement,
                        alignOrigin: [0.5, 0.5],
                    },
                    duration: 3,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div ref={sectionsRef} className="bg-[#FFFDD0]">
            <div className=" relative py-32">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        className="path-line"
                        stroke="#E0115F"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        fill="none"
                        d="M1200,100 Q1100,200 1000,300 Q800,450 500,550 Q300,600 200,700 L150,800"
                    />
                    <circle className="path-circle" r="40" fill="#E0115F">
                        <text
                            x="0"
                            y="10"
                            textAnchor="middle"
                            fill="white"
                            fontSize="32"
                            fontWeight="bold"
                        >
                            0
                        </text>
                    </circle>
                </svg>

                <div className=" mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="section-image">
                            <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How it originated"
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                How<br />Originated<br />Idea
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed">
                                <p>
                                    In America, there is such a product - popsicle. It is something like our popsicle on a stick, but on a fruit basis. At the time of creation, in 2015, it was exotic for Ukraine. But we took a risk and did it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-section relative py-32">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 1200"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        className="path-line"
                        stroke="#E0115F"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        fill="none"
                        d="M100,100 Q200,200 300,400 Q400,600 500,700 Q700,850 900,900 L1100,950"
                    />
                    <circle className="path-circle" r="40" fill="#E0115F">
                        <text
                            x="0"
                            y="10"
                            textAnchor="middle"
                            fill="white"
                            fontSize="32"
                            fontWeight="bold"
                        >
                            1
                        </text>
                    </circle>
                </svg>

                <div className=" mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                How<br />It<br />Began
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed space-y-6">
                                <p>
                                    To make everything true, we focused on craft production: we did everything ourselves. We invented the first recipes and immediately cooked: at home, in the kitchen. What we got, we tested on friends. All ingredients were selected and fresh from the market.
                                </p>
                                <p>
                                    At first it seemed to us that everything would be a success. But when we heard: &quot;I will not eat your beetroot!&quot; - we realized that we had to switch to the usual Ukrainian chocolate, cream, berries.
                                </p>
                                <p>
                                    That&apos;s how the first hits appeared: Toffee and Strawberry with cream.
                                </p>
                            </div>
                        </div>
                        <div className="section-image order-1 lg:order-2">
                            <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How we began"
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-section relative py-32">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        className="path-line"
                        stroke="#E0115F"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        fill="none"
                        d="M1200,100 Q1000,250 800,350 Q500,500 300,650 L200,750"
                    />
                    <circle className="path-circle" r="40" fill="#E0115F">
                        <text
                            x="0"
                            y="10"
                            textAnchor="middle"
                            fill="white"
                            fontSize="32"
                            fontWeight="bold"
                        >
                            2
                        </text>
                    </circle>
                </svg>

                <div className=" mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="section-image">
                            <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How we expanded"
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                How<br />Expanded
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed space-y-6">
                                <p>
                                    After the festivals in Dnipro, we went to Kyiv. There we started looking for partners, but we wanted special ones. They became the coffee shops of the third wave. Then they were joined by eco-markets, delicatessen shops, delicatessen chains.
                                </p>
                                <p>
                                    Now we have representative offices in Kyiv, Dnipro, Odesa (and before the war - in Kharkiv).
                                </p>
                            </div>
                            <div className="mt-10">
                                <button className="px-10 py-5 border-3 border-[#E0115F] text-[#E0115F] rounded-full font-bold text-lg hover:bg-[#E0115F] hover:text-white transition-all flex items-center gap-3">
                                    WHERE TO BUY?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-section relative py-32 pb-40">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 1000"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        className="path-line"
                        stroke="#E0115F"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        fill="none"
                        d="M200,100 Q400,200 600,350 Q900,550 1100,700 L1200,850"
                    />
                    <circle className="path-circle" r="40" fill="#E0115F">
                        <text
                            x="0"
                            y="10"
                            textAnchor="middle"
                            fill="white"
                            fontSize="32"
                            fontWeight="bold"
                        >
                            3
                        </text>
                    </circle>
                </svg>

                <div className=" mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                What<br />Will Be<br />Next
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed">
                                <p>
                                    And then the war came to our country. It destroyed all achievements and zeroed all plans. Despite this, the guys and girls in the production work to ensure that our partners who have the opportunity to work in such a difficult time have our ice cream in the assortment. We continue to look for new partners who are suitable for us. To understand whether we are on the way - just try it.
                                </p>
                            </div>
                            <div className="mt-10">
                                <button className="px-10 py-5 border-3 border-[#E0115F] text-[#E0115F] rounded-full font-bold text-lg hover:bg-[#E0115F] hover:text-white transition-all flex items-center gap-3">
                                    FLAVOUR MAP
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="section-image order-1 lg:order-2">
                            <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="What will be next"
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContentSection
