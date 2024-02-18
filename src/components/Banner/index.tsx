import Image from 'next/image'
import Link from 'next/link'

export default function Banner(){
    return <>
        <div className="flex h-screen w-full items-center max-lg:h-[calc(100vh-72px)] max-lg:min-h-[620px] max-lg:items-start">
            <div className="container">
                <div className="group relative w-full max-lg:mb-20 max-lg:px-10 max-xs:px-6">
                    <div className="relative z-40 flex flex-col gap-10 max-lg:my-10 max-lg:gap-5">
                        <h1 className="flex flex-col items-start gap-4 text-6xl font-semibold max-lg:gap-2 max-lg:text-4xl max-xs:gap-2 max-xs:text-3xl">
                            <span className="bg-gradient-custom bg-clip-text text-transparent">Hello, I&apos;m Fabio J.R,</span>
                            <span>Frontend developer</span>
                        </h1>
                        <p className="max-w-2xl tracking-wide text-coldGrey max-xs:text-sm">Turning Ideas into Digital Reality: Fabio J.R, a Frontend Developer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences.</p>
                        <div className="flex max-lg:hidden">
                            <Link href="/" className="rounded-full bg-blue-500 bg-gradient-custom px-8 py-4 text-sm shadow-lg shadow-blue-500/50">Download CV</Link>
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 max-lg:relative max-lg:flex max-lg:justify-center">
                        <div className="absolute -top-16 right-24 z-10 size-80 overflow-hidden rounded-full bg-gradient-custom p-0.5 shadow-xl shadow-blue-500/50 max-lg:relative max-lg:right-0 max-lg:top-0 max-lg:size-64">
                            <Image priority className="h-auto w-full max-w-xs rounded-full" src="/images/fabio-developer.jpg" width="320" height="320" alt="Fabio Junior Raminhuk - Frontend Developer" quality={100}/>
                        </div>

                        <div className="absolute -top-5 right-48 size-[580px] animate-zoom-in-zoom-out rounded-full bg-gradient-custom p-[1px] max-lg:right-auto max-lg:top-0 max-lg:mr-[200px] max-lg:size-[350px] max-xs:size-[320px]">
                            <div className="size-full rounded-full bg-back"></div>
                        </div>

                        <div className="absolute right-0 top-32 size-56 animate-zoom-out-zoom-in rounded-full bg-gradient-custom shadow-lg shadow-blue-500/50 max-lg:right-auto max-lg:top-40 max-lg:ml-[200px] max-lg:size-40 max-xs:ml-[120px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}