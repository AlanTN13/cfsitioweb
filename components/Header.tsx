import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-width header-inner">
                <Link href="/" aria-label="CF Consultores — Inicio" className="brand-logo">
                    <Image src="/logo.png" alt="CF Consultores en Comercio Internacional" width={1080} height={1350} sizes="(min-width: 640px) 252px, 198px" priority />
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
