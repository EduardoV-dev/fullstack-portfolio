import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ThemeProvider enableSystem attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
);

export default appWithTranslation(App);
