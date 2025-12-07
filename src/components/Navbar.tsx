'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartCount = 0;

    const menuItems = [
        { label: 'Home Screen', href: '/' },
        { label: 'Taste The Vibe (Menu)', href: '/menu' },
        { label: 'Order Online', href: '/order' },
        { label: 'Our Journey', href: '/#journey' },
        { label: 'Our Appreciation', href: '/#appreciation' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
    const handleMenuItemClick = () => setIsMenuOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? '' : 'bg-transparent'
                }`}
        >
            <div className="w-full mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-[#B50E36] font-logo font-bold uppercase tracking-[0.35em] text-lg md:text-2xl"
                >
                    <Image src="/Mesa Stone Logo Orig.svg" className='lg:w-[200px] w-[100px] lg:h-[200px] h-[100px]' alt="Mesa Stone logo" width={200} height={200} />
                </Link>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-stretch border-2 border-[#E0115F] bg-[#FFFDD0] shadow-[4px_4px_0_0_#E0115F] divide-x-2 divide-[#E0115F]">
                        <div className="px-4 py-2 flex items-center justify-center">
                            <Image src="/Basket Icon.svg" alt="Cart icon" width={20} height={20} />
                        </div>
                        <div className="px-4 py-2 font-semibold text-lg text-[#E0115F]">{cartCount}</div>
                    </div>
                    <button
                        type="button"
                        className="group cursor-pointer hidden md:flex relative flex items-center gap-2 px-6 py-2 border-2 border-[#E0115F] bg-[#FFFDD0] shadow-[4px_4px_0_0_#E0115F] font-semibold tracking-[0.2em] uppercase text-[#E0115F] overflow-hidden transition-all duration-300 hover:shadow-[6px_6px_0_0_#E0115F] hover:-translate-y-0.5"
                        onClick={handleMenuToggle}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="absolute inset-0 bg-[#E0115F] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#FFFDD0]">Taste The Vibe</span>
                        {/* {isMenuOpen ? <CloseIcon className="w-5 h-5 relative z-10 transition-colors duration-500 group-hover:stroke-[#FFFDD0]" /> : <HamburgerIcon className="w-6 h-6 relative z-10 transition-colors duration-500 group-hover:stroke-[#FFFDD0]" />} */}
                    </button>

                    <button
                        type="button"
                        className="group relative cursor-pointer flex items-center gap-2 px-6 py-2 border-2 border-[#E0115F] bg-[#FFFDD0] shadow-[4px_4px_0_0_#E0115F] font-semibold tracking-[0.2em] uppercase text-[#E0115F] overflow-hidden transition-all duration-300 hover:shadow-[6px_6px_0_0_#E0115F] hover:-translate-y-0.5"
                        onClick={handleMenuToggle}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="absolute inset-0 bg-[#E0115F] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <span className="relative z-10  transition-colors duration-500 group-hover:text-[#FFFDD0]">Navigate</span>
                        {isMenuOpen ? <CloseIcon className="w-5 h-5 relative z-10 transition-colors duration-500 group-hover:stroke-[#FFFDD0]" /> : <HamburgerIcon className="w-6 h-6 relative z-10 transition-colors duration-500 group-hover:stroke-[#FFFDD0]" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="hidden md:block flex-1 bg-black/30 backdrop-blur-sm" onClick={handleMenuToggle} />
                    <div className="ml-auto h-full w-full sm:w-[440px] bg-[#E0115F] text-[#FFFDD0] rounded-bl-[48px] shadow-[-12px_0_40px_rgba(0,0,0,0.35)] animate-slide-in">
                        <div className="flex items-center justify-end px-6 py-5 border-b border-[#FFFDD0]/20">
                            <button
                                type="button"
                                onClick={handleMenuToggle}
                                className="group relative flex items-center gap-2 px-5 py-2 border-2 border-[#FFFDD0] text-[#FFFDD0] uppercase tracking-[0.2em] font-semibold shadow-[4px_4px_0_0_rgba(255,253,208,0.4)] overflow-hidden transition-all duration-300 hover:shadow-[6px_6px_0_0_rgba(255,253,208,0.4)] hover:-translate-y-0.5"
                                aria-label="Close navigation menu"
                            >
                                <span className="absolute inset-0 cursor-pointer bg-[#FFFDD0] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#E0115F]">Navigate</span>
                                <CloseIcon className="w-5 h-5 cursor-pointer relative z-10 transition-colors duration-500 group-hover:stroke-[#E0115F]!" />
                            </button>
                        </div>

                        <div className="flex flex-col justify-center h-[calc(100%-88px)] px-8 sm:px-10 py-6 space-y-3">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleMenuItemClick}
                                    style={{
                                        transitionDelay: `${index * 60}ms`,
                                        animationDelay: `${index * 60}ms`
                                    }}
                                    className="group relative overflow-hidden px-4 py-3 rounded-lg text-lg sm:text-xl font-semibold text-[#FFFDD0] tracking-[0.15em] transition-all duration-300 opacity-0 animate-fade-slide-in"
                                >
                                    <span className="absolute inset-0 bg-[#FFFDD0] opacity-0 scale-95 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:scale-100" />
                                    <span className="relative z-10 block transition-all duration-400 group-hover:text-[#E0115F] group-hover:translate-x-2 group-hover:tracking-[0.2em]">
                                        {item.label}
                                    </span>
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#E0115F] transition-all duration-400 group-hover:h-3/4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

function HamburgerIcon({ className = 'w-6 h-6' }) {
    return (
        <svg
            className={className}
            viewBox="0 0 20 14"
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
        >
            <path d="M1 1h18M5 7h14M1 13h18" stroke="currentColor" />
        </svg>
    );
}

function CloseIcon({ className = 'w-5 h-5' }) {
    return (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
        >
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" />
        </svg>
    );
}

