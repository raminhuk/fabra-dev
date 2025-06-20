import Image from 'next/image'
import Link from 'next/link'

import { projectsData } from './projectsData'


export default function Projects() {
    return <div>
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1 max-xs:gap-6">
            {projectsData?.map((item, i) => (
                <div key={i} className="rounded-lg bg-gradient-custom p-[1px]">
                    <div className=" rounded-lg bg-back p-8 max-lg:p-6 max-xs:p-4">
                        <figure>
                            <Image className="rounded" src={item.image} width={1600} height={900} alt={item.title} />
                        </figure>
                        <div className="min-h-72 pb-2 pt-6 max-sm:min-h-[10px] max-sm:pt-4">
                            <h3 className="pb-3 text-2xl font-semibold max-lg:text-xl">{item.title}</h3>
                            <p className="text-sm text-coldGrey max-lg:text-xs">{item.description}</p>
                            <div className="flex flex-wrap gap-2 py-4">
                                {item.tech.map((tech, i) => (
                                    <span key={`tech-${i}`} className="rounded-full bg-slate-800 px-[11px] py-1 text-xs max-lg:text-[10px]">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between gap-4 max-lg:gap-2">
                            {item.linkPreview && (
                                <Link className="flex-1 rounded-full bg-gradient-custom px-2 py-4 text-center text-sm shadow-md shadow-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/50 max-lg:p-3 max-lg:text-xs" target="_blank" href={item.linkPreview}>Live preview</Link>
                            )}
                            {item.linkGithub && (
                                <Link className="flex-1 rounded-full border border-white px-2 py-4 text-center text-sm transition-all duration-200 ease-in hover:bg-white hover:text-back max-lg:p-3 max-lg:text-xs" target="_blank" href={item.linkGithub}>Check on GitHub</Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}