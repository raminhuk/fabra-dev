'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import CookieBanner from '../BannerCookies'
import Logo from '../Logo'
import Social from '../Social'
import menuData from './menuData'

export default function Header() {
    const [position, setPosition] = useState({'width': '0px','left': '0px'})
    const line = useRef<HTMLSpanElement | null>(null)
    const pathname = usePathname()
    
    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = useState(false)
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen)
        if (!navbarOpen) {
            document.body.classList.add('max-lg:overflow-hidden')
        } else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }

    // Sticky Navbar
    const [sticky, setSticky] = useState(false)
    const handleStickyNavbar = () => {
        if (window.scrollY >= 120) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleStickyNavbar)
    })

    useEffect(() => {
        const lastSlashIndex = pathname.lastIndexOf('/')
        const result = lastSlashIndex !== -1 && lastSlashIndex !== 0 ? pathname.substring(0, lastSlashIndex) : pathname

        const linkInitial = document.querySelector(`nav [href='${result}']`) as HTMLAnchorElement
        
        if (!linkInitial) return
        const liNav = linkInitial.closest('li')
        if (line.current && linkInitial) {
            line.current.style.width = `${liNav?.clientWidth}px`
            line.current.style.transform = `translateX(${liNav?.offsetLeft}px)`
            setPosition(
                {
                    'width': liNav?.clientWidth+'px',
                    'left': liNav?.offsetLeft+'px'
                }
            )
        }
       
    }, [pathname])

    const handleMouseOver = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const linkTarget = event.currentTarget
        if (line.current) {
            line.current.style.width = `${linkTarget.clientWidth}px`
            line.current.style.transform = `translateX(${linkTarget.offsetLeft}px)`
        }
    }

    const handleMouseOut = () => {
        if (line.current) {
            line.current.style.width = `${position.width}`
            line.current.style.transform = `translateX(${position.left})`
        }
    }

    // submenu handler
    // const [openIndex, setOpenIndex] = useState(-1)
    // const handleSubmenu = (index: number) => {
    //     if (openIndex === index) {
    //         setOpenIndex(-1)
    //     } else {
    //         setOpenIndex(index)
    //     }
    // }

    return (
        <>
            <CookieBanner />
            <header
                className={`w-full ${(sticky && pathname === '/')
                    ? 'fixed z-[9999] bg-back-dark !bg-opacity-80 backdrop-blur-sm transition max-lg:relative'
                    : `${pathname === '/' ? 'absolute' : 'relative bg-back-dark'} max-lg:relative max-lg:bg-back-dark`
                }`}
            >
                <div className="lg:container">
                    <div className="relative flex items-center justify-between">
                        <div className="max-lg:order-2">
                            <Logo />
                        </div>
                        <div className="flex items-center justify-between px-4 max-lg:px-0">
                            <div>
                                <button
                                    onClick={navbarToggleHandler}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="relative block rounded-lg px-6 py-5 max-lg:z-[9999] lg:hidden"
                                >
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[27px] bg-gray-50 transition-all duration-300 ${navbarOpen ? ' top-[8px] rotate-45' : ' '
                                        }`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[27px] bg-gray-50 transition-all duration-300 ${navbarOpen ? 'opacity-0 ' : ' '
                                        }`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[27px] bg-gray-50 transition-all duration-300 ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                                        }`}
                                    />
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`visible w-auto  max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:z-[999] max-lg:flex max-lg:h-screen max-lg:w-full max-lg:bg-back-dark max-lg:!bg-opacity-85 max-lg:p-0 max-lg:backdrop-blur-sm ${navbarOpen
                                        ? 'opacity-100'
                                        : 'max-lg:invisible max-lg:opacity-0'
                                    }`}
                                >
                                    <ul className={`relative flex max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:opacity-0 max-lg:transition-all max-lg:duration-500 ${navbarOpen ? 'max-lg:scale-100 max-lg:opacity-100' : 'max-lg:scale-50'}`}>
                                        <span
                                            ref={line}
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-custom transition-all duration-500 max-lg:hidden`}
                                        >
                                        </span>
                                        {menuData.map((menuItem, index) => (
                                            !menuItem.newTab && (
                                                <li 
                                                    onMouseOver={handleMouseOver}
                                                    onMouseOut={handleMouseOut}
                                                    key={index} className="relative max-lg:flex max-lg:w-full">
                                                    {menuItem.path ? (
                                                        <Link
                                                            onClick={navbarToggleHandler}
                                                            href={menuItem.path}
                                                            className="relative flex px-8 py-10 text-base max-xl:px-4 max-xl:py-8 max-lg:w-full max-lg:justify-center max-lg:text-xl max-lg:font-semibold max-sm:p-5"
                                                        >
                                                            {menuItem.title}
                                                        </Link>
                                                    ) : (
                                                        <>
                                                            {/* <p
                                                            onClick={() => handleSubmenu(index)}
                                                            className="flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                                                        >
                                                            {menuItem.title}
                                                            <span className="pl-3">
                                                                <svg width="25" height="24" viewBox="0 0 25 24">
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </p>
                                                        <div
                                                            className={`relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? 'block' : 'hidden'
                                                            }`}
                                                        >
                                                            {menuItem?.submenu?.map((submenuItem, index) => (
                                                                <Link
                                                                    href={submenuItem.path}
                                                                    key={index}
                                                                    className="block rounded py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                                                >
                                                                    {submenuItem.title}
                                                                </Link>
                                                            ))}
                                                        </div> */}
                                                        </>
                                                    )}
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <Social/>
                    </div>
                </div>
            </header>
        </>
    )
}
