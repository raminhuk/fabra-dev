import { Metadata } from 'next'

import Technologies from '@/components/Technologies'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'Technologies - Fabio J. Raminhuk',
    description: 'Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions',
}

export default function TechnologiesPage() {
    return (
        <div className="w-full">
            <div className="container">
                <div className="my-16">
                    <Title
                        type="h1" 
                        title="Technologies" 
                        description="Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions"
                    />
                    <div className="tracking-wide text-coldGrey max-xs:text-sm">
                        <Technologies />
                    </div>
                </div>
            </div>
        </div>
    )
}
