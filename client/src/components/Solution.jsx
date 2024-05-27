import React from "react";
import performanceImg from "/performance.jpeg";

function Solution() {
  return (
    <section className="relative w-full h-screen">
      <img
        src={performanceImg}
        alt="Race mechanics working on race car"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10 bg-zinc-900 bg-opacity-75 w-full h-full flex items-center justify-center">
        <div className="px-4 mx-auto max-w-screen-md bg-red-100 bg-opacity-25">
          <h1 className="mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Driver Notes and Performance Analysis:
          </h1>
          <div className="px-4 mx-auto bg-blue-100 bg-opacity-25">
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl">
              Record comprehensive driver notes on track conditions, driving
              lines and performance metrics such as car balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
