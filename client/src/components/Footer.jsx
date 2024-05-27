import React from "react";
import logo from "/motorsport-sheets.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex justify-center items-center">
              <img src={logo} className="h-10" alt="Motorsport Sheets Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Signup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 sm:mx-auto border-gray-900" />
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <span className="text-sm text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Motorsport Sheets.
            </a>{" "}
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-8 sm:space-x-4 justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/"
              className="text-2xl text-gray-400 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-2xl text-gray-400 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mattkellyirl/"
              className="text-2xl text-gray-400 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
