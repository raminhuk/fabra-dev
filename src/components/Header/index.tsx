'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

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
        const linkInitial = document.querySelector(`nav [href='${pathname}']`) as HTMLAnchorElement
        if (line.current && linkInitial) {
            line.current.style.width = `${linkInitial.clientWidth}px`
            line.current.style.transform = `translateX(${linkInitial.offsetLeft}px)`
            setPosition(
                {
                    'width': linkInitial.clientWidth+'px',
                    'left': linkInitial.offsetLeft+'px'
                }
            )
        }
       
    }, [pathname])

    const handleMouseOver = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const linkTarget = event.currentTarget
        if (line.current) {
            line.current.style.width = `${linkTarget.clientWidth}px`
            line.current.style.transform = `translateX(${linkTarget.offsetLeft}px)`
            console.log(line.current.style)
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
            <header
                className={`w-full ${sticky
                    ? 'fixed z-[9999] bg-back-dark !bg-opacity-80 backdrop-blur-sm transition'
                    : 'absolute max-lg:bg-indigo-50'
                }`}
            >
                <div className="container">
                    <div className="relative flex items-center justify-between">
                        <div>
                            <Logo />
                        </div>
                        <div className="flex items-center justify-between px-4">
                            <div>
                                <button
                                    onClick={navbarToggleHandler}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                                >
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ' '
                                        }`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0 ' : ' '
                                        }`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                                        }`}
                                    />
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                                        ? 'top-full opacity-100'
                                        : 'invisible top-[120%] opacity-0'
                                    }`}
                                >
                                    
                                
                                   
                                    <ul className="relative flex">
                                        <span
                                            ref={line}
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-custom transition-all duration-500`}
                                        >
                                        </span>
                                        {menuData.map((menuItem, index) => (
                                            <li 
                                                onMouseOver={handleMouseOver}
                                                onMouseOut={handleMouseOut}
                                                key={index} className="relative">
                                                {menuItem.path ? (
                                                    <Link
                                                        
                                                        href={menuItem.path}
                                                        className={`relative flex py-4 text-base lg:mr-0 lg:inline-flex lg:px-8 lg:py-10`}
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
