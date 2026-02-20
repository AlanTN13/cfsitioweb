"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Enfoque', href: '#enfoque' },
        { name: 'Proceso', href: '#proceso' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <Image
                            src="/logo.png"
                            alt="CF Consultores"
                            width={42}
                            height={42}
                            className="relative rounded-xl shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-primary text-xl leading-none">CF</span>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none mt-1">Consultores</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="https://calendly.com/tu-link"
                        target="_blank"
                        className="bg-primary text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:shadow-premium transition-all active:scale-95"
                    >
                        Presupuesto
                    </Link>
                </nav>

                {/* Mobile Nav Button */}
                <div className="md:hidden">
                    <Link
                        href="https://wa.me/549XXXXXXXXXX"
                        className="bg-accent text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-premium"
                    >
                        WhatsApp
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
