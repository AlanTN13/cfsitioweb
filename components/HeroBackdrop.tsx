"use client";

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function HeroBackdrop() {
    const [paused, setPaused] = useState(false);

    return (
        <>
            <div className="hero-atmosphere" data-paused={paused} aria-hidden="true">
                <span className="atmosphere-shape atmosphere-shape-one" />
                <span className="atmosphere-shape atmosphere-shape-two" />
            </div>
            <button
                type="button"
                className="motion-toggle"
                onClick={() => setPaused(!paused)}
                aria-label={paused ? 'Reanudar movimiento del fondo' : 'Pausar movimiento del fondo'}
                title={paused ? 'Reanudar movimiento del fondo' : 'Pausar movimiento del fondo'}
            >
                {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            </button>
        </>
    );
}
