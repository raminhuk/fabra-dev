import './globals.css'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const poppins = Poppins({ 
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    manifest: 'https://fabra.dev/manifest.json',
    title: 'Fabio J. Raminhuk - Frontend Developer',
    description: 'Turning Ideas into Digital Reality: Fabio J.R, a Frontend Developer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences',
    keywords: ['Frontend Developer', 'Web Developer', 'HTML', 'CSS',
        'JavaScript', 'React', 'Vue.js', 'Angular', 'UI/UX Design', 'Responsiveness', 'Web Accessibility', 'SEO', 'Web Performance', 'Frontend Development', 'Programming', 'Git', 'GitHub', 'Online Portfolio', 'Development Blog'
    ],
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon.ico',
                href: '/favicon.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon.ico',
                href: '/favicon.ico',
            },
        ],
    },
    creator: 'Fabio J Raminhuk',
    openGraph: {
        type: 'website',
        url: 'fabra.dev',
        title: 'Fabio J. Raminhuk - Frontend Developer',
        description: 'Turning Ideas into Digital Reality: Fabio J.R, a Frontend Developer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences',
        siteName: 'My Website',
        images: [{
            url: 'https://raw.githubusercontent.com/raminhuk/fabra-dev/master/public/images/frontend-developer.png',
        }],
    },
    twitter: {
        site: '@fabio_rmk',
    },
    other: {
        'google-adsense-account': 'ca-pub-4699585166403980',
    },
}

export const viewport: Viewport = {
    themeColor: '#0c121e'
}

export const GA_TRACKING_ID: string = 'G-CSXQC9RNJD'
export const GA_TAGMANAGER_ID: string = 'GTM-NSVBBRH9'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699585166403980"
                crossOrigin="anonymous" />
            <Script async src="https://cdn.ampproject.org/v0.js"/>
            
            <body className={poppins.className}>
                <Header />
                {children}
                <Footer />
            </body>
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
            <GoogleTagManager gtmId={GA_TAGMANAGER_ID} />
        </html>
    )
}
