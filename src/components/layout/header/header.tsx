import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import GithubIcon from '@/assets/svg/github.svg';
import LinkedInIcon from '@/assets/svg/linkedin.svg';
import MailIcon from '@/assets/svg/mail.svg';
import { LanguageSelector } from '@/features/language';
import { ThemeToggler } from '@/features/theme';

import styles from './header.module.css';
import { NavLinkItem } from './header.types';
import { Navbar } from './navbar';

const SOCIAL_NETWORKS: NavLinkItem[] = [
    {
        label: <MailIcon className={clsx('icon-size', styles['icon-stroke'])} />,
        href: `mailto:deved.contact@gmail.com`,
    },
    {
        label: <LinkedInIcon className={clsx('icon-size', styles['icon-fill'])} />,
        href: 'https://www.linkedin.com/in/eduardov-dev/',
    },
    {
        label: <GithubIcon className={clsx('icon-size', styles['icon-fill'])} />,
        href: 'https://github.com/EduardoV-dev',
    },
];

export const Header = (): JSX.Element => {
    const SocialNetworkLinks: JSX.Element[] = SOCIAL_NETWORKS.map(({ href, label }) => (
        <a {...{ href }} key={href + label} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    ));

    const NetworkAndControlElements: JSX.Element = (
        <>
            <div
                className={styles['networks-and-controls-container__group']}
                data-testid="social-networks"
            >
                {SocialNetworkLinks}
            </div>

            <div
                className={styles['networks-and-controls-container__group']}
                data-testid="app-controls"
            >
                <LanguageSelector />
                <ThemeToggler />
            </div>
        </>
    );

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Navbar>{NetworkAndControlElements}</Navbar>

                <Link className={styles.logo} href="/">
                    Eduardo.dev
                </Link>

                <section
                    className={clsx(styles['networks-and-controls-container'], styles.desktop)}
                >
                    {NetworkAndControlElements}
                </section>
            </div>
        </header>
    );
};
