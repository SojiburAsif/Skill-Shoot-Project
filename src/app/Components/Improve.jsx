import React from 'react'

export default function Improve() {
    return (
        <div className="bg-white mt-15 mx-5 md:mx-0 ">


            {/* Main Content */}
            <div className="max-w-7xl mx-auto rounded-3xl bg-[#F2E7DB] flex flex-col md:flex-row  items-center justify-between px-6 py-12 md:py-16 gap-6 md:gap-0 relative z-10 overflow-visible">



                {/* Decoration Circles */}
                <div className="absolute top-0 -left-0 w-12 h-12 bg-[#245D51] rounded-full rounded-t-2xl rounded-l-4xl"></div>
                {/* <div className="absolute -top-20 -left-20 w-32 h-32 bg-[#245D51] rounded-full opacity-20"></div> */}

                {/* Text */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                        <span className="text-[#CB8461]">Improve</span> your skills, and reach <br className="hidden sm:block" />
                        your career as soon as possible
                    </h1>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0">
                    <button className="py-3 px-6 rounded-md bg-[#CB8461] text-white font-semibold w-full sm:w-auto">
                        Join Now
                    </button>
                    <button className="py-3 px-6 rounded-md bg-[#245D51] text-white font-semibold w-full sm:w-auto">
                        Subscribe Course
                    </button>


                </div>
                <div className="absolute  top-50 right-127 w-10 h-10 bg-[#CB8461] rotate-12"></div>
                <div className="absolute top-52 right-130 w-10 h-10  border-2 border-[#CB8461] rotate-12"></div>
            </div>
        </div>
    )
}
