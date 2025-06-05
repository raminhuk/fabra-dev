import { Metadata } from 'next'

import Layout from '@/components/Layout'
import Projects from '@/components/Projects'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'Projects - Fabio J. Raminhuk',
    description: 'Explore the work of Fabio J. Raminhuk, a passionate Fullstack Developer with experience across a wide range of technologies. Discover his projects, skills, and commitment to staying up to date with the latest in software development.',
    openGraph: {
        title: 'Projects - Fabio J. Raminhuk',
        description: 'Explore the work of Fabio J. Raminhuk, a passionate Fullstack Developer with experience across a wide range of technologies. Discover his projects, skills, and commitment to staying up to date with the latest in software development.'
    },
}

export default function ProjectsPage() {
    return (
        <Layout>
            <div className="w-full">
                <div className="container">
                    <div className="my-12 max-lg:my-4">
                        <Title
                            type="h1"
                            title="Projects"
                            description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
                        />
                        <Projects />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
