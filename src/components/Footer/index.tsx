import Link from 'next/link'

import menuData from '../Header/menuData'
import Logo from '../Logo'
import Social from '../Social'

export default function Footer() {
    return (
        <footer className="mt-20 bg-back-dark">
            <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <Logo />

                    <ul className="flex flex-wrap items-center text-sm font-medium text-coldGrey max-lg:justify-center">
                        {menuData.map((menuItem, index) => (
                            <li key={index} className="flex">
                                <Link href={menuItem.path} className="p-2 hover:text-customIndigo lg:p-6">{menuItem.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                </div>
                <hr className="my-6 border-back lg:mx-auto" />
                <div className="flex justify-center py-4">
                    <Social />
                </div>
                <span className="block text-center text-sm text-coldGrey">© 2024 Fabio J Raminhuk All Rights Reserved.</span>
            </div>
        </footer>
    )
}

