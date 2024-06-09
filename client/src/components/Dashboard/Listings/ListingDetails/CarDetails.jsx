import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import DropdownMenu from "../../Dropdowns/DropdownMenu";

const CarDetails = ({ car }) => {
  // Initialize isDropdownOpen to false and setIsDropdownOpen as the function to update it
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle toggling of the dropdown state
  const toggleDropdown = () => {
    // Set isDropdownOpen to opposite of its previous state to open or close
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative block max-w-sm p-4 mr-4 mb-4 bg-white border border-gray-200 rounded">
      <div className="relative flex flex-row items-center mb-2">
        <h5 className="mr-4 text-lg font-bold tracking-tight text-black">
          {car.make} {car.model}
        </h5>
        <div
          className="text-gray-500 hover:text-black cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <MdMoreVert className="text-2xl" />

          {/* If isDropdownOpen is true, render DropdownMenu */}
          {isDropdownOpen && <DropdownMenu />}
        </div>
      </div>
      <p className="font-normal text-black">
        <span className="font-bold">Year:</span> {car.year}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Race Number:</span> {car.raceNumber}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Odometer:</span> {car.odometer}km
      </p>
    </div>
  );
};

export default CarDetails;
