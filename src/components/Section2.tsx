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
            <div className="w-full overflow-hidden mt-4">
                <div className="flex animate-scroll-left">
                    <div className="flex shrink-0">
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/img.png" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/img.png" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/img.png" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/img.png" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                    </div>
                    <div className="flex shrink-0">
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                        <Image src="/Tacos Icon.svg" className='w-[350px] h-[350px]' alt="Section 1" width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2