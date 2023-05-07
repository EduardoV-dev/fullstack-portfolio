import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => (
    <Html lang="en">
        <Head />
        <body>
            <Main />
            <div id="portal" />
            <NextScript />
        </body>
    </Html>
);

export default Document;
