/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            primary: 'var(--color-primary)',
            'text-color': 'var(--color-text)',
            'main-bg': 'var(--bg-color)',
            'main-bg-lighter': 'var(--bg-color-lighter)',
        },
        fontFamily: {
            poppins: ['poppins', 'Arial', 'sans-serif'],
            pixeloidSans: ['pixeloid-sans', 'Arial', 'sans-serif'],
        },
        screens: {
            sm: '576px',
            // The rest of the screen sizes will be the default values provided by tailwind
            // for more information, read https://tailwindcss.com/docs/responsive-design
        },
    },
    plugins: [],
};
