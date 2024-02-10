import Image from 'next/image'
import Link from 'next/link'

import Title from '../Title'
import { projectsData } from './projectsData'

export default function Projects() {
    return <div>
        <Title title="Projects" description="Exploring Our Creations: A Selection of Inspiring and Innovative Projects"/>

        <div className="grid grid-cols-3 gap-12">
            {projectsData?.map((item, i) => (
                <div key={i} className="rounded-lg bg-gradient-custom p-[1px]">
                    <div className="min-h-[500px] rounded-lg bg-back p-8">
                        <figure>
                            <Image className="rounded" src={item.image}  width={1322} height={907} alt={item.title}/>
                        </figure>
                        <div className="py-6">
                            <h3 className="pb-3 text-xl font-semibold">{item.title}</h3>
                            <p className="min-h-32 text-sm text-coldGrey">{item.description}</p>
                        </div>

                        <div className="flex justify-between">
                            <Link className="rounded-full bg-gradient-custom px-6 py-4 text-sm shadow-lg shadow-blue-500/50" target="_blank" href={item.linkPreview}>Live preview</Link>
                            <Link className="rounded-full border border-white px-6 py-4 text-sm" target="_blank" href={item.linkGithub}>Check on GitHub</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}