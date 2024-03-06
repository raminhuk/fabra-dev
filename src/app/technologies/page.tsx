import { Metadata } from 'next'

import Technologies from '@/components/Technologies'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'Technologies - Fabio J. Raminhuk',
    description: 'Explore dynamic and responsive projects crafted with React, Next.js, HTML, CSS, JavaScript, TypeScript, PostgreSQL, GraphQL, and more. Optimized for SEO, with integrations for Wordpress, Google Ads, and APIs',
    openGraph: {
        title: 'Technologies - Fabio J. Raminhuk',
        description: 'Explore dynamic and responsive projects crafted with React, Next.js, HTML, CSS, JavaScript, TypeScript, PostgreSQL, GraphQL, and more. Optimized for SEO, with integrations for Wordpress, Google Ads, and APIs',
    },
}

export default function TechnologiesPage() {
    return (
        <div className="w-full">
            <div className="container">
                <div className="my-12 max-lg:my-4">
                    <Title
                        type="h1" 
                        title="Technologies" 
                        description="Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions"
                    />
                    <div>
                        <Technologies />
                    </div>
                </div>
            </div>
        </div>
    )
}
