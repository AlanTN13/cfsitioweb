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
                <Link href="/" aria-label="CF Consultores — Inicio" className="header-brand flex shrink-0 items-center gap-2 sm:gap-4 group">
                    <div className="header-brand-logo" aria-hidden="true">
                        <Image
                            src="/logo.png"
                            alt=""
                            width={1080}
                            height={1350}
                            sizes="(min-width: 640px) 198px, 105px"
                            className="header-brand-image"
                            priority
                        />
                    </div>
                    <div className="flex flex-col border-l border-primary/20 pl-2 sm:pl-4">
                        <span className="header-brand-initials text-primary">CF</span>
                        <span className="header-brand-name text-primary">Consultores</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-10">
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
                <div className="lg:hidden">
                    <Link
                        href="https://wa.me/549XXXXXXXXXX"
                        className="bg-accent text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-premium"
                    >
                        WhatsApp
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
