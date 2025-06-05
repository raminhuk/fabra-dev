import AboutMe from '@/components/About'
import Banner from '@/components/Banner'
import { ContactForm } from '@/components/ContactForm'
import Layout from '@/components/Layout'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Title from '@/components/Title'

export default function Home() {
    return (
        <Layout>
            <Banner />
            <div className="container">
                <div className="py-16 max-lg:py-10">
                    <Title
                        title="Projects"
                        description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
                    />
                    <Projects />
                </div>
                <div className="py-16 max-lg:py-10">
                    <Title
                        title="Technologies"
                        description="Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions"
                    />
                    <Technologies />
                </div>
                <div className="py-16 max-lg:py-10">
                    <Title
                        title="About me"
                        description="Building complete, scalable, and user-focused solutions – I'm a Fullstack Developer turning ideas into robust digital products"
                    />
                    <AboutMe />
                </div>
                <div className="flex items-center justify-center py-16 max-lg:py-10">
                    <div className="max-w-[600px]" >
                        <Title
                            title="Contact"
                            description="Get in Touch: Let's Collaborate and Create Something Amazing Together"
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>

    )
}
