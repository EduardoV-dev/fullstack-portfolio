import { useTheme } from 'next-themes';

import ThemeToggleIcon from '@/assets/svg/theme-toggler.svg';

import styles from './theme-toggle.module.css';

/**
 * Theme Toggle for setting up the prefered theme by the user, theme provider uses system theme by default,
 * if light theme is on, on click, will toggle to dark theme, in contrary; when dark theme is on, on click,
 * will toggle to light theme.
 */
export const ThemeToggle = (): JSX.Element => {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme: string | undefined = theme === 'system' ? systemTheme : theme;

    const onThemeChange = () =>
        currentTheme && setTheme(currentTheme === 'light' ? 'dark' : 'light');

    return (
        <button className={styles['theme-toggle']} onClick={onThemeChange} type="button">
            <ThemeToggleIcon className="icon-size" />
        </button>
    );
};
