import React from 'react';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
    iconName: keyof typeof LucideIcons;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconName, title, description }) => {
    const Icon = LucideIcons[iconName] as React.ElementType;

    return (
        <div className="group bg-white p-12 rounded-[2.5rem] shadow-premium card-hover border border-white/10 flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:ring-2 hover:ring-accent/50">
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700"></div>

            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10">
                <Icon size={32} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-black text-primary mb-5 leading-[1.2] tracking-tight relative z-10">{title}</h3>
            <p className="text-primary/60 text-lg leading-relaxed mb-10 flex-grow relative z-10">{description}</p>

            <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-accent font-black text-[11px] uppercase tracking-[0.2em] group-hover:text-primary transition-all relative z-10">
                <span>Explorar Servicio</span>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <LucideIcons.ArrowRight size={18} />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
