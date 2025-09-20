import React from "react";
import { FaInstagram, FaTwitter, FaDiscord, FaCalendarAlt, FaPen, FaPlay } from "react-icons/fa";

export default function Banner() {
    return (
        <div className="bg-[#245D51] relative overflow-hidden ">
            <div className="max-w-7xl mx-auto ">

                {/* Desktop Hero */}
                <div className="flex  flex-col-reverse lg:flex-row items-center justify-between pt-28 lg:pt-10 gap-10 hidden sm:flex ">

                    {/* Left Content */}
                    <div className="text-left max-w-xl">
                        <h1 className="text-white text-4xl md:text-6xl font-bold leading-snug">
                            There is <span className="text-white relative">
                                always
                                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-orange-300 rounded-full"></span>
                            </span>
                            <br /> something new for us to learn
                        </h1>
                        <p className="text-gray-200 mt-6 w-110 leading-relaxed">
                            we have created more than 100+ materials on various
                            things that will help your career, with mentors who are
                            experienced in their fields.
                        </p>

                        {/* Button + Social */}
                        <div className="flex items-center gap-6 mt-8">
                            <button className="bg-[#CB8461] hover:bg-[#e67a5d] transition px-6 py-3 rounded-lg font-semibold text-white shadow-md flex items-center gap-2">
                                Start Journey ↗
                            </button>
                            <div className="flex gap-4 text-white text-xl">
                                <FaInstagram />
                                <FaTwitter />
                                <FaDiscord />
                            </div>
                        </div>
                    </div>

                    {/* Right Person Image */}
                    <div className="relative">
                        <div className="">
                            <img
                                src="https://i.ibb.co.com/67kHKb5C/1be971d51ac590eb01300a0a71a30015d938c6d1-1.png"
                                alt="Mentor"
                                className="w-[400px] lg:w-[460px] drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute  bg-white/70 backdrop-blur-md  -left-35 bottom-54 bg-t px-4 py-2 rounded-xl shadow-lg flex flex-col items-center ">
                            <div className="flex gap-3 px-2 py-2">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    alt="user"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold">
                                        Learn basic UI/UX design
                                    </p>
                                    <p className="text-xs text-gray-500">Today at 12 PM</p>
                                </div>
                            </div>

                            <button className="bg-[#FF4F8E] text-white font-semibold px-3 py-2 rounded-md">
                                Join Now
                            </button>
                        </div>


                        {/* Floating Icons */}
                        <div className="absolute top-34 right-95 w-10 h-10 bg-orange-400  text-white flex items-center justify-center rounded-lg -rotate-12 shadow-lg"><FaPen /></div>
                        <div className="absolute top-65 right-14 w-10 h-10 bg-[#7252A4] text-white flex items-center justify-center rounded-lg shadow-lg rotate-4"><FaPlay /></div>
                        <div className="absolute bottom-15 right-6 w-10 h-10 bg-[#23BDEE] text-white flex items-center justify-center rounded-lg shadow-lg -rotate-12"><FaCalendarAlt /></div>
                    </div>
                </div>

               
                {/* Mobile Hero */}
                <div className="sm:hidden bg-[#245D51] relative overflow-hidden px-4 py-16 mt-12">

                    {/* Floating Icons */}
                    <div className="absolute top-8 right- w-10 h-10 bg-orange-400 text-white flex items-center justify-center rounded-lg -rotate-12 shadow-lg">
                        <FaPen />
                    </div>
                    <div className="absolute bottom-5 right-3 w-10 h-10 bg-[#7252A4] text-white flex items-center justify-center rounded-lg shadow-lg rotate-4">
                        <FaPlay />
                    </div>
                    <div className="absolute bottom-28 right w-10 h-10 bg-[#23BDEE] text-white flex items-center justify-center rounded-lg shadow-lg -rotate-12">
                        <FaCalendarAlt />
                    </div>

                    <div className="flex flex-col items-center gap-6">

                        {/* Left Content */}
                        <div className="text-center">
                            <h1 className="text-white text-3xl font-bold leading-snug relative">
                                There is <span className="text-white relative">
                                    always
                                    <span className="absolute left-0 -bottom-1 w-full h-[3px]  bg-orange-300 rounded-full"></span>
                                </span>
                                <br /> something new for us to learn
                            </h1>
                            <p className="text-gray-200 mt-4  leading-relaxed max-w-[450px] mx-auto">
                                we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.
                            </p>

                            {/* Button + Social */}
                            <div className="items-center gap-4 mt-6 justify-center">
                                <button className="bg-[#CB8461] hover:bg-[#e67a5d] transition px-4 py-2 rounded-lg font-semibold text-white">
                                    Start Journey ↗
                                </button>
                                <div className="flex gap-3 items-center justify-center mt-7 text-white text-lg">
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaDiscord />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
