"use client"
import Link from 'next/link'
import React from 'react'
import { IoAppsSharp } from "react-icons/io5"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()


    const navClass = (path) =>
        pathname === path ? "text-white font-semibold " : "text-gray-300"

    return (
        <div className=" bg-[#245D51] fixed z-50 w-full">
            <div className="max-w-7xl mx-auto navbar">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1 text-white font-semibold text-2xl">
                        Skill<span className="text-[#CB8461]">Shoot</span>
                    </Link>
                </div>

                {/* Navbar Center (Desktop Only) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><Link href="/" className={navClass("/")}>Home</Link></li>
                        <li><Link href="/course" className={navClass("/course")}>Course</Link></li>
                        <li><Link href="/subscribe" className={navClass("/subscribe")}>Subscribe</Link></li>
                        <li><Link href="/about" className={navClass("/about")}>About</Link></li>
                        <li><Link href="/testimoni" className={navClass("/testimoni")}>Testimoni</Link></li>
                    </ul>

                </div>

                {/* Navbar End (Desktop Login/Register) */}
                <div className="navbar-end hidden lg:flex gap-4">
                    <Link href="/login" className="text-gray-50 text-sm hover:text-white">Login</Link>
                    <Link href="/register" className="px-5 py-1.5 rounded hover:rounded-full bg-[#CB8461] text-white">Register</Link>
                </div>

                {/* Mobile Menu Icon (Right Side) */}
                <div className="navbar-end lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <IoAppsSharp size={28} className="text-[#ffffff]" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box mt-3 w-52 p-2 shadow z-10">
                            <li><Link href="/" className={navClass("/")}>Home</Link></li>
                            <li><Link href="/course" className={navClass("/course")}>Course</Link></li>
                            <li><Link href="/subscribe" className={navClass("/subscribe")}>Subscribe</Link></li>
                            <li><Link href="/about" className={navClass("/about")}>About</Link></li>
                            <li><Link href="/testimoni" className={navClass("/testimoni")}>Testimoni</Link></li>
                            <li><Link href="/login" className="text-gray-100 hover:text-black">Login</Link></li>
                            <li><Link href="/register" className="text-gray-100 hover:text-black">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
