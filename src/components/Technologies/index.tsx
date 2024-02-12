import Title from '../Title'
import { technologiesData } from './projectsData'

export default function Technologies() {
    return <div className="mt-36">
        <Title 
            title="Technologies" 
            description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
        />

        <div className="flex flex-col gap-10">
            {technologiesData?.map((item, i) => (
                <div key={i} className="rounded-lg bg-gradient-custom p-[1px]">
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    </div>
}