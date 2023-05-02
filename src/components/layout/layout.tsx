import dynamic from 'next/dynamic';

import { Footer } from './footer';
import { Header } from './header';

const Particles = dynamic(() => import('./particles').then((mod) => mod.Particles), { ssr: false });

interface Props {
    children: React.ReactNode;
}

/**
 * Application layout component, it includes the Header and Footer and places the
 * content with most of the space inside the viewport.
 */
export const Layout = ({ children }: Props): JSX.Element => (
    <>
        <Header />
        <main className="container">Hello world {children}</main>
        <Footer />
        <Particles />
    </>
);
