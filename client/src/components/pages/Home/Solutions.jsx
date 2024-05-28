import React from "react";
import dataImg from "/data.jpg";
import vehicleSetupImg from "/vehicle-setup.png";

function Solutions() {
  return (
    <section className="relative w-full h-auto lg:h-screen flex flex-col justify-center bg-white">
      <div className="p-8 px-4 mx-auto max-w-screen-xl grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Driver Performance Analysis
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-400 lg:text-xl">
            <span className="font-semibold">Detailed Track Notes:</span> Record
            comprehensive driver notes on track conditions, driving lines and
            car balance to enhance performance understanding and strategy.
          </p>
          <p className="mb-8 lg:mb-0 text-lg font-normal text-gray-400 lg:text-xl">
            <span className="font-semibold">Performance Metrics:</span> Analyze
            key performance metrics such as lap times and sector splits to
            identify areas for improvement and optimize racing tactics.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <img
            src={dataImg}
            alt="Data Background"
            className="w-full lg:max-w-md h-64 lg:max-h-96 rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Optimized Setup Sheets
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-400 lg:text-xl">
            <span className="font-semibold">Data Management:</span> Efficiently
            store and manage relevant setup data, including suspension settings,
            wheel alignment, fuel levels and tyre pressures.
          </p>
          <p className="mb-8 lg:mb-0 text-lg font-normal text-gray-400 lg:text-xl">
            <span className="font-semibold">Remote Access:</span> Ensure vehicle
            data is accessible from anywhere, allowing access to team members at
            anytime.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <img
            src={vehicleSetupImg}
            alt="F1 Car Background"
            className="w-full lg:max-w-md h-64 lg:max-h-96 rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
