// components/SkillShoot.jsx
import React from "react";
import {
    FaUserFriends,
    FaChalkboardTeacher,
    FaPlay,
    FaRegCalendarAlt,
    FaPencilAlt,
} from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function SkillShoot() {
    return (
        <section className="bg-white mt-30">
            <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">
                {/* LEFT - image area (50%) */}
                <div className="relative w-full md:w-1/2 hidden md:flex justify-center items-end">
                    {/* green half circle (behind) */}
                    <div className="w-[320px] h-[320px] md:w-[420px] md:h-[360px] bg-[#245D51] rounded-t-full rounded-b-3xl z-0" />

                    {/* person image (in front) */}
                    <img
                        src="https://i.ibb.co/tpX9qSnq/pexels-max-fischer-5212321-removebg-preview-1-1-1.png"
                        alt="mentor"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[380px] object-contain z-20"
                    />

                    {/* floating icons */}
                    <div className="absolute top-8 md:top-29 -left-26 md:left-23 w-10 h-10 bg-[#4B9EFF] text-white flex items-center justify-center rounded-lg shadow-lg z-30 -rotate-12">
                        <FaRegCalendarAlt />
                    </div>

                    <div className="absolute -top-14 left-[58%] md:left-[75%] w-10 h-10 bg-[#F88C3D] text-white flex items-center justify-center rounded-lg shadow-lg z-30 -rotate-12">
                        <FaPencilAlt />
                    </div>

                    <div className="absolute top-[56%] md:top-0 -left-8 md:left-24 w-10 h-10 bg-[#7252A4] text-white flex items-center justify-center rounded-lg shadow-lg z-30">
                        <FaPlay />
                    </div>

                    {/* popup card */}
                    <div className="absolute bottom-6 md:bottom-12 right-0 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl flex flex-col items-start gap-3 z-40 w-[260px] md:w-[250px]">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="user"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    How to build a team
                                </p>
                                <p className="text-xs text-gray-500">Today at 12 PM</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <button className="bg-[#FF4F8E] text-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>


                {/* RIGHT - text area (50%) */}
                <div className="w-full md:w-1/2 max-w-xl">
                    <h1 className="text-4xl font-bold">
                        Let us <span className="text-[#245D51] underline">Skill Shoot </span>
                    </h1>

                    <p className="text-gray-500 mt-4 leading-relaxed">
                        We are a company engaged in education with the aim of improving the
                        skills of many people and so that younger people can reach the career
                        paths they want.
                    </p>

                    <p className="text-gray-500 mt-4 leading-relaxed">
                        We have been around since 2019 with currently 100+ updated materials
                        and 15K members who have joined.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="flex items-center gap-3">
                            <span className="bg-[#dcc6ba] p-3 rounded-full"> <FaUserFriends className="text-[#CB8461]" /></span>
                            <p className="text-gray-700 font-semibold">
                                15K People Join
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

                            <span className="bg-[#dcc6ba] p-3 rounded-full"> <FaChalkboardTeacher className="text-[#CB8461]" /></span>
                            <p className="text-gray-700 font-semibold">Trusted Mentor</p>
                        </div>

                        <div className="flex items-center gap-3">

                            <span className="bg-[#dcc6ba] p-3 rounded-full"><FaPlay className="text-[#CB8461]" /></span>
                            <p className="text-gray-700 font-semibold ">30+ Free Videos</p>
                        </div>

                        <div className="flex items-center gap-3 ">
                            <span className="bg-[#dcc6ba] p-3 rounded-full"><IoPlayCircleOutline className="text-[#CB8461] " /></span>
                            <p className="text-gray-700 font-semibold">100+ Premium Videos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
