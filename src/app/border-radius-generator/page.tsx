import { Metadata } from 'next'

import BorderRadiusGenerator from '@/components/Tools/BorderRadiusGenerator'

export const metadata: Metadata = {
    title: 'Border Radius Generator - Fabio J. Raminhuk',
    description: 'Welcome to our Border-Radius CSS Generator, designed to streamline the process of creating elegant border-radius CSS declarations for your website effortlessly. Packed with numerous customizable options, this tool showcases instant results, empowering you to achieve the perfect look for your website&apos;s elements. And if you&apos;re seeking to elevate your design further, don&apos;t forget to explore our Font Generator for adding stylish fonts to your project.',
    openGraph: {
        title: 'Border Radius Generator - Fabio J. Raminhuk',
        description: 'Welcome to our Border-Radius CSS Generator, designed to streamline the process of creating elegant border-radius CSS declarations for your website effortlessly. Packed with numerous customizable options, this tool showcases instant results, empowering you to achieve the perfect look for your website&apos;s elements. And if you&apos;re seeking to elevate your design further, don&apos;t forget to explore our Font Generator for adding stylish fonts to your project.',
    },
}

export default function BorderRadiusGeneratorPage() {
    return (
        <div className="w-full">
            <BorderRadiusGenerator />
        </div>
    )
}
