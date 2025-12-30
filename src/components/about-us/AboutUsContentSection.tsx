'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const AboutUsContentSection = () => {
    const section1Ref = useRef<HTMLElement>(null)
    const section2Ref = useRef<HTMLElement>(null)
    const section3Ref = useRef<HTMLElement>(null)
    const section4Ref = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const circle1Ref = useRef<SVGCircleElement>(null)
    const circle2Ref = useRef<SVGCircleElement>(null)
    const circle3Ref = useRef<SVGCircleElement>(null)
    const circle4Ref = useRef<SVGCircleElement>(null)

    useEffect(() => {
        const sections = [
            { ref: section1Ref, pathId: '#path-1' },
            { ref: section2Ref, pathId: '#path-2' },
            { ref: section3Ref, pathId: '#path-3' },
            { ref: section4Ref, pathId: '#path-4' },
        ]

        sections.forEach(({ ref }) => {
            if (!ref.current) return

            const header = ref.current.querySelector('.section-header')
            const desc = ref.current.querySelector('.section-desc')
            const img = ref.current.querySelector('.section-image')

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
                            trigger: ref.current,
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
                            trigger: ref.current,
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
                            trigger: ref.current,
                            start: 'top 70%',
                            end: 'top 40%',
                            scrub: 1,
                        },
                    }
                )
            }
        })

        const circles = [
            { ref: circle1Ref, pathId: '#path-1', sectionRef: section1Ref },
            { ref: circle2Ref, pathId: '#path-2', sectionRef: section2Ref },
            { ref: circle3Ref, pathId: '#path-3', sectionRef: section3Ref },
            { ref: circle4Ref, pathId: '#path-4', sectionRef: section4Ref },
        ]

        circles.forEach(({ ref, pathId, sectionRef }) => {
            if (!ref.current || !sectionRef.current) return

            gsap.set(ref.current, { opacity: 0 })

            gsap.to(ref.current, {
                motionPath: {
                    path: pathId,
                    align: pathId,
                    alignOrigin: [0.5, 0.5],
                },
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            })

            gsap.to(ref.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                },
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="bg-[#FFFDD0] relative">
            <section ref={section1Ref} className="relative py-20 lg:py-32 min-h-screen flex items-center">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1380 742"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                >
                    <path
                        id="path-1"
                        stroke="#E0115F"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                        d="M1010.5,111.5c256.8-65.16,230.29,234.88,34,295C997.9,417.07,922.5,419.5,918,380c-7.13-62.54,101.9-82.87,173-49,73.14,34.84,96.87,162.61,53.5,230.5-47.23,74-112.68,96-410,48-124-20-245-71-417-11C262,617.87,146,706.87,125.5,659.5c-13-30,10.63-64.47,51-76,41.41-11.82,96.5-6.17,104,30,8.1,39.07-36.64,75.15-85.2,128.5"
                    />
                    <circle ref={circle1Ref} r="20" fill="#E0115F">
                        <text x="0" y="7" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                            0
                        </text>
                    </circle>
                </svg>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="section-image">
                            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden ">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How it originated"
                                    className="w-full h-full object-cover"
                                    width={800}
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
            </section>

            <section ref={section2Ref} className="relative py-20 lg:py-32 min-h-screen flex items-center">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1380 1093"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                >
                    <path
                        id="path-2"
                        stroke="#E0115F"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                        d="M195.3,0C167.78,30.23,139,66,118,111c-38.29,81.89-62,231.7,3,308,13.47,15.81,38.76,37.86,40,72-2.3,82.89-68.36,92.56-93,15-19-66.77,48.63-166.72,93-161,69.46,8.95,132.69,283.35,36,476-30.11,60-35.5,109.5-81.5,111.5-24.16,1-69.54-26.67-62-124,9.12-117.61,48-117,60-120,26.27-6.57,147.5,135.73,114,251C209.92,1000,163.26,1007.72,141,1087c-.41,1.44-1,3.47-1.65,6"
                    />
                    <circle ref={circle2Ref} r="20" fill="#E0115F">
                        <text x="0" y="7" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                            1
                        </text>
                    </circle>
                </svg>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                How<br />It<br />Began
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed space-y-4">
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
                            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden ">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How we began"
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section3Ref} className="relative py-20 lg:py-32 min-h-screen flex items-center">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1380 886"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                >
                    <path
                        id="path-3"
                        stroke="#E0115F"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                        d="M139.35,0c-7.09,26.44-25.9,107.32,9.65,140,64.33,59.15,215.2-123.71,420-92C702.9,68.73,703.4,157,847,171c151.17,14.78,220.7-76.16,291-28,42.31,29,16.88,61.76,83,246,29,80.8,47.08,111.26,40,165-5.81,44.1-30.35,117.35-83,128-41.91,8.48-92.79-24.51-93-50-.13-16.29,20.52-19.12,29-44,12.88-37.78-21.69-69.52-13-78,33.38-20.13,185.61,98.47,157,209-10.57,49.64-46.1,63.35-94,137a301.52,301.52,0,0,0-17.54,30"
                    />
                    <circle ref={circle3Ref} r="20" fill="#E0115F">
                        <text x="0" y="7" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                            2
                        </text>
                    </circle>
                </svg>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="section-image">
                            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden ">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="How we expanded"
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-bold text-[#E0115F] mb-8 leading-[0.9] uppercase">
                                How<br />Expanded
                            </h2>
                            <div className="section-desc text-[#E0115F] text-lg lg:text-xl leading-relaxed space-y-4">
                                <p>
                                    After the festivals in Dnipro, we went to Kyiv. There we started looking for partners, but we wanted special ones. They became the coffee shops of the third wave. Then they were joined by eco-markets, delicatessen shops, delicatessen chains.
                                </p>
                                <p>
                                    Now we have representative offices in Kyiv, Dnipro, Odesa (and before the war - in Kharkiv).
                                </p>
                            </div>
                            <div className="mt-10">
                                <button className="px-10 py-5 border-2 border-[#E0115F] text-[#E0115F] rounded-full font-bold text-lg hover:bg-[#E0115F] hover:text-white transition-all flex items-center gap-3 uppercase">
                                    WHERE TO BUY?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section4Ref} className="relative py-20 lg:py-32 pb-32 lg:pb-40 min-h-screen flex items-center">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1380 995"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                >
                    <path
                        id="path-4"
                        stroke="#E0115F"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                        d="M1146.46,0c-9.85,19.81-6.73,22.76-18.46,34C1066.18,93.23,941.34,8.27,810.5,44.5c-93.07,25.77-64,97-137,95-45-1.23-99-47-88.5-84.5,11.3-40.37,266.68-2,267,25,.23,19.41-130.38,43-247,43-109.95,0-116.23-21.06-209-19-170.89,3.79-267.08,77.75-287,48-13.47-20.12,16.48-74.89,62-94,41.27-17.33,95.08-5.23,116,26,47.8,73.19-110.86,254.4-154,245C85.43,321,55.46,210.2,80,192c47.44-26.95,202,126.52,138,219-41.31,41.56-150.12-23.1-164,0-15.69,26.12,134.21,90.83,139,199,2.56,57.85-16.18,57.88-98.5,190.5-18,29,20,60,15,114-6.68,72.13,31,76,252.5,75.5"
                    />
                    <circle ref={circle4Ref} r="20" fill="#E0115F">
                        <text x="0" y="7" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                            3
                        </text>
                    </circle>
                </svg>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
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
                                <button className="px-10 py-5 border-2 border-[#E0115F] text-[#E0115F] rounded-full font-bold text-lg hover:bg-[#E0115F] hover:text-white transition-all flex items-center gap-3 uppercase">
                                    FLAVOUR MAP
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="section-image order-1 lg:order-2">
                            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden ">
                                <Image
                                    src="/Children Playing.svg"
                                    alt="What will be next"
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsContentSection
