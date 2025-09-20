"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Review Data
const reviews = [
    {
        name: "Jason Bay",
        image:
            "https://i.ibb.co.com/MxGNnBcw/ai-generated-9753233-1920.jpg",
        text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        name: "Nany Brugman",
        image:
            "https://i.ibb.co.com/V0D1LHJG/415cb2a34085.png",
        text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        name: "Alexa Nowan",
        image:
            "https://i.ibb.co.com/j97BK25M/8772ea18dde9.png",
        text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        name: "Andrew Smith",
        image:
            "https://i.ibb.co.com/s7fySm4/user-1.png",
        text: "Amazing platform, I improved my skills a lot here!",
    },
];

export default function Page() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="bg-[#F8F8F8] py-30 ">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center relative">
                    <h1 className="text-2xl md:text-4xl  font-semibold">
                        What do they <span className="text-[#CB8461]">say?</span>
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm w-75 md:w-full mx-auto md:text-lg ">
                        This is an honest review from members who have joined us
                    </p>

                    {/* Decorations – only mobile */}
                    <div className="absolute -top-2 right-86 w-7 h-7 bg-[#245D51] rotate-12 block md:hidden"></div>
                    <div className="absolute -top-0 right-88 w-7 h-7 border-2 border-[#245D51] rotate-12 block md:hidden"></div>
                    <div className="absolute -top-2 right-7 rounded-full w-5 h-5 bg-[#245D51] block md:hidden"></div>
                    <div className="absolute -top-1 right-5 rounded-full w-6 h-6 bg-[#246859] block md:hidden"></div>
                </div>


                {/* Swiper */}
                <div className="mt-14 relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((r, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <div
                                        className={`bg-white p-22 w-120  rounded-sm text-center transition-all duration-500 ${isActive
                                            ? "scale-90  border-b-8 border-[#275a4f]"
                                            : "scale-65 opacity-70"
                                            }`}
                                    >
                                        {/* Profile Image */}
                                        <div className="-mt-20 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[#CB8461] ">
                                            <img
                                                src={r.image}
                                                alt={r.name}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>

                                        {/* Stars */}
                                        <div className="mt-5 flex justify-center gap-1">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <AiFillStar key={idx} className="text-[#CB8461] w-6 h-6" />
                                            ))}
                                        </div>

                                        {/* Name */}
                                        <h3 className="mt-5 text-2xl font-semibold text-gray-800">{r.name}</h3>

                                        {/* Review Text */}
                                        <p className="text-gray-500 mt-4 text-lg leading-8">{r.text}</p>
                                    </div>
                                )}
                            </SwiperSlide>

                        ))}
                    </Swiper>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition"
                        >
                            <FiArrowLeft />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-full bg-[#CB8461] text-white shadow flex items-center justify-center hover:bg-[#b76b49] transition"
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
