import Link from 'next/link'

export default function Logo(){
    return <>
        <Link className="flex py-4 max-lg:p-4" href="/">
            <div className="flex items-end gap-2 bg-gradient-custom bg-clip-text text-transparent">
                <span className="pb-1 font-sans text-3xl font-bold tracking-tighter max-lg:hidden">{`</>`}</span>
                <span className="text-3xl font-bold">fabra.dev</span>
            </div>
        </Link>
    </>
}