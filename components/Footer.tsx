import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <Image
                                src="/logo.png"
                                alt="CF Consultores"
                                width={48}
                                height={48}
                                className="rounded-xl shadow-sm group-hover:scale-105 transition-transform"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-primary text-2xl leading-none">CF</span>
                                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] leading-none mt-1">Consultores</span>
                            </div>
                        </Link>
                        <p className="text-primary/60 text-base max-w-sm leading-relaxed mb-8">
                            Consultoría estratégica en comercio internacional. Acompañamos a empresas y emprendedores a operar globalmente con seguridad técnica y eficiencia analítica.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-primary mb-4">Secciones</h4>
                        <ul className="space-y-2">
                            {['Servicios', 'Enfoque', 'Proceso', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-primary mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>info@cfconsultores.com</li>
                            <li>+54 9 11 XXXX-XXXX</li>
                            <li>Buenos Aires, Argentina</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-xs">
                        © {currentYear} CF Consultores. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/politica" className="text-muted hover:text-primary text-xs">Privacidad</Link>
                        <Link href="/terminos" className="text-muted hover:text-primary text-xs">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
