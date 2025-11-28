import React from 'react'
import Image from 'next/image'

const Section1 = () => {
    return (
        <section className="min-h-screen bg-[#E0115F] flex flex-col items-center justify-center z-10">
            <h2 className="text-[100px] md:max-w-7xl text-center font-medium! mt-[60px] tracking-[3.5px] leading-[1.2]  text-[#FFFDD0]  lobster-regular z-10">
                This is Mesa Stone, <br /> We’ve reimagined the frybread taco. Handmade with care. <br />
            </h2>
            <div className="flex justify-center z-9 md:-mt-[200px] relative w-full">
                <Image src="/Woman Dancing.svg" className='w-[300px] md:w-[500px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img.png" className='w-[60px] absolute left-0 top-[100px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img2.png" className='w-[60px] absolute right-0 top-[200px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img.png" className='w-[60px] absolute left-[20%] -translate-x-1/2 bottom-[400px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img2.png" className='w-[60px] absolute right-[20%] -translate-x-1/2 bottom-[400px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img2.png" className='w-[60px] absolute left-[20%] -translate-x-1/2 bottom-[200px]' alt="Section 1" width={1000} height={1000} />
                <Image src="/img.png" className='w-[60px] absolute right-[20%] -translate-x-1/2 bottom-[200px]' alt="Section 1" width={1000} height={1000} />
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                    <Image src="/Woman Dancing.svg" className='md:w-[300px] w-[200px] md:-mt-[140px]' alt="Section 1" width={1000} height={1000} />
                </div>
                <div className="col-span-3">
                    <h1 className='text-center text-[#ffffff] text-[45px] tracking-[2px] font-bold!'>Those who’ve tasted it already know. <br /> For everyone else — get ready for a hit that’s more than flavour.</h1>
                    <p className='text-center text-[#ffffff] mt-7 text-[17px] tracking-[2px] font-normal!'>Mesa Stone isn’t just about food. That would be too easy. We want you to feel something in every bite — a spark, a story, a connection. It’s not simple to pull off, but that’s exactly why we do it.</p>

                    <p className='text-center text-[#ffffff] mt-7 text-[17px] tracking-[2px] font-normal!'>How? By refusing shortcuts. Not in flavour, not in sourcing, not in the way we create. Every ingredient, every detail, is chosen with intent. From the farms we partner with to the techniques we honour, Mesa Stone is built on discipline and craft. What you taste isn’t just a dish — it’s culture, rebellion, and memory, all served warm.</p>
                    <div className="group cursor-pointer relative w-40 h-40 sm:w-48 sm:h-48 md:w-[250px] md:h-[150px] flex items-center justify-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                        <Image
                            src="/Mesa%20Stone%20Logo%20Round%20Shape.svg"
                            alt="Flavor Map"
                            fill
                            className="object-contain animate-spin-slow group-hover:animate-spin-fast"
                            style={{ animationDuration: '8s' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-center gap-2 z-10">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-[60px] md:h-[60px] text-[#FFFDD0] transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                        <p className='text-center text-[#ffffff] text-[17px] tracking-[2px] font-medium! absolute left-[160px] w-full'>About Mesa Stone</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <Image src="/Woman Dancing.svg" className='md:w-[300px] w-[200px] md:mt-[100px]' alt="Section 1" width={1000} height={1000} />
                </div>
            </div>



        </section>
    )
}

export default Section1