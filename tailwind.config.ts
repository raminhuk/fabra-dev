import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'back': '#0F1624',
                'back-dark': '#0c121e',
                'neon': '#00B2FF',
                'coldGrey': '#929EB0',
                'customPurple': '#945dd6',
                'customIndigo': '#6978d1',
                'customTeal': '#13adc7',
            },
            backgroundImage: {
                'gradient-custom': 'linear-gradient(90deg, rgba(148,93,214,1) 0%, rgba(105,120,209,1) 55%, rgba(19,173,199,1) 100%)',
            },
            keyframes: {
                'zoom-in-zoom-out': {
                    '0%': { transform: 'scale(1, 1)' },
                    '50%': { transform: 'scale(1.1, 1.1)' },
                    '100%': { transform: 'scale(1, 1)' },
                },
                'zoom-out-zoom-in': {
                    '0%': { transform: 'scale(1, 1)' },
                    '50%': { transform: 'scale(0.8, 0.8)' },
                    '100%': { transform: 'scale(1, 1)' },
                },
            },
            animation: {
                'zoom-in-zoom-out': 'zoom-in-zoom-out 2.5s ease-in-out infinite',
                'zoom-out-zoom-in': 'zoom-out-zoom-in 2.5s ease-in-out infinite',
            },
            screens: {
                xs: '480px',
            }
        },
        container: {
            center: true,
            padding: '20px',
            screens: {
                xl: '1300px',
            }
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}
export default config
