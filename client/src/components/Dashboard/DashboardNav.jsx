import React from "react";
import AuthService from "../../utils/authService";
import { Link, useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";

import {
  BiSolidSpreadsheet,
  BiSpreadsheet,
  BiSolidCar,
  BiSolidTimer,
} from "react-icons/bi";
import {
  MdSpaceDashboard,
  MdEventNote,
  MdLogout,
  MdOutlineTimer,
  MdSportsMotorsports,
} from "react-icons/md";
import { FaFlagCheckered, FaCarSide } from "react-icons/fa6";
import { TbListCheck } from "react-icons/tb";

import logo from "../../../assets/motorsport-sheets.png";

function DashboardNav() {
  const handleUserLogout = () => {
    try {
      if (!AuthService.loggedIn()) {
        console.error("Request Failed - User Not Logged In");
      } else {
        AuthService.logout();
        console.log("Request Successful - User Logged Out");
      }
    } catch (error) {
      console.error("Request Failed - Logging Out User:", error.message);
    }
  };

  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <Link to="/dashboard">
            <div className="flex justify-center pl-2.5 mb-4">
              <img src={logo} alt="Motorsport Sheets" className="h-12" />
            </div>
          </Link>

          <ul className="mt-4 space-y-2 font-medium">
            {/* User Profile */}
            <button className="pl-2 py-2 rounded-lg flex items-center justify-between w-full hover:bg-gray-200 group">
              <div className="flex flex-row items-center">
                <img
                  class="w-8 h-8 mr-2 rounded-full"
                  src="https://media.licdn.com/dms/image/D5603AQEYAfZt7WFN0Q/profile-displayphoto-shrink_800_800/0/1696734857420?e=1724284800&v=beta&t=l1xfuvNbIZfPvXx2To3DHBpifYtmlZ_UInaAt-sWyj4"
                  alt="User Profile Picture"
                ></img>

                <div className="flex flex-col items-start">
                  <p className="text-black font-medium text-sm">Matt Kelly</p>
                  <p className="text-gray-500 text-xs">
                    matt@autosportindex.com
                  </p>
                </div>
              </div>

              <RiArrowDropDownLine className="w-8 h-8" />
            </button>

            {/* Dashboard */}
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdSpaceDashboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            <hr></hr>

            {/* Driver, Car and Event Setup */}
            <li>
              <Link
                to="/dashboard/drivers"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdSportsMotorsports className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Drivers</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cars"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <FaCarSide className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Cars</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/events"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdEventNote className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Events</span>
              </Link>
            </li>

            <hr></hr>

            {/* Sheets */}
            <li>
              <Link
                to="/dashboard/run-sheets"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <BiSpreadsheet className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Run Sheets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sheets"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <BiSolidSpreadsheet className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Setup Sheets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/check-sheets"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <TbListCheck className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Check Sheets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/lap-sheets"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdOutlineTimer className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Lap Sheets</span>
              </Link>
            </li>

            <hr></hr>

            {/* Driver Tools */}
            <li>
              <Link
                to="/dashboard/maps"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <FaFlagCheckered className="w-5 h-4 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Track Maps</span>
                <span className="ml-auto px-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/reaction-test"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <BiSolidTimer className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Reaction Test</span>
                <span className="ml-auto px-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  Pro
                </span>
              </Link>
            </li>

            <hr></hr>

            {/* Logout */}
            <li>
              <button
                onClick={handleUserLogout}
                className="flex items-center p-2 w-full text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdLogout className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default DashboardNav;
