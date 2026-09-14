'use client';

import { useEffect } from 'react';

export default function PageMotion() {
    useEffect(() => {
        const root = document.getElementById('contenido');
        if (!root) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const desktop = window.matchMedia('(min-width: 800px) and (pointer: fine)');
        const photo = root.querySelector<HTMLElement>('.hero-photo');
        const sections = Array.from(root.querySelectorAll<HTMLElement>('.section > .site-width'));
        const seen = new Set<HTMLElement>();
        const animations = new Set<Animation>();
        let stopEffects = () => {};

        const configure = () => {
            stopEffects();
            if (reducedMotion.matches) return;

            // Content stays visible without JavaScript; only entering sections animate.
            const observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const section = entry.target as HTMLElement;
                    observer.unobserve(section);
                    if (seen.has(section)) continue;
                    seen.add(section);
                    const animation = section.animate([
                        { opacity: 0, transform: 'translateY(8px)' },
                        { opacity: 1, transform: 'translateY(0)' },
                    ], { duration: 380, easing: 'cubic-bezier(0.2, 0.6, 0.3, 1)' });
                    animations.add(animation);
                    animation.onfinish = () => animations.delete(animation);
                }
            }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

            for (const section of sections) {
                if (section.getBoundingClientRect().top < window.innerHeight) seen.add(section);
                if (!seen.has(section)) observer.observe(section);
            }

            let frame = 0;
            const parallaxEnabled = desktop.matches && photo !== null;
            const updatePhoto = () => {
                frame = 0;
                if (!photo) return;
                const top = photo.getBoundingClientRect().top;
                if (top > window.innerHeight || top + photo.offsetHeight < 0) return;
                // At most 18px of travel, inside a slightly enlarged, clipped image.
                const offset = Math.min(18, Math.max(0, window.scrollY * 0.06));
                photo.style.setProperty('--parallax-y', `${offset}px`);
            };
            const schedulePhoto = () => {
                if (!frame) frame = window.requestAnimationFrame(updatePhoto);
            };
            if (parallaxEnabled) {
                photo.dataset.parallax = 'true';
                updatePhoto();
                window.addEventListener('scroll', schedulePhoto, { passive: true });
                window.addEventListener('resize', schedulePhoto);
            }

            stopEffects = () => {
                observer.disconnect();
                animations.forEach(animation => animation.cancel());
                animations.clear();
                window.cancelAnimationFrame(frame);
                window.removeEventListener('scroll', schedulePhoto);
                window.removeEventListener('resize', schedulePhoto);
                if (photo) {
                    delete photo.dataset.parallax;
                    photo.style.removeProperty('--parallax-y');
                }
            };
        };

        configure();
        reducedMotion.addEventListener('change', configure);
        desktop.addEventListener('change', configure);
        return () => {
            stopEffects();
            reducedMotion.removeEventListener('change', configure);
            desktop.removeEventListener('change', configure);
        };
    }, []);

    return null;
}
