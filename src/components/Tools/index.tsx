import Link from 'next/link'

import { toolsData } from './toolsData'



export default function Tools() {
    function slugify(title: string): string {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    }
    
    return <div>
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1 max-xs:gap-6">
            {toolsData?.map((tool) => (
                <Link className="group/item" key={slugify(tool.title)} href={`/${slugify(tool.title)}`}>
                    <div className="overflow-hidden rounded-xl bg-back-dark">
                        <div className="flex flex-col gap-3 p-8">
                            <h2 className="flex items-center bg-gradient-custom bg-clip-text text-2xl font-bold tracking-wide text-transparent transition-all max-sm:min-h-0 max-sm:text-lg max-sm:tracking-tight">{tool.title}</h2>
                            <span className="mb-3 line-clamp-5 min-h-[60px] overflow-hidden text-sm text-coldGrey max-md:line-clamp-4 max-md:min-h-0 ">{tool.description}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}