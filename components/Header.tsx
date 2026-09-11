import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-width header-inner">
                <Link href="/" aria-label="CF Consultores — Inicio" className="brand-logo">
                    <Image src="/cf-consultores-logo.png" alt="CF Consultores en Comercio Internacional" width={2000} height={2000} sizes="(min-width: 800px) 224px, 183px" priority />
                </Link>
                <nav aria-label="Navegación principal" className="header-nav">
                    <Link href="#servicios">Servicios</Link>
                    <Link href="#enfoque">Nuestro enfoque</Link>
                    <Link href="#proceso">Cómo trabajamos</Link>
                    <Link href="#faq">Preguntas frecuentes</Link>
                </nav>
                <Link href="#contacto" className="button button-primary header-contact">Hablemos</Link>
            </div>
        </header>
    );
}
