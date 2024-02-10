import Banner from '@/components/Banner'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <>
            <Banner/>

            <div className="container">
                <Projects />
            </div>
        </>
    
    )
}
