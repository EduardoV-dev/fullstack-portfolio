import clsx from 'clsx';
import { useTheme } from 'next-themes';

import { ClientOnly } from '@/components/client-only';

import ThemeTogglerIcon from '../../assets/svg/theme-toggler.svg';

import styles from './theme-toggler.module.css';

export const Toggler = (): JSX.Element => {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme: string | undefined = theme === 'system' ? systemTheme : theme;

    const onThemeChange = () =>
        currentTheme && setTheme(currentTheme === 'light' ? 'dark' : 'light');

    /* === React Render === */

    const togglerClasses: string = clsx(styles['theme-toggle'], {
        [styles.dark]: currentTheme === 'dark',
    });

    return (
        <button className={togglerClasses} onClick={onThemeChange} type="button">
            <ThemeTogglerIcon className="icon-size" />
        </button>
    );
};

/**
 * Theme Toggle for setting up the prefered theme by the user, theme provider uses system theme by default,
 * if light theme is on, on click, will toggle to dark theme, in contrary; when dark theme is on, on click,
 * will toggle to light theme.
 */
export const ThemeToggler = (): JSX.Element => (
    <ClientOnly>
        <Toggler />
    </ClientOnly>
);
