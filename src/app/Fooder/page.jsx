"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    // helper function for nav link classes
    const navClass = (path) =>
        pathname === path
            ? "text-white font-semibold pb-1"
            : "text-gray-100 hover:text-[#CC8663] transition";

    return (
        <footer className="relative bg-[#286054] text-white py-16 overflow-hidden">
    
          
            <img
                src="https://i.ibb.co.com/HDwbC6w0/Vector-15.png"
                alt="Decoration"
                className="hidden sm:block absolute top-[247px] left-[440px] w-[68px] h-[48px] opacity-80 pointer-events-none"
            />

            <div className="hidden sm:block absolute top-[160px] right-[520px] border rounded-full w-10 h-10 border-[#EB9F79]"></div>

            <div className="hidden sm:block absolute top-[145px] right-[535px] border-[3px] rounded-full w-10 h-10 border-[#e28252]"></div>

      
            <img
                src="https://i.ibb.co.com/HDwbC6w0/Vector-15.png"
                alt="Decoration"
                className="absolute top-[607px] left-[80px] w-[40px] h-[28px] opacity-80 pointer-events-none block sm:hidden"
            />

            <div className="absolute top-[550px] right-[80px] border rounded-full w-6 h-6 border-[#EB9F79] block sm:hidden"></div>

            <div className="absolute top-[540px] right-[90px] border-[2px] rounded-full w-6 h-6 border-[#e28252] block sm:hidden"></div>




            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
                {/* Subscribe Section */}
                <div className="flex flex-col items-center gap-4 text-center mt-6">
                    <h1 className="text-3xl font-semibold">
                        Subscribe to get notified about updates
                    </h1>
                    <p className="text-sm text-white/80">
                        By subscribing with your email, you will accept our privacy policy
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full mt-5 px-4 py-3 rounded-md text-white placeholder-white bg-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#CC8663] transition"
                        />
                        <button className="px-6 py-3 mt-5 bg-[#CC8663] text-white rounded-sm hover:bg-[#b87553] transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Navbar Section (Bottom) */}
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full mt-12 gap-6">
                    {/* Left Side (Logo) */}
                    <div className="flex items-center gap-1 text-white font-bold text-2xl">
                        Skill<span className="text-[#CB8461]">Shoot</span>
                    </div>

                    {/* Right Side (Nav Links) */}
                    <ul className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 sm:gap-6 font-medium text-center sm:text-left">
                        <li>
                            <Link href="/" className={navClass("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/course" className={navClass("/course")}>
                                Course
                            </Link>
                        </li>
                        <li>
                            <Link href="/subscribe" className={navClass("/subscribe")}>
                                Subscribe
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={navClass("/about")}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimoni" className={navClass("/testimoni")}>
                                Testimoni
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
