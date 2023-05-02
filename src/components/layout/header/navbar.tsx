import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { APP_ROUTES } from '@/config/routes';

import styles from './header.module.css';
import { NavLinkItem } from './header.types';

export const NAVIGATION_LINKS: NavLinkItem[] = [
    { label: 'Home', href: APP_ROUTES.HOME },
    { label: 'About', href: APP_ROUTES.ABOUT },
    { label: 'Projects', href: APP_ROUTES.PROJECTS.HOME },
    { label: 'Contact', href: APP_ROUTES.CONTACT },
];

interface Props {
    children: React.ReactNode;
}

export const Navbar = ({ children }: Props): JSX.Element => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

    const onMenuDisplayToggle = (): void => setIsMobileMenuOpen((state) => !state);

    /*  React Render */

    const getNavLinkClasses = (href: string): string =>
        clsx(styles['nav-list__item'], {
            [styles.active]: router.asPath === href,
        });

    const NavLinkElements: JSX.Element[] = NAVIGATION_LINKS.map(({ label, href }) => (
        <Link className={getNavLinkClasses(href)} {...{ href }} key={label + href}>
            {label}
        </Link>
    ));

    const menuBtnClasses: string = clsx(styles['menu-btn'], {
        [styles.open]: isMobileMenuOpen,
    });

    const navbarClasses: string = clsx(styles['nav-list'], {
        [styles.open]: isMobileMenuOpen,
    });

    return (
        <>
            <nav className={navbarClasses}>
                {NavLinkElements}

                <a
                    className="btn btn-outlined-primary"
                    href="/resume.pdf"
                    download="Eduardo Varela's Resume"
                >
                    Resume
                </a>

                <section className={clsx(styles['networks-and-controls-container'], styles.mobile)}>
                    {children}
                </section>
            </nav>

            <button className={menuBtnClasses} onClick={onMenuDisplayToggle} type="button">
                <span className={styles['menu-btn__top-line']} />
                <span className={styles['menu-btn__center-line']} />
                <span className={styles['menu-btn__bottom-line']} />
            </button>
        </>
    );
};
