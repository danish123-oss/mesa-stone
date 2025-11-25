'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const splashRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                    if (onComplete) onComplete();
                }
            });

            tl.to(logoRef.current, {
                rotation: 360,
                duration: 3,
                ease: 'none',
            })
                .to(textRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                }, '-=2')
                .to({}, { duration: 0.8 })
                .to(splashRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                });
        });

        return () => ctx.revert();
    }, [onComplete]);

    if (!isAnimating) return null;
    return (
        <div
            ref={splashRef}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#FFFDD0]"
        >
            <div className="relative w-96 h-96 flex items-center justify-center">
                <Image
                    ref={logoRef}
                    src="/Mesa%20Stone%20Logo%20Round%20Shape.svg"
                    alt="Mesa Stone logo"
                    fill
                    sizes="384px"
                    priority
                    className="object-contain origin-center"
                />

                <div
                    ref={textRef}
                    className="absolute inset-0 flex items-center justify-center opacity-0"
                    style={{ transform: 'scale(0.5)' }}
                >
                    <div className="relative text-center">
                        {/* <div 
              className="absolute -top-16 left-1/2 -translate-x-1/2 text-sm font-bold tracking-widest"
              style={{ color: '#2F4F4F' }}
            >
              NATIVE
            </div> */}

                        <div className="text-7xl font-bold" style={{ color: '#E0115F', fontFamily: 'Pacifico, cursive' }}>
                            Mesa Stone
                        </div>

                        {/* <div 
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-xs font-bold tracking-wider"
              style={{ color: '#2F4F4F' }}
            >
              FRYBREAD TACOS
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

