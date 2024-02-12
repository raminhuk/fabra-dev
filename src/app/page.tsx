import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'

export default function Home() {
    return (
        <>
            <Banner/>

            <div className="container">
                <Projects />
            </div>

            <div className="container">
                <Technologies />
            </div>
        </>
    
    )
}
