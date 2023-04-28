import { appWithTranslation } from 'next-i18next';

import { AppProviders } from '@/providers/app';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <AppProviders>
        <Component {...pageProps} />
    </AppProviders>
);

export default appWithTranslation(App);
