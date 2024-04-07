import Image from 'next/image'
import Link from 'next/link'

export default function WbStoriesList() {
    return (
        <div className="grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
            <Link className="group/item"  href={`/web-stories/key-features-of-next-js`}>
                <div className="overflow-hidden rounded-xl bg-back-dark">
                    <figure>
                        <Image className="h-[400px] w-full object-cover" src="/assets/key-features-of-next-js.jpg" alt="Key Features of Next.js" width={1280} height={720} quality={70}/>
                    </figure>
                  
                    <div className="flex flex-col gap-3 px-6 py-5">
                        <h2 className="flex items-center bg-gray-200 bg-clip-text text-xl font-bold tracking-wide text-transparent transition-all group-hover/item:bg-gradient-custom max-sm:min-h-0 max-sm:text-lg max-sm:tracking-tight">Key Features of Next.js</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}