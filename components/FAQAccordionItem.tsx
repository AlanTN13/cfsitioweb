"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-5 text-left transition-all"
            >
                <span className="font-semibold text-primary pr-8">{question}</span>
                <ChevronDown
                    className={`text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5Opacity' : 'max-h-0'}`}>
                <p className="text-muted text-sm leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FAQAccordionItem;
