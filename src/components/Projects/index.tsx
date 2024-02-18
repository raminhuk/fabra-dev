import Image from 'next/image'
import Link from 'next/link'

import Title from '../Title'
import { projectsData } from './projectsData'

export default function Projects() {
    return <div className="max-lg:px-8 max-xs:px-6">
        <Title 
            title="Projects" 
            description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
        />

        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-xs:gap-6">
            {projectsData?.map((item, i) => (
                <div key={i} className="rounded-lg bg-gradient-custom p-[1px]">
                    <div className="min-h-[500px] rounded-lg bg-back p-8 max-xl:p-6 max-xs:p-4">
                        <figure>
                            <Image className="rounded" src={item.image}  width={1600} height={900} alt={item.title}/>
                        </figure>
                        <div className="min-h-72 pb-2 pt-6">
                            <h3 className="pb-3 text-2xl font-semibold max-xl:text-xl">{item.title}</h3>
                            <p className="text-sm text-coldGrey">{item.description}</p>
                            <div className="flex flex-wrap gap-2 py-4">
                                {item.tech.map((tech, i) => (
                                    <span key={`tech-${i}`} className="rounded-full bg-slate-800 px-[11px] py-1 text-xs">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between gap-4">
                            <Link className="flex-1 grow-[0.8] rounded-full bg-gradient-custom px-2 py-4 text-center text-sm shadow-md shadow-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/50 max-xs:p-3 max-xs:text-xs" target="_blank" href={item.linkPreview}>Live preview</Link>
                            <Link className="flex-1 rounded-full border border-white px-2 py-4 text-center text-sm transition-all duration-200 ease-in hover:bg-white hover:text-back max-xs:p-3 max-xs:text-xs" target="_blank" href={item.linkGithub}>Check on GitHub</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}