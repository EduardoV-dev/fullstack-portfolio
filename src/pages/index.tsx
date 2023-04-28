import { useTheme } from 'next-themes';

import { Layout } from '@/components/layout';

import VercelIcon from '../../public/vercel.svg';

import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
    const { theme, setTheme } = useTheme();

    return (
        <Layout>
            <h1 className="text-text-color text-xl shadow-black">This is the home page</h1>

            <VercelIcon width={200} />

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} type="button">
                Toggle Theme
            </button>
        </Layout>
    );
};

export default Home;
