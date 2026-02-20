import React from 'react';

interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
    return (
        <div className="relative p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white md:h-full">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {number}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 mt-2">{title}</h3>
            <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default ProcessStep;
