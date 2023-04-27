import { useTheme } from 'next-themes';

import VercelIcon from '../../public/vercel.svg';

import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <h1 className="text-black text-xl shadow-black dark:text-white dark:text-5xl dark:shadow-white">
                This is the home page
            </h1>

            <VercelIcon width={200} />

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} type="button">
                Toggle Theme
            </button>
        </div>
    );
};

export default Home;
