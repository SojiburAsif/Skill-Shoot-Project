"use client";
import React from "react";
import { motion } from "framer-motion";
import { GrCube } from "react-icons/gr";
import { FaChalkboardTeacher, FaVideo, FaDollarSign } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Exist() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">

        {/* Left Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-semibold">
            Why do we <span className="text-[#CB8461]">exist?</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm leading-6 w-full md:w-auto">
            Our mission is to make learning easy, accessible, and effective for everyone. Many people struggle to improve their skills due to outdated
          </p>

          {/* Testimonial / CEO Section */}
          <motion.div
            className="flex items-center gap-4 mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co/DHT6j8f3/55885874d5d9.jpg"
              alt="Jerony Pulquosta"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-center sm:text-left">
              <h1 className="font-semibold">Jerony Pulquosta</h1>
              <p className="text-gray-500">CEO Skill Shoot</p>
            </div>
          </motion.div>

          <hr className="border-t border-gray-300 my-6 w-2/3 md:w-[67%]" />

          {/* Stats Section */}
          <motion.div
            className="flex gap-4 sm:gap-10 mt-4 text-center sm:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className="font-bold text-3xl">100+</h1>
              <p className="text-gray-600 text-sm">Updated Courses</p>
            </div>
            <div>
              <h1 className="font-bold text-3xl">15K</h1>
              <p className="text-gray-600 text-sm">Active Members</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[{
              icon: <GrCube size={49} className="text-[#6BCD49]" />,
              title: "Material Limitations",
              desc: "Sometimes, outdated or limited learning materials slow down skill improvement."
            },{
              icon: <FaChalkboardTeacher size={49} className="text-[#1465de]" />,
              title: "Unprofessional Mentors",
              desc: "Not all mentors provide proper guidance, which affects learning quality."
            },{
              icon: <FaVideo size={49} className="text-[#200dc9]" />,
              title: "Poor Video Quality",
              desc: "Low-resolution or unclear videos can make understanding difficult."
            },{
              icon: <FaDollarSign size={49} className="text-[#b716d8]" />,
              title: "High Price",
              desc: "Expensive courses can limit access for learners with budget constraints."
            }].map((card, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-[270px] mx-auto"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2">{card.icon}</div>
                <h1 className='text-2xl font-bold text-[#245D51] mb-2'>{card.title}</h1>
                <p className='text-[#808080] text-[16px] leading-8'>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
