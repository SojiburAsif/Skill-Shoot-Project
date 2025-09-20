"use client";
import React from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri";

export default function Subscribe() {
    const Icon = ({ className = "" }) => (
        <RiVerifiedBadgeLine
            className={`inline-block mr-3 ${className}`}
            size={18}
        />
    );

    return (
        <div className="bg-white py-16">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-4xl font-semibold">
                    <span className="text-[#CB8461]">Subscribe</span> with us now
                </h1>
                <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
                    By subscribing now you will be able to access the material easily and cheaply,
                    so you will be very efficient and benefit.
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 mt-20 px-4 md:px-6">

                {/* Pro Plan (middle, highlighted → show first on mobile) */}
                <div className="order-1 md:order-2 relative flex flex-col items-start text-left bg-[#245D51] text-white shadow-[#779d76] shadow-lg rounded-3xl p-8 w-full sm:w-96 md:w-80 h-auto min-h-[400px] transform transition duration-300 -translate-y-9 ">
                    <span className="absolute left-1/2  top-2 bg-[#CB8461] text-white text-xs px-4 py-1 rounded-full">
                        MOST POPULAR
                    </span>

                    <h1 className="text-2xl md:text-3xl font-bold">
                        $100 <span className="text-sm font-normal">/ 6 month</span>
                    </h1>
                    <h2 className="mt-3 text-lg md:text-xl font-semibold">Pro</h2>
                    <p className="mt-2 text-gray-200 text-sm md:text-base leading-7 sm:leading-7">
                        Lorem Ipsum is simply dummy text of the printing.
                    </p>

                    <ul className="mt-6 space-y-5 text-gray-100 text-sm md:text-base">
                        <li className="flex items-center"><Icon className="text-white" /> Access all videos</li>
                        <li className="flex items-center"><Icon className="text-white" /> Get Certificate</li>
                        <li className="flex items-center"><Icon className="text-white" /> Chat support</li>
                        <li className="flex items-center"><Icon className="text-white" /> Update Notification</li>
                        <li className="flex items-center"><Icon className="text-white" /> Download material</li>
                    </ul>

                    <button className="mt-6 w-full px-6 py-3 rounded-3xl bg-[#CB8461] text-white font-semibold hover:bg-[#ff9c7c] transition">
                        Choose plan
                    </button>
                </div>

                {/* Base Plan (left → show second on mobile) */}
                <div className="order-2 md:order-1 flex flex-col items-start text-left bg-white rounded-2xl p-6 w-full sm:w-70 md:w-72 h-auto min-h-[480px] transition duration-300">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        $50 <span className="text-sm font-normal">/ 1 month</span>
                    </h1>
                    <h2 className="mt-3 text-lg md:text-xl font-semibold">Base</h2>
                    <p className="mt-2 text-gray-400 text-sm md:text-base leading-7">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <ul className="mt-6 space-y-5 text-gray-700 text-sm md:text-base">
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Access all videos</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Get Certificate</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Chat support</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Update Notification</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Download material</li>
                    </ul>

                    <button className="mt-6 w-full px-6 py-2 rounded-3xl bg-[#ffede5] text-[#FDC2A5] font-semibold hover:bg-[#FDC2A5] hover:text-white transition">
                        Choose plan
                    </button>
                </div>

                {/* Enterprise Plan (right → show last on mobile) */}
                <div className="order-3 md:order-3 flex flex-col items-start text-left bg-white rounded-2xl p-6 w-full sm:w-80 md:w-72 h-auto min-h-[480px] transition duration-300">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        $200 <span className="text-sm font-normal">/ 12 month</span>
                    </h1>
                    <h2 className="mt-3 text-lg md:text-xl font-semibold">Enterprise</h2>
                    <p className="mt-2 text-gray-400 text-sm md:text-base leading-7">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <ul className="mt-6 space-y-5 text-gray-700 text-sm md:text-base">
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Access all videos</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Get Certificate</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Chat support</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Update Notification</li>
                        <li className="flex items-center"><Icon className="text-[#CB8461]" /> Download material</li>
                    </ul>

                    <button className="mt-6 w-full px-6 py-2 rounded-3xl bg-[#ffede5] text-[#FDC2A5] font-semibold hover:bg-[#FDC2A5] hover:text-white transition">
                        Choose plan
                    </button>
                </div>

            </div>
        </div>
    );
}
