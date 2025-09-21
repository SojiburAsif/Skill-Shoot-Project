"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaDiscord, FaCalendarAlt, FaPen, FaPlay } from "react-icons/fa";

export default function Banner() {
    return (
        <div className="bg-[#245D51] relative overflow-hidden ">
            <div className="max-w-7xl mx-auto ">

                {/* Desktop Hero */}
                <div className="flex flex-col-reverse lg:flex-row items-center h-[677px] justify-between pt-28 lg:pt-10 gap-10 hidden sm:flex ">

                    {/* Left Content */}
                    <motion.div
                        className="text-left max-w-xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug">
                            There is <span className="relative text-white inline-block">
                                always
                                <img
                                    src="https://i.ibb.co.com/BHFNfFzH/Vector-1.png"
                                    alt=""
                                    className="absolute -bottom-3 left-0 w-full "
                                />
                            </span>

                            <br /> something new for us to learn
                        </h1>
                        <p className="text-gray-200 mt-6 w-110 leading-relaxed">
                            we have created more than 100+ materials on various
                            things that will help your career, with mentors who are
                            experienced in their fields.
                        </p>

                        {/* Button + Social */}
                        <motion.div
                            className="flex items-center gap-6 mt-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <button className="bg-[#CB8461] hover:bg-[#e67a5d] transition px-6 py-3 rounded-lg font-semibold text-white shadow-md flex items-center gap-2">
                                Start Journey ↗
                            </button>
                            <div className="flex gap-4 text-white text-xl">
                                <FaInstagram />
                                <FaTwitter />
                                <FaDiscord />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Person Image */}
                    <motion.div
                        className="relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.img
                            src="https://i.ibb.co.com/67kHKb5C/1be971d51ac590eb01300a0a71a30015d938c6d1-1.png"
                            alt="Mentor"
                            className="w-[400px] lg:w-[460px] drop-shadow-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />

                        {/* Floating Card */}
                        <motion.div
                            className="absolute bg-white/70 backdrop-blur-md -left-35 bottom-54 px-4 py-2 rounded-xl shadow-lg flex flex-col items-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
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
                            <button className="bg-[#FF4F8E] text-white font-semibold px-3 py-2 rounded-md hover:bg-pink-600">
                                Join Now
                            </button>
                        </motion.div>

                        {/* Floating Icons */}
                        <motion.div
                            className="absolute top-34 right-95 w-10 h-10 bg-orange-400 text-white flex items-center justify-center rounded-lg -rotate-12 shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <FaPen />
                        </motion.div>
                        <motion.div
                            className="absolute top-65 right-14 w-10 h-10 bg-[#7252A4] text-white flex items-center justify-center rounded-lg shadow-lg rotate-4"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <FaPlay />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-15 right-6 w-10 h-10 bg-[#23BDEE] text-white flex items-center justify-center rounded-lg shadow-lg -rotate-12"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                        >
                            <FaCalendarAlt />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile Hero */}
                <div className="sm:hidden bg-[#245D51] relative overflow-hidden px-4 py-16 mt-12">
                    {/* Floating Icons */}
                    <motion.div
                        className="absolute top-8 w-10 h-10 bg-orange-400 text-white flex items-center justify-center rounded-lg -rotate-12 shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <FaPen />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-5 right-3 w-10 h-10 bg-[#7252A4] text-white flex items-center justify-center rounded-lg shadow-lg rotate-4"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <FaPlay />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-28 w-10 h-10 bg-[#23BDEE] text-white flex items-center justify-center rounded-lg shadow-lg -rotate-12"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                    >
                        <FaCalendarAlt />
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Left Content */}
                        <div className="text-center">
                            <h1 className="text-white text-3xl font-bold leading-snug relative">
                                There is <span className="relative text-white inline-block">
                                    always
                                    <img
                                        src="https://i.ibb.co.com/BHFNfFzH/Vector-1.png"
                                        alt=""
                                        className="absolute  left-0 w-full "
                                    />
                                </span>
                                <br /> something new for us to learn
                            </h1>
                            <p className="text-gray-200 mt-4 leading-relaxed max-w-[450px] mx-auto">
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
