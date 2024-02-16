import Link from 'next/link'

import Logo from '../Logo'
import Social from '../Social'

export default function Footer() {
    return (
        <footer className="mt-20 bg-back-dark">
            <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <Logo />

                    <ul className="flex flex-wrap items-center text-sm font-medium text-coldGrey">
                        <li className="flex">
                            <Link href="/about" className="p-2 hover:text-coldGrey lg:p-6">About</Link>
                        </li>
                        <li className="flex">
                            <Link href="/privacy" className="p-2 hover:text-coldGrey lg:p-6">Privacy Policy</Link>
                        </li>
                        <li className="flex">
                            <Link href="/faq" className="p-2 hover:text-coldGrey lg:p-6">Faq</Link>
                        </li>
                        <li className="flex">
                            <Link href="/contact" className="p-2 hover:text-coldGrey lg:p-6">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                </div>
                <hr className="my-6 border-back lg:mx-auto" />
                <div className="flex justify-center py-4">
                    <Social />
                </div>
                <span className="block text-center text-sm text-coldGrey">© 2024 <Link href="/" className="hover:underline">Fabio J Raminhuk</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

