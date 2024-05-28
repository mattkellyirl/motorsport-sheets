import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "/motorsport-sheets.png";

function Navbar() {
  return (
    <nav className="static md:fixed md:top-0 md:left-0 md:w-full md:z-50 bg-white md:bg-opacity-90">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto px-4 py-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <img src={logo} alt="Motorsport Sheets" className="h-12" />
          </div>
        </Link>
        {/* Navigation Links */}
        <div className="w-full text-center md:block md:text-start md:w-auto">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <ul className="flex flex-col mt-4 font-semibold rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li className="mb-2 md:mb-0">
                <ScrollLink
                  to="home"
                  smooth="easeInOutQuad"
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="block px-3 py-2 text-base text-gray-400 hover:text-black border border-transparent cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="mb-2 md:mb-0">
                <ScrollLink
                  to="solutions"
                  smooth="easeInOutQuad"
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="block px-3 py-2 text-base text-gray-400 hover:text-black border border-transparent cursor-pointer"
                >
                  Solutions
                </ScrollLink>
              </li>
              <li className="mb-2 md:mb-0">
                <ScrollLink
                  to="contact"
                  smooth="easeInOutQuad"
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="block px-3 py-2 text-base text-gray-400 hover:text-black border border-transparent cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
              <li className="mb-2 md:mb-0">
                <Link to="/login">
                  <div className="block px-3 py-2 text-base text-gray-400 hover:text-black border border-transparent rounded-lg cursor-pointer">
                    Login
                  </div>
                </Link>
              </li>

              <li className="mb-2 md:mb-0">
                <Link to="/signup">
                  <div className="text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg px-3 py-2 text-center cursor-pointer">
                    Signup
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
