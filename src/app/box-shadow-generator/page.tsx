import { Metadata } from 'next'

import BoxShadowGenerator from '@/components/Tools/BoxShadowGenerator'

export const metadata: Metadata = {
    title: 'Box Shadow Generator - Fabra.dev',
    description: 'Welcome to our Box Shadow CSS Generator, a powerful tool crafted to simplify the process of creating stunning box shadow effects for your website effortlessly. With a plethora of customizable options, this intuitive tool delivers instant previews, enabling you to perfect the shadows on your website&apos;s elements with ease. Looking to enhance your design further? Don&apos;t miss out on exploring our Font Generator to effortlessly incorporate stylish fonts into your project.',
    openGraph: {
        title: 'Box Shadow Generator - Fabra.dev',
        description: 'Welcome to our Box Shadow CSS Generator, a powerful tool crafted to simplify the process of creating stunning box shadow effects for your website effortlessly. With a plethora of customizable options, this intuitive tool delivers instant previews, enabling you to perfect the shadows on your website&apos;s elements with ease. Looking to enhance your design further? Don&apos;t miss out on exploring our Font Generator to effortlessly incorporate stylish fonts into your project.',
    },
}

export default function BoxShadowGeneratorPage() {
    return (
        <div className="w-full">
            <BoxShadowGenerator />
        </div>
    )
}
