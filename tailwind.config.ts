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
                back: '#0F1624',
                neon: '#00B2FF',
                coldGrey: '#929EB0',
                customPurple: 'rgba(148,93,214,1)',
                customIndigo: 'rgba(105,120,209,1)',
                customTeal: 'rgba(19,173,199,1)',
            },
            backgroundImage: {
                'gradient-custom': 'linear-gradient(90deg, rgba(148,93,214,1) 0%, rgba(105,120,209,1) 70%, rgba(19,173,199,1) 100%)',
            },
        },
        container: {
            center: true,
            screens: {
                xl: '1280px'
            }
        },
    },
    plugins: [],
}
export default config
