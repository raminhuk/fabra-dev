import Image from 'next/image'
import Link from 'next/link'

export default function Banner(){
    return <>
        <div className="flex h-screen w-full items-center">
            <div className="container">
                <div className="group relative w-full">
                    <div className="relative z-40 flex flex-col gap-10">
                        <h1 className="flex flex-col items-start gap-4 text-6xl font-semibold">
                            <span className="bg-gradient-custom bg-clip-text text-transparent">Hello, I&apos;m Fabio J.R,</span>
                            <span>Frontend developer</span>
                        </h1>
                        <p className="max-w-2xl tracking-wide text-coldGrey">Turning Ideas into Digital Reality: Fabio J.R, a Frontend Developer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences.</p>
                        <div className="flex">
                            <Link href="/" className="rounded-full bg-blue-500 bg-gradient-custom px-8 py-4 text-sm shadow-lg shadow-blue-500/50">Download CV</Link>
                        </div>
                    </div>

                    <div className="absolute right-0 top-0">
                        <div className="absolute -top-16 right-24 z-10 size-80 overflow-hidden rounded-full bg-gradient-custom p-0.5 shadow-lg shadow-blue-500/50">
                            <Image className="h-auto w-full max-w-xs rounded-full" src="/images/fabio-developer.jpg" width="320" height="320" alt="Fabio Junior Raminhuk - Frontend Developer" quality={100}/>
                        </div>

                        <div className="absolute -top-5 right-48 size-[580px] animate-zoom-in-zoom-out rounded-full bg-gradient-custom  p-[1px]">
                            <div className="size-full rounded-full bg-back"></div>
                        </div>

                        <div className="absolute right-0 top-32 size-56 animate-zoom-out-zoom-in rounded-full bg-gradient-custom shadow-lg shadow-blue-500/50">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}