import React from 'react';
import { debounce } from 'throttle-debounce';

import styles from './particles.module.css';

interface ParticlesCSS extends React.CSSProperties {
    '--index': number;
}

const PARTICLE_WIDTH = 16;
const DEBOUNCE_DELAY_IN_MS = 400;

const generateRandomNumberBetween10And30 = (): number => Math.ceil(Math.random() * 20 + 10);

/**
 * Particles component for layout, memoization is being used since the component will
 * re-render if theme is changed. Particles is a client component, then it should be
 * implemented with SSR off (achived through `dynamic` Next.js method). Component will
 * re-render if the screen is resized.
 */
export const Particles = React.memo((): JSX.Element => {
    const [particles, setParticles] = React.useState<number>(
        () => window.innerWidth / PARTICLE_WIDTH,
    );

    React.useEffect(() => {
        const calculateRequiredParticlesToFillScreen = debounce(DEBOUNCE_DELAY_IN_MS, (): void =>
            setParticles(window.innerWidth / PARTICLE_WIDTH),
        );

        window.addEventListener('resize', calculateRequiredParticlesToFillScreen);

        return () => window.removeEventListener('resize', calculateRequiredParticlesToFillScreen);
    }, []);

    const ParticleItems: JSX.Element[] = [...new Array(Math.ceil(particles))].map(() => (
        <span
            key={crypto.randomUUID()}
            style={{ '--index': generateRandomNumberBetween10And30() } as ParticlesCSS}
        />
    ));

    return (
        <div className={styles.container}>
            <div className={styles.particles}>{ParticleItems}</div>
        </div>
    );
});
