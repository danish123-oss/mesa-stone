'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import MapSection from './MapSection'

const AnimatedFrybread = ({ scrollProgress }: { scrollProgress: number }) => {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = scrollProgress * Math.PI * 3 + state.clock.elapsedTime * 0.8
            groupRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.15
            groupRef.current.position.y = Math.sin(scrollProgress * Math.PI * 3) * 0.3
            groupRef.current.scale.setScalar(1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1)
        }
    })

    return (
        <group ref={groupRef}>
            <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
                <group rotation={[Math.PI / 8, 0, 0]}>
                    <mesh castShadow receiveShadow>
                        <cylinderGeometry args={[2.2, 2, 0.4, 64]} />
                        <meshStandardMaterial
                            color="#D4A574"
                            roughness={0.8}
                            metalness={0.05}
                        />
                    </mesh>

                    <mesh castShadow receiveShadow position={[0, 0.21, 0]}>
                        <cylinderGeometry args={[2.15, 1.95, 0.02, 64]} />
                        <meshStandardMaterial
                            color="#C89563"
                            roughness={0.7}
                            metalness={0.1}
                        />
                    </mesh>

                    <mesh castShadow position={[0.6, 0.25, 0.3]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>
                    <mesh castShadow position={[-0.8, 0.25, -0.4]}>
                        <sphereGeometry args={[0.18, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>
                    <mesh castShadow position={[0.3, 0.25, -0.7]}>
                        <sphereGeometry args={[0.12, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>
                    <mesh castShadow position={[-0.5, 0.25, 0.6]}>
                        <sphereGeometry args={[0.14, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>
                    <mesh castShadow position={[1.0, 0.25, -0.2]}>
                        <sphereGeometry args={[0.16, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>
                    <mesh castShadow position={[-0.3, 0.25, 0.9]}>
                        <sphereGeometry args={[0.11, 16, 16]} />
                        <meshStandardMaterial
                            color="#B8946F"
                            roughness={0.6}
                        />
                    </mesh>

                    <mesh position={[0, 0.23, 0]}>
                        <cylinderGeometry args={[0.3, 0.35, 0.15, 32]} />
                        <meshStandardMaterial
                            color="#A67C52"
                            roughness={0.75}
                        />
                    </mesh>
                    <mesh position={[-1.2, 0.23, 0.5]}>
                        <cylinderGeometry args={[0.25, 0.3, 0.12, 32]} />
                        <meshStandardMaterial
                            color="#A67C52"
                            roughness={0.75}
                        />
                    </mesh>
                    <mesh position={[1.3, 0.23, -0.6]}>
                        <cylinderGeometry args={[0.28, 0.32, 0.13, 32]} />
                        <meshStandardMaterial
                            color="#A67C52"
                            roughness={0.75}
                        />
                    </mesh>
                </group>
            </Float>
        </group>
    )
}

const SrollAnimationalSection = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const sectionTop = rect.top
            const sectionHeight = rect.height
            const sectionBottom = rect.bottom

            const inView = sectionTop <= windowHeight * 0.5 && sectionBottom >= windowHeight * 0.5
            setIsInView(inView)

            if (sectionTop < windowHeight && sectionBottom > 0) {
                const scrollPosition = windowHeight - sectionTop
                const progress = Math.max(0, Math.min(1, scrollPosition / sectionHeight))
                setScrollProgress(progress)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-[#FFFDD0] relative py-20"
        >
            <div
                className={`fixed inset-0 z-10 pointer-events-none flex items-center justify-center transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="w-full h-full">
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 50 }}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
                        <AnimatedFrybread scrollProgress={scrollProgress} />
                    </Canvas>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                <div className="max-w-xl mb-32">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#E0115F] mb-6 leading-tight uppercase">
                        Meet the Frybread
                    </h2>
                    <p className="text-[#E0115F] text-lg lg:text-xl leading-relaxed capitalize">
                        crispy outside, soft inside, and unapologetically addictive.
                    </p>
                </div>

                <div className="max-w-xl ml-auto mb-32">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#E0115F] mb-6 leading-tight uppercase text-right">
                        Frybread Carries History
                    </h2>
                    <p className="text-[#E0115F] text-lg lg:text-xl leading-relaxed text-right capitalize">
                        Born from resilience, shaped by survival. At Mesa Stone, we honour its roots while reimagining it for today. Every bite is a tribute to the past and a celebration of our new age.
                    </p>
                    <div className="flex justify-end mt-8">
                        <button className="px-8 py-4 bg-[#E0115F] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
                            QUESTIONNAIRE
                        </button>
                    </div>
                </div>

                <div className="max-w-xl mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#E0115F] mb-6 leading-tight uppercase">
                        A London First
                    </h2>
                    <p className="text-[#E0115F] text-lg lg:text-xl leading-relaxed capitalize">
                        For the first time, London gets a taste of frybread, Experiences its culture and honours its heritage.
                    </p>
                    <p className="text-[#E0115F] mt-3 text-lg lg:text-xl leading-relaxed capitalize">
                        Every ingredient tells a story. Travelling oceans and reshaping The World.
                    </p>
                    <p className="text-[#E0115F] mt-3 text-lg lg:text-xl leading-relaxed capitalize">
                        Each dish is a reminder that what we eat is history, survival, and connection on a plate.
                    </p>
                </div>
            </div>
            <MapSection />
        </section>
    )
}

export default SrollAnimationalSection