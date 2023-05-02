/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            poppins: ['poppins', 'Arial', 'sans-serif'],
            pixeloidSans: ['pixeloid-sans', 'Arial', 'sans-serif'],
        },
        extend: {
            boxShadow: {
                DEFAULT: '0px 1px 2px 1px rgba(0, 178, 195, 0.2)', // Primary color with 0.2 opacity
            },
            colors: {
                'main-bg': 'var(--bg-color)',
                'main-bg-lighter': 'var(--bg-color-lighter)',
                'text-color': 'var(--color-text)',
                black: 'var(--color-black)',
                green: 'var(--color-green)',
                primary: 'var(--color-primary)',
                red: 'var(--color-red)',
                white: 'var(--color-white)',
            },
            screens: {
                sm: '576px',
                // The rest of the screen sizes will be the default values provided by tailwind
                // for more information, read https://tailwindcss.com/docs/responsive-design
            },
            borderRadius: {
                sm: '5px',
            },
        },
    },
    plugins: [],
};
