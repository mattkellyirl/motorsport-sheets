import React, { useState, useEffect } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_DRIVERS } from "../../utils/queries";
// import NewDriverModal from "./Modals/NewDriverModal";
// import DriverListing from "./Listings/DriverListing";
import AuthService from "../../utils/authService";

function DashboardDrivers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  // Retrieve user profile
  useEffect(() => {
    const userProfile = AuthService.getProfile();
    setUserId(userProfile.data._id);
  }, []);

  // Retrieve user driver data
  //   const { data: driversData, refetch: refetchEvents } = useQuery(GET_DRIVERS, {
  //     variables: { ownerId: userId },
  //     skip: !userId,
  //   });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div class="p-4 sm:ml-64 relative overflow-x-auto shadow-md">
      <div class="flex flex-row justify-between pb-4 bg-white">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for drivers"
          ></input>
        </div>

        <button
          onClick={openModal}
          className="text-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 w-max"
        >
          Add Driver
        </button>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <caption class="pl-6 pb-4 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
          All Drivers
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Driver Name
            </th>
            <th scope="col" class="px-6 py-3">
              Race Number
            </th>
            <th scope="col" class="px-6 py-3">
              Sponsors
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Matt Kelly
            </th>
            <td class="px-6 py-4">16</td>
            <td class="px-6 py-4">Motorsport Sheets, Autosport Index</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>

          <tr class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Harri Jones
            </th>
            <td class="px-6 py-4">12</td>
            <td class="px-6 py-4">
              Hastings Deering CAT, Porsche Centre Melbourne
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashboardDrivers;
