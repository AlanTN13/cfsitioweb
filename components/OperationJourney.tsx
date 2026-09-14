'use client';

import { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, ArrowRight, Package, MessageCircle, FileSearch, Handshake, Truck } from 'lucide-react';

type Step = readonly [string, string];
type Direction = 'importar' | 'exportar';

const points = [{ x: 60, y: 176 }, { x: 220, y: 76 }, { x: 400, y: 184 }, { x: 560, y: 76 }];
const progress = [0, 0.31, 0.65, 1];
const icons = [MessageCircle, FileSearch, Handshake, Truck];
const details: Record<Direction, readonly string[]> = {
    importar: [
        'Empezamos por el producto que querés comprar, su origen y las dudas que necesitás resolver.',
        'Revisamos la información de la mercadería, los costos y la documentación de tu compra.',
        'Definimos qué necesitás de CF y cómo coordinar las gestiones de tu importación.',
        'Seguimos las gestiones acordadas y te ayudamos a ordenar las dudas que aparezcan en el camino.',
    ],
    exportar: [
        'Empezamos por tu producto, el destino que tenés en mente y la etapa en la que estás.',
        'Revisamos los requisitos, la documentación y las alternativas para la salida de tu producto.',
        'Definimos qué necesitás de CF y cómo coordinar las gestiones de tu exportación.',
        'Seguimos las gestiones acordadas y te acompañamos con las consultas sobre tu operación.',
    ],
};

export default function OperationJourney({ steps }: { steps: readonly Step[] }) {
    const [direction, setDirection] = useState<Direction>('importar');
    const [active, setActive] = useState(0);
    const point = points[active];

    return (
        <div className="journey">
            <div className="journey-toolbar">
                <div className="journey-directions" role="group" aria-label="Tipo de operación">
                    <button type="button" aria-pressed={direction === 'importar'} onClick={() => setDirection('importar')}><ArrowDownLeft size={18} aria-hidden="true" />Quiero importar</button>
                    <button type="button" aria-pressed={direction === 'exportar'} onClick={() => setDirection('exportar')}><ArrowUpRight size={18} aria-hidden="true" />Quiero exportar</button>
                </div>
                <p>Elegí una etapa para conocerla.</p>
            </div>

            <ol className="journey-steps" aria-label="Etapas del acompañamiento">
                {steps.map(([title], index) => {
                    const Icon = icons[index];
                    return <li key={title}><button type="button" aria-pressed={active === index} aria-controls="journey-detail" onClick={() => setActive(index)}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span><small>0{index + 1}</small>{title}</span></button></li>;
                })}
            </ol>

            <div className="journey-body">
                <div className="journey-map" aria-hidden="true">
                    <div className="journey-endpoints"><span>{direction === 'importar' ? 'Tu compra en el exterior' : 'Tu producto'}</span><span>{direction === 'importar' ? 'Tu negocio' : 'Tu destino de exportación'}</span></div>
                    <svg viewBox="0 0 620 260" fill="none">
                        <ellipse cx="320" cy="130" rx="130" ry="110" className="journey-globe" />
                        <ellipse cx="320" cy="130" rx="64" ry="110" className="journey-globe" />
                        <path d="M190 130H450M207 76Q320 114 433 76M207 184Q320 146 433 184M320 20V240" className="journey-globe" />
                        <path d="M60 176C140 176 130 76 220 76S310 184 400 184S480 76 560 76" className="journey-route" />
                        <path d="M60 176C140 176 130 76 220 76S310 184 400 184S480 76 560 76" pathLength="1" strokeDasharray={`${progress[active]} 1`} className="journey-progress" />
                        {points.map((p, index) => <circle key={index} cx={p.x} cy={p.y} r="7" className={index <= active ? 'journey-point is-passed' : 'journey-point'} />)}
                        <g className="journey-marker" style={{ transform: `translate(${point.x}px, ${point.y}px)` }}>
                            <circle r="25" fill="#e4f4e9" stroke="#0a3d2f" strokeWidth="5" />
                            <Package x="-11" y="-11" width="22" height="22" color="#0a3d2f" strokeWidth="1.5" />
                        </g>
                    </svg>
                    <span className="journey-map-caption">Cada etapa conecta con la siguiente.</span>
                </div>
                <div className="journey-detail" id="journey-detail" role="region" aria-label="Detalle de la etapa" aria-live="polite" aria-atomic="true">
                    <span className="journey-counter">0{active + 1} / 04</span>
                    <h3>{steps[active][0]}</h3>
                    <p>{steps[active][1]}</p>
                    <p className="journey-specific">{details[direction][active]}</p>
                    <a href="#contacto" className="journey-contact">Conversemos sobre tu {direction === 'importar' ? 'importación' : 'exportación'}<ArrowRight size={17} aria-hidden="true" /></a>
                </div>
            </div>


        </div>
    );
}
