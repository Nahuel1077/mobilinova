'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter, Quicksand, Montserrat, Belleza } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
})

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],

})

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return(
        <nav className="flex flex-row flex-wrap justify-between sm:justify-between px-4 items-center fixed w-full top-0 bg-black drop-shadow-[2px_4px_6px_black] z-40">
            <Link className="logo min-w-12 min-h-12" href="/">
                <Image
                className="object-cover hover:opacity-50 ease-linear duration-150"
                src="/img/logo.png"
                alt="logo"
                width={200}
                height={100}
                priority
                />
            </Link>
            <div className="hidden sm:flex">
                <ul className={quicksand.className + " flex flex-row justify-end gap-10 text-white"}>
                    <li>
                        <button className="hover:underline hover:underline-offset-4 decoration-[#655039] h-full" onClick={toggleDropdown} onMouseEnter={() => setIsDropdownOpen(true)}>
                            Categorías ↓
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-black text-white p-4" onMouseLeave={() => setIsDropdownOpen(false)}>
                                <li><Link href="/cocinas" className="hover:underline hover:underline-offset-4 decoration-[#655039]">Cocinas</Link></li>
                                <li><Link href="/placares" className="hover:underline hover:underline-offset-4 decoration-[#655039]">Placares</Link></li>
                                <li><Link href="/especiales" className="hover:underline hover:underline-offset-4 decoration-[#655039]">A medida</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/galeria" className="hover:underline hover:underline-offset-4 decoration-[#655039]">Galería</Link></li>
                    <li><Link href="/nosotros" className="hover:underline hover:underline-offset-4 decoration-[#655039]">Nosotros</Link></li>
                    <li><Link href="https://api.whatsapp.com/send/?phone=5491155093520&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20Mobilinova&type=phone_number&app_absent=0" className="hover:underline hover:underline-offset-4 decoration-[#655039]">Contacto</Link></li>
                </ul>
            </div>
            <div className="sm:hidden">
                <button onClick={toggleNav}>
                <Image
                    className="invert"
                    src="/img/nav-icon.svg"
                    alt="nav icon"
                    width={20}
                    height={20}
                />
                </button>
            </div>

            {/* desplegable mobile*/}
            {isOpen && (
                <div className="absolute top-30 left-0 w-full bg-black text-white sm:hidden">
                <ul className="flex flex-col items-end gap-4 p-4">
                    <li><Link href="/cocinas" onClick={toggleNav}>Cocinas</Link></li>
                    <li><Link href="/placares" onClick={toggleNav}>Placares</Link></li>
                    <li><Link href="/especiales" onClick={toggleNav}>A medida</Link></li>
                    <li><Link href="/galeria" onClick={toggleNav}>Galería</Link></li>
                    <li><Link href="/nosotros" onClick={toggleNav}>Nosotros</Link></li>
                    <li><Link href="https://api.whatsapp.com/send/?phone=5491155093520&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20Mobilinova&type=phone_number&app_absent=0" onClick={toggleNav}>Contacto</Link></li>
                </ul>
                </div>
            )}
        </nav>    
    )
}