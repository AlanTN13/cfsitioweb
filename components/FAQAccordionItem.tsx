"use client";

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();
    return (
        <div className="faq-item">
            <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
            </button>
            <div id={id} hidden={!isOpen} className="faq-answer"><p>{answer}</p></div>
        </div>
    );
}
