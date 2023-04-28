import { ThemeProvider } from 'next-themes';

import { THEME_LS_KEY } from '@/config/theme';

export const AppProviders = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <ThemeProvider storageKey={THEME_LS_KEY} enableSystem attribute="class">
        {children}
    </ThemeProvider>
);