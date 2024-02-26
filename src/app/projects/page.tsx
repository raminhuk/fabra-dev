import { Metadata } from 'next'

import Projects from '@/components/Projects'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'Projects - Fabio J. Raminhuk',
    description: 'Meet Fabio J. Raminhuk, a passionate frontend developer with expertise in various technologies. Learn about his education, skills, and dedication to staying updated with the latest trends in the industry',
    openGraph: {
        title: 'Projects - Fabio J. Raminhuk',
        description: 'Meet Fabio J. Raminhuk, a passionate frontend developer with expertise in various technologies. Learn about his education, skills, and dedication to staying updated with the latest trends in the industry',
    },
}

export default function ProjectsPage() {
    return (
        <div className="w-full">
            <div className="container">
                <div className="my-16 max-lg:my-6">
                    <Title
                        type="h1"
                        title="Projects" 
                        description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
                    />
                    <Projects />
                </div>
            </div>
        </div>
    )
}
