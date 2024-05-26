import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "/motorsport-sheets.png";

function Navbar() {
  return (
    // <!--Navigation Bar-->
    <nav className="static md:fixed md:top-0 md:left-0 md:w-full md:z-50 bg-white md:bg-opacity-90">
      <div className="container mx-auto">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-center md:justify-between mx-auto px-6 py-6">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <img src={logo} alt="Motorsport Sheets" className="h-12" />
          </div>

          {/* Navigation Links and Signup Button */}
          <div className="w-full text-center md:block md:text-start md:w-auto">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <ScrollLink
                    to="home"
                    smooth="easeInOutQuad"
                    duration={500}
                    className="block py-2 px-3 text-md text-black font-semibold border-2 border-transparent hover:border-gray-950 hover:rounded-lg cursor-pointer"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="work"
                    smooth="easeInOutQuad"
                    duration={500}
                    className="block py-2 px-3 text-md text-black font-semibold border-2 border-transparent hover:border-gray-950 hover:rounded-lg cursor-pointer"
                  >
                    Solutions
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth="easeInOutQuad"
                    duration={500}
                    className="block py-2 px-3 text-md text-black font-semibold border-2 border-transparent hover:border-gray-950 hover:rounded-lg cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth="easeInOutQuad"
                    duration={500}
                    className="block py-2 px-3 text-md text-black font-semibold border-2 border-transparent hover:border-gray-950 hover:rounded-lg cursor-pointer"
                  >
                    Login
                  </ScrollLink>
                </li>
              </ul>
              <button
                type="button"
                className="mt-4 md:mt-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
