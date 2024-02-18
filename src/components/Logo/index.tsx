import Link from 'next/link'

export default function Logo(){
    return <>
        <Link className="flex max-lg:px-6 max-lg:pb-5 max-lg:pt-3 max-xs:px-3" href="/">
            <div className="flex items-end gap-2 bg-gradient-custom bg-clip-text text-transparent">
                <span className="font-sans text-3xl font-bold tracking-tighter">{`</>`}</span>
                <span className="text-3xl font-bold leading-[30px]">fabra.dev</span>
            </div>
        </Link>
    </>
}