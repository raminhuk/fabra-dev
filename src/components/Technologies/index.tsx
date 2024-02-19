import Title from '../Title'
import { additionalTechData, technologiesData } from './TechData'

export default function Technologies() {
    return <>
        <div>
            <div className="flex flex-col gap-16 max-xs:gap-12">
                {technologiesData?.map((item, i) => (
                    <div key={i}>
                        <div className="flex items-center justify-between gap-5 pb-3">
                            <h3 className="text-2xl font-semibold max-lg:text-base">{item.title}</h3>
                            <p className="max-xs:text-xs">{item?.score >= 90 ? 'Advanced' : item?.score >= 60 && item?.score < 90 ? 'Intermediate' : item?.score > 40 && item?.score < 60 ? 'Regular' : 'Beginner'}</p>
                        </div>
                        <div className="w-full rounded-full bg-back-dark">
                            <span className="block h-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50 max-lg:h-3" style={{width: item.score+'%'}}></span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-20">
                <Title 
                    title="Additional technologies and skills" 
                    description="Discover my additional skills and expertise, elevating projects to new heights of quality and efficiency."
                />

                <div className="grid grid-cols-4 gap-16 max-lg:grid-cols-3 max-lg:gap-10 max-sm:grid-cols-2 max-sm:gap-5">
                    {additionalTechData?.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50" ></span>
                            <h4 className="text-2xl font-semibold max-lg:text-lg">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}