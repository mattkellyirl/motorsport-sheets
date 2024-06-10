import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import DropdownMenu from "../../Dropdowns/DropdownMenu";

const SheetDetails = ({ sheet, refetch }) => {
  // Initialize isDropdownOpen to false and setIsDropdownOpen as the function to update it
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle toggling of the dropdown state
  const toggleDropdown = () => {
    // Set isDropdownOpen to opposite of its previous state to open or close
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative block max-w-sm p-4 mr-4 mb-4 bg-white border border-gray-200 rounded">
      <div className="relative flex flex-row items-center justify-between mb-2">
        <h5 className="mr-4 text-lg font-bold tracking-tight text-black">
          {sheet.title}
        </h5>
        <div
          className="text-gray-500 hover:text-black cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <MdMoreVert className="text-2xl" />

          {/* If isDropdownOpen is true, render DropdownMenu */}
          {isDropdownOpen && (
            <DropdownMenu
              dataID={sheet._id}
              dataType="sheet"
              refetch={refetch}
            /> // Pass dataID, dataType and refetch query to dropdownMenu for handleDelete function
          )}
        </div>
      </div>
      <p className="font-normal text-black">
        <span className="font-bold">Car:</span> {sheet.car}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Event:</span> {sheet.event}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Session:</span> {sheet.session}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Driver:</span> {sheet.driver}
      </p>
    </div>
  );
};

export default SheetDetails;
