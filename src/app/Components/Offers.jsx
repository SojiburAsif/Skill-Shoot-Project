import React from "react";

export default function Offers() {
  return (
    <div className="bg-white py-6">
      {/* ✅ Desktop/Tablet Section (unchanged) */}
      <div className="hidden md:flex max-w-7xl mx-auto max-h-[300px] relative overflow-hidden bg-[#F2E7DB] rounded-2xl flex-col md:flex-row items-center justify-between px-8">
        {/* Decorative Shapes */}
        <div className="absolute -top-3 -left-3 w-15 h-15 bg-[#245D51] rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-[#245D51] rounded-full"></div>

        <div className="absolute top-50 right-120 rounded-full w-7 h-7 bg-[#EB9F79]"></div>
        <div className="absolute top-51 right-121 rounded-full w-7 h-7 bg-[#e28252]"></div>
        <div className="absolute top-12 right-125 w-12 h-12  border-2 border-[#245D51] "></div>

        <div className="absolute  top-10 right-123 w-12 h-12 bg-[#245D51] "></div>
        <div className="absolute top-12 right-125 w-12 h-12  border-2 border-[#245D51] "></div>

        <div className="absolute  top-10 right-23 w-10 h-10 bg-[#CB8461] rotate-12"></div>
        <div className="absolute top-12 right-25 w-10 h-10  border-2 border-[#CB8461] rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#CB8461] rotate-12"></div>

        <div className="absolute  top-60 right-23 w-9 h-9 bg-[#347366] "></div>
        <div className="absolute top-61 right-24 w-9 h-9  border-2 border-[#347366] "></div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-md space-y-5 z-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-[#2C2C2C]">
            Happy <span className="text-[#CB8461]">Chinese New Year</span>,{" "}
            <span className="font-semibold">20% discount for you today</span>
          </h1>
          <button className="bg-[#245D51] text-white px-6 py-3 rounded-sm font-semibold shadow hover:bg-[#1e4a41] transition">
            Subscribe Course
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 flex justify-center z-10">
          <img
            className="w-64 md:w-72 lg:w-[380px]"
            src="https://i.ibb.co.com/qMWqTTrL/219fdf3f3bac31042b9c4a0e1238a7e740a0dca9.png"
            alt="Offer Banner"
          />
        </div>
      </div>

      {/* ✅ Mobile Section (only text, no image) */}
      <div className="md:hidden max-w-7xl mx-auto bg-[#F2E7DB] rounded-2xl px-6 py-10 text-center space-y-5">
        <h1 className="text-xl font-bold leading-snug text-[#2C2C2C]">
          Happy <span className="text-[#CB8461]">Chinese New Year</span>,{" "}
          <span className="font-semibold">20% discount for you today</span>
        </h1>
        <button className="bg-[#245D51] text-white px-6 py-3 rounded-sm font-semibold shadow hover:bg-[#1e4a41] transition">
          Subscribe Course
        </button>
      </div>
    </div>
  );
}
