"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Company() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col items-center gap-10">

                {/* Heading */}
                <motion.div
                    className="text-center md:text-center"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="md:text-4xl text-xl font-semibold">
                        Trusted more than <span className="text-[#CB8461]">100+</span> in the world
                    </h1>
                    <p className="text-gray-600 mt-3 w-77 md:w-119 mx-auto">
                        They have asked us more than 3 times to teach their employees about various things to improve their skills
                    </p>
                </motion.div>

                {/* Logos */}
                <motion.div
                    className="w-full flex flex-wrap justify-center items-center gap-7 md:gap-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    {[
                        { src: "https://i.ibb.co.com/jvDTSJYM/92b19ef2dd5c86a8315653758b530292ca0b329f.png", alt: "Uber" },
                        { src: "https://i.ibb.co.com/ycdYZqCf/83517c481f27de99f6bf08afbcb3a8532856d638.png", alt: "Google" },
                        { src: "https://i.ibb.co.com/XrTbtQQ1/2d20a10341ef5aff97c59eab452f181a49b1d3cc.png", alt: "Paypal" },
                        { src: "https://i.ibb.co.com/KjTvRmrb/ce3f02c5894784b63f766c97d27e73a6b67f6bd5.png", alt: "Microsoft" },
                        { src: "https://i.ibb.co.com/k2TbNznw/ab878391009577c4f4bf6ceac7cb960cf29e870b.png", alt: "Little" }
                    ].map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="w-28 md:w-32 h-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
