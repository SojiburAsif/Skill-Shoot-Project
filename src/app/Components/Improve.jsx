"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Improve() {
    return (
        <motion.div 
            className="bg-white mt-15 mx-5 md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Main Content */}
            <motion.div
                className="max-w-7xl mx-auto rounded-3xl bg-[#F2E7DB] flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16 gap-6 md:gap-0 relative z-10 overflow-visible"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Decoration Circles */}
                <motion.div
                    className="absolute top-0 -left-0 w-12 h-12 bg-[#245D51] rounded-full rounded-t-2xl rounded-l-4xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="absolute top-50 right-127 w-10 h-10 bg-[#CB8461] rotate-12"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="absolute top-52 right-130 w-10 h-10 border-2 border-[#CB8461] rotate-12"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                />

                {/* Text */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                        <span className="text-[#CB8461]">Improve</span> your skills, and reach <br className="hidden sm:block" />
                        your career as soon as possible
                    </h1>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.button
                        className="py-3 px-6 rounded-md bg-[#CB8461] text-white font-semibold w-full sm:w-auto"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Join Now
                    </motion.button>
                    <motion.button
                        className="py-3 px-6 rounded-md bg-[#245D51] text-white font-semibold w-full sm:w-auto"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Subscribe Course
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
