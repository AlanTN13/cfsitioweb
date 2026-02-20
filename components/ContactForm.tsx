"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-subtle text-center py-16 fade-in">
                <div className="w-16 h-16 bg-[#F0FDF4] text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">¡Gracias por tu mensaje!</h3>
                <p className="text-muted">Te contactaremos a la brevedad para agendar la consulta.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-semibold text-accent hover:underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-subtle space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-primary">Nombre</label>
                    <input
                        type="text" id="name" required
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-semibold text-primary">WhatsApp</label>
                    <input
                        type="tel" id="whatsapp" required
                        placeholder="+54 9"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-primary">Email</label>
                <input
                    type="email" id="email" required
                    placeholder="email@empresa.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary">Mensaje</label>
                <textarea
                    id="message" rows={4} required
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 ${status === 'sending' ? 'bg-muted cursor-not-allowed' : 'bg-primary hover:bg-accent'
                    }`}
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
            </button>
        </form>
    );
};

export default ContactForm;
