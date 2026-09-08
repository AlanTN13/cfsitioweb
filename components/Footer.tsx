import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-width footer-inner">
                <div><Link href="/" className="footer-brand">CF Consultores</Link><p>Consultores en comercio internacional.</p></div>
                <nav aria-label="Navegación del pie"><Link href="#servicios">Servicios</Link><Link href="#faq">Preguntas frecuentes</Link><Link href="#contacto">Contacto</Link></nav>
                <p className="copyright">© {new Date().getFullYear()} CF Consultores</p>
            </div>
        </footer>
    );
}
