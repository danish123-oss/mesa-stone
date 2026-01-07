import React from 'react'
import Image from 'next/image'
const Section2 = () => {
    return (
        <section className="min-h-screen bg-[#FFFDD0] flex flex-col items-center z-10 relative">
            <div className="group cursor-pointer relative mt-[50px] w-40 h-40 sm:w-48 sm:h-48 md:w-[550px] md:h-[150px] flex items-center justify-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                <Image
                    src="/Mesa%20Stone%20Logo%20Round%20Shape.svg"
                    alt="Flavor Map"
                    fill
                    className="object-contain animate-spin-slow group-hover:animate-spin-fast"
                    style={{ animationDuration: '8s' }}
                />
                <div className="absolute inset-0 flex items-center flex-col justify-center text-center z-10">
                    <p className='text-center text-[#E0115F] text-[17px] tracking-[2px] font-bold!  w-full lobster-regular'>Dive into <br /> our Menu</p>
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] text-[#E0115F] transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
            <div className="w-full overflow-hidden lg:mt-16 mt-8">
                <div className="flex animate-scroll-left">
                    <div className="flex shrink-0 gap-4">
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tr-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tl-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tr-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tl-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tr-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tl-4xl  ' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tr-4xl' alt="Section 1" width={1000} height={1000} />
                        <Image src="/taco2.jpg" className='w-[350px] h-[400px] rounded-tl-4xl' alt="Section 1" width={1000} height={1000} />
                    </div>
                </div>
            </div>
            <div className='w-full mt-[100px] mb-16  flex items-center justify-center relative'>
                {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                    <div className="absolute top-[10%] left-full w-[200%] flex animate-scroll-left ">
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-8" />
                    </div>
                    <div className="absolute top-[20%] left-full w-[200%] flex animate-scroll-left" style={{ animationDuration: '10s' }}>
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-12" />
                    </div>
                    <div className="absolute top-[40%] left-full w-[200%] flex animate-scroll-left" style={{ animationDuration: '25s' }}>
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-10" />
                    </div>
                    <div className="absolute top-[60%] left-full w-[200%] flex animate-scroll-left" style={{ animationDuration: '10s' }}>
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-10" />
                    </div>
                    <div className="absolute top-[80%] left-full w-[200%] flex animate-scroll-left" style={{ animationDuration: '20s' }}>
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-14" />
                    </div>
                    <div className="absolute top-[70%] left-full w-[200%] flex animate-scroll-left" style={{ animationDuration: '10s' }}>
                        <Image src="/movingtaco.png" alt="cloud" width={200} height={180} className="mx-14" />
                    </div>
                </div> */}
                <div className="relative flex flex-col items-center mt-16 mb-16">
                    {/* SVG Arc Text */}
                    <svg
                        width="600"
                        height="180"
                        viewBox="0 0 600 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1/2 -translate-x-1/2 top-[60px] z-20 pointer-events-none"
                        style={{ overflow: "visible" }}
                    >
                        <defs>
                            <path
                                id="menuArc"
                                d="M40,155 A260,260 0 0,1 560,155"
                            />
                        </defs>
                        <text
                            fill="#E0115F"
                            fontFamily="var(--font-logo, Lobster, sans-serif)"
                            fontSize="34"
                            fontWeight="bold"
                            letterSpacing="2"
                            dominantBaseline="middle"
                        >
                            <textPath
                                xlinkHref="#menuArc"
                                startOffset="50%"
                                textAnchor="middle"
                                className='uppercase'
                                dominantBaseline="middle"
                            >
                                Explore And Save On Utility Box Deals
                            </textPath>
                        </text>
                    </svg>
                    {/* Properly Sized Rounded Top Arch Video */}
                    <div className="z-10 w-[400px] relative flex flex-col items-start justify-center">
                        <div className="absolute inset-0 rounded-t-[300px]  pointer-events-none " />
                        <video
                            className="relative rounded-t-[250px] overflow-hidden w-[450px] h-[560px] object-cover z-10"
                            disablePictureInPicture={false}
                            preload="auto"
                            autoPlay
                            playsInline
                            loop
                            muted
                        >
                            <source src="https://data.mrpops.ua/media/giftbox.mp4" type="video/mp4" />
                        </video>

                        {/* Optional arch border
                        <div className="pointer-events-none absolute inset-0 rounded-t-[330px] border-4 border-[#E0115F] border-b-0 z-20" /> */}
                    </div>
                    <h1 className='text-5xl lg:max-w-2xl font-bold text-center text-[#E0115F] mt-10'>
                        Appreciate your team with something special. <br /> <br />
                        Our Unity-Box deals are made to bring us all together.
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Section2