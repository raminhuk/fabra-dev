import Image from 'next/image'
import Link from 'next/link'

import Title from '../Title'
import { projectsData } from './projectsData'

export default function Projects() {
    return <div>
        <Title 
            title="Projects" 
            description="Discover my creative and innovative projects, spanning design to development, and see how I can add value to your next endeavor"
        />

        <div className="grid grid-cols-3 gap-12">
            {projectsData?.map((item, i) => (
                <div key={i} className="rounded-lg bg-gradient-custom p-[1px]">
                    <div className="min-h-[500px] rounded-lg bg-back p-8">
                        <figure>
                            <Image className="rounded" src={item.image}  width={1600} height={900} alt={item.title}/>
                        </figure>
                        <div className="py-6">
                            <h3 className="pb-3 text-2xl font-semibold">{item.title}</h3>
                            <div className="flex flex-wrap gap-2 pb-3">
                                {item.tech.map((tech, i) => (
                                    <span key={`tech-${i}`} className="rounded-full bg-slate-800 px-3 py-1 text-xs">{tech}</span>
                                ))}
                            </div>
                            <p className="min-h-32 text-sm text-coldGrey">{item.description}</p>
                        </div>

                        <div className="flex justify-between">
                            <Link className="rounded-full bg-gradient-custom px-6 py-4 text-sm shadow-lg shadow-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/50" target="_blank" href={item.linkPreview}>Live preview</Link>
                            <Link className="rounded-full border border-white px-6 py-4 text-sm transition-all duration-200 ease-in hover:bg-white hover:text-back" target="_blank" href={item.linkGithub}>Check on GitHub</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}