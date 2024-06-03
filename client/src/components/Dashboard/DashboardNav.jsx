import React from "react";
import AuthService from "../../utils/authService";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidSpreadsheet, BiSolidCar } from "react-icons/bi";
import { MdSpaceDashboard, MdEventNote, MdLogout } from "react-icons/md";
import logo from "/motorsport-sheets.png";

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
          <Link to="/">
            <div className="flex justify-center pl-2.5 mb-5">
              <img src={logo} alt="Motorsport Sheets" className="h-12" />
            </div>
          </Link>

          <ul className="space-y-2 font-semibold">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdSpaceDashboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cars"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <BiSolidCar className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Your Cars</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/events"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <MdEventNote className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Your Events</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sheets"
                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group"
              >
                <BiSolidSpreadsheet className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ml-3">Your Sheets</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-semibold border-t border-gray-200">
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
