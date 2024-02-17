import Title from '../Title'
import { additionalTechData, technologiesData } from './TechData'

export default function Technologies() {
    return <>
        <div className="mt-36">
            <Title 
                title="Technologies" 
                description="Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions"
            />

            <div className="flex flex-col gap-16">
                {technologiesData?.map((item, i) => (
                    <div key={i}>
                        <div className="flex items-center justify-between pb-3">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p>{item?.score >= 90 ? 'Advanced' : item?.score >= 60 && item?.score < 90 ? 'Intermediate' : item?.score > 40 && item?.score < 60 ? 'Regular' : 'Beginner'}</p>
                        </div>
                        <div className="w-full rounded-full bg-back-dark">

                            <span className="block h-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50" style={{width: item.score+'%'}}></span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-36">
                <Title 
                    title="Additional technologies and skills" 
                    description="Discover my additional skills and expertise, elevating projects to new heights of quality and efficiency."
                />

                <div className="grid grid-cols-4 gap-16 max-lg:grid-cols-3 max-lg:gap-10 max-sm:grid-cols-2 max-sm:gap-5">
                    {additionalTechData?.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50" ></span>
                            <h4 className="text-2xl font-semibold">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}