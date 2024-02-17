import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({ 
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function Logo(){
    return <>
        <Link className="flex max-lg:px-6 max-lg:pb-5 max-lg:pt-3" href="/">
            <div className="flex items-end gap-2 bg-gradient-custom bg-clip-text text-transparent">
                <span className={`${roboto.className} text-4xl font-bold`}>{`</>`}</span>
                <span className="text-3xl font-bold">fabra.dev</span>
            </div>
        </Link>
    </>
}