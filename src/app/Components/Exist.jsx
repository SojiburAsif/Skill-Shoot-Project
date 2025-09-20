import React from "react";
import { GrCube } from "react-icons/gr";
import { FaChalkboardTeacher, FaVideo, FaDollarSign } from "react-icons/fa";

export default function Exist() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">

                {/* Left Section */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl font-semibold">
                        Why do we <span className="text-[#CB8461]">exist?</span>
                    </h1>

                    <p className="mt-4  text-gray-600 text-sm leading-6 w-full md:w-auto">
                        Our mission is to make learning easy, accessible, and effective for everyone. Many people struggle to improve their skills due to outdated
                    </p>

                    {/* Testimonial / CEO Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <img
                            src="https://i.ibb.co/DHT6j8f3/55885874d5d9.jpg"
                            alt="Jerony Pulquosta"
                            className="w-16 h-16 rounded-full"
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="font-semibold">Jerony Pulquosta</h1>
                            <p className="text-gray-500">CEO Skill Shoot</p>
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-6 w-2/3 md:w-[67%]" />

                    {/* Stats Section */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4 text-center sm:text-left">
                        <div>
                            <h1 className="font-bold text-3xl">100+</h1>
                            <p className="text-gray-600 text-sm">Updated Courses</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">15K</h1>
                            <p className="text-gray-600 text-sm">Active Members</p>
                        </div>
                    </div>
                </div>


                {/* Right Section */}
                <div className="md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-[270px] mx-auto">
                            <div className="text-[#6BCD49] mb-2"><GrCube size={49} /></div>
                            <h1 className='text-2xl font-bold text-[#245D51] mb-2'>Material Limitations</h1>
                            <p className='text-[#808080] text-[16px] leading-8'>
                                Sometimes, outdated or limited learning materials slow down skill improvement.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-[270px] mx-auto">
                            <div className="text-[#1465de] mb-2"><FaChalkboardTeacher size={49} /></div>
                            <h1 className='text-2xl font-bold text-[#245D51] mb-2'>Unprofessional Mentors</h1>
                            <p className='text-[#808080] text-[16px] leading-8'>
                                Not all mentors provide proper guidance, which affects learning quality.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-[270px] mx-auto">
                            <div className="text-[#200dc9] mb-2"><FaVideo size={49} /></div>
                            <h1 className='text-2xl font-bold text-[#245D51] mb-2'>Poor Video Quality</h1>
                            <p className='text-[#808080] text-[16px] leading-8'>
                                Low-resolution or unclear videos can make understanding difficult.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-[270px] mx-auto">
                            <div className="text-[#b716d8] mb-2"><FaDollarSign size={49} /></div>
                            <h1 className='text-2xl font-bold text-[#245D51] mb-2'>High Price</h1>
                            <p className='text-[#808080] text-[16px] leading-8'>
                                Expensive courses can limit access for learners with budget constraints.
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
