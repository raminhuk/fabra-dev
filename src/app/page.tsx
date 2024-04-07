import AboutMe from '@/components/About'
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Title from '@/components/Title'

export default function Home() {
    return (
        <Layout>
            <Banner/>
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
                        description="Crafting visually stunning and functional experiences - I'm a Frontend Developer passionate about turning ideas into digital reality"
                    />
                    <AboutMe />
                </div>
            </div>
        </Layout>
    
    )
}
