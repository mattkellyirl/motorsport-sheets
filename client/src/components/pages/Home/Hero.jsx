import React from "react";
import { Link } from "react-router-dom";
import heroImg from "/hero.jpg";

function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10 bg-zinc-900 bg-opacity-75 w-full h-full flex items-center justify-center">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Streamline Your Racing Data
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Unlock a new level of competition with Motorsport Sheets, a
            cutting-edge motorsport data management application tailored for
            race engineers, mechanics and drivers. Efficiently handle critical
            vehicle and driver information and make data-driven decisions with
            ease.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/login"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg border border-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-semibold text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
