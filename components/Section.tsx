import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'light' | 'white' | 'dark';
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', background = 'light' }) => {
    const bgClasses = {
        light: 'bg-[#F8FAFC]',
        white: 'bg-white',
        dark: 'bg-[#0B3B2E] text-white'
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgClasses[background]} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
