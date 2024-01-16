'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="text-white relative z-20">
            <div className="py-3 max-w-7xl w-11/12 mx-auto flex justify-between lg:flex-row justify-center lg:justify-between items-center lg:items-center lg:py-0" >
                <div className="flex items-center justify-center flex-1 lg:flex-none">
                    <Link href="/" className="flex items-center gap-2">
                        <Image width={200} height={60} src="../logo.svg" alt="fabra.dev" />
                    </Link>
                </div>

                <div className="lg:hidden -order-1 flex items-center">
                    <button onClick={toggleMobileMenu} className="flex flex-col gap-1.5 text-white p-2 focus:outline-none">
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>
                </div>

                <div className={`${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'} flex z-10 lg:w-auto lg:h-auto w-full h-screen left-0 top-0 fixed lg:flex lg:relative`}>
                    <div className={`relative z-10 flex w-10/12 bg-white lg:w-auto lg:bg-transparent flex-col transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                        <div className="flex items-center justify-between lg:hidden p-3 bg-gray-50">
                            <span className="flex gap-2">
                                <Image width={200} height={60} src="../logo.svg" alt="fabra.dev" />
                            </span>
                            <span className="p-2" onClick={toggleMobileMenu}>
                                <MdClose size={25} color="#b6b6b6"/>
                            </span>
                        </div>
                        <nav className={`lg:flex-row flex-col flex lg:relative text-sm lg:text-base text-gray-400 lg:text-gray-100`}>
                            
                            <Link
                                onClick={toggleMobileMenu}
                                href="/"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Principal
                            </Link>
                            <Link
                                onClick={toggleMobileMenu}
                                href="/quem-sou"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Quem sou
                            </Link>
                            <Link
                                onClick={toggleMobileMenu}
                                href="/portifolio"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Portifólio
                            </Link>
                            <Link
                                onClick={toggleMobileMenu}
                                href="/ferramentas"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Feramentas
                            </Link>
                            <Link
                                onClick={toggleMobileMenu}
                                href="/blog"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Blog
                            </Link>
                            <Link
                                onClick={toggleMobileMenu}
                                href="/contato"
                                className="relative lg:border-none border-b border-gray-100 border-solid px-6 py-4 lg:px-6 lg:py-8 lg:px-4 group"
                            >
                                Contato
                            </Link>
                        </nav>
                    </div>
                    <span onClick={toggleMobileMenu} className="lg:hidden block absolute left-0 top-0 w-full h-screen bg-black bg-opacity-60"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;