"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CiUser } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PopularCourses() {
    const courses = [
        {
            title: "Basics of learning team management",
            instructor: "Jone Owel",
            role: "IT Manager",
            participants: 120,
            price: 120,
            videos: 25,
            img: "https://i.ibb.co/Csw3nHTM/unsplash-m2-TU2gfq-Se-E.png",
            avatar: "https://i.ibb.co/7rZ1wTQ/avatar-placeholder.png",
        },
        {
            title: "Learn basic database structure",
            instructor: "Ronaldo Jr",
            role: "Data Science",
            participants: 55,
            price: 180,
            videos: 20,
            img: "https://i.ibb.co.com/sdH9GC7Q/unsplash-m2-TU2gfq-Se-E-1.png",
            avatar: "https://i.ibb.co/7rZ1wTQ/avatar-placeholder.png",
        },
        {
            title: "Create dynamic website with basic php",
            instructor: "Markus Low",
            role: "Programmer",
            participants: 98,
            price: 135,
            videos: 20,
            img: "https://i.ibb.co/Csw3nHTM/unsplash-m2-TU2gfq-Se-E.pnghttps://i.ibb.co/Csw3nHTM/unsplash-m2-TU2gfq-Se-E.png",
            avatar: "https://i.ibb.co/Csw3nHTM/unsplash-m2-TU2gfq-Se-E.png",
        },
        {
            title: "Create dynamic website with basic php",
            instructor: "Markus Low",
            role: "Programmer",
            participants: 98,
            price: 135,
            videos: 20,
            img: "https://i.ibb.co.com/sdH9GC7Q/unsplash-m2-TU2gfq-Se-E-1.png",
            avatar: "https://i.ibb.co/7rZ1wTQ/avatar-placeholder.png",
        },
        {
            title: "Create dynamic website with basic php",
            instructor: "Markus Low",
            role: "Programmer",
            participants: 98,
            price: 135,
            videos: 20,
            img: "https://i.ibb.co/Csw3nHTM/unsplash-m2-TU2gfq-Se-E.png",
            avatar: "https://i.ibb.co/7rZ1wTQ/avatar-placeholder.png",
        },
    ];

    return (
        <div className="bg-[#245D51] relative overflow-visible py-16">
            {/* Section Header */}
            <div className="text-center mb-12 px-6">
                <h1 className="text-white font-bold text-3xl">
                    Popular courses of the week
                </h1>
                <p className="text-gray-300 mt-3">
                    List of the most popular lists that are often <br /> studied by our
                    members
                </p>
            </div>

            <div className="absolute top-15 left-130 w-10 h-10 bg-[#CB8461] rotate-12 hidden md:block"></div>
            <div className="absolute top-17 left-127 w-10 h-10 border-2 border-[#CB8461] rotate-12 hidden md:block"></div>
            <div className="absolute top-24 right-120 rounded-full w-5 h-5 bg-[#EB9F79] hidden md:block"></div>
            <div className="absolute top-21 right-121 rounded-full w-7 h-7 bg-[#e28252] hidden md:block"></div>


            {/* Swiper */}
            <div className="relative max-w-7xl mx-auto px-6">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {courses.map((course, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px] flex flex-col">
                                {/* Thumbnail */}
                                <div className="relative">
                                    <img
                                        src={course.img}
                                        alt="Course"
                                        className="w-full h-56 object-cover" // height little bigger for balance
                                    />

                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between p-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 leading-snug">
                                            {course.title}
                                        </h2>

                                        {/* Instructor + Participants */}
                                        <div className="flex items-center gap-4 mb-6 mt-6">
                                            <img
                                                src={'https://i.ibb.co.com/S47T06r9/download-3.png'}
                                                alt="Instructor"
                                                className="w-13 h-10 rounded-full"
                                            />
                                            <div>
                                                <h3 className="text-sm font-semibold">{course.instructor}</h3>
                                                <p className="text-gray-500 text-xs">{course.role}</p>
                                            </div>
                                            <div className="flex items-center gap-2 ml-auto">
                                                <CiUser className="text-[#245D51] w-8 h-8" />
                                                <div className="flex flex-col leading-tight">
                                                    <span className="text-gray-700 text-sm font-semibold">
                                                        {course.participants}
                                                    </span>
                                                    <span className="text-gray-500 text-xs">Participant</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Buy + Price */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <button className="bg-[#245D51] text-white px-7 py-4 text-xs rounded-md font-semibold shadow hover:bg-[#1e4f44] transition">
                                            Buy Now
                                        </button>
                                        <p className="font-semibold text-xs text-gray-700 ">
                                            <span className="text-2xl text-black">${course.price}</span> / {course.videos} Video
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <div className="bg-gray-200 rounded-full p-1">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                            <FaArrowLeft className="text-[#245D51]" />
                        </button>
                    </div>
                </div>
                <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white p-1 rounded-full">
                        <button className="w-10 h-10 bg-[#245D51] rounded-full flex items-center justify-center shadow-md ">
                            <FaArrowRight className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
