import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import DropdownMenu from "../../Dropdowns/DropdownMenu";

const EventDetails = ({ event, refetch }) => {
  // Initialize isDropdownOpen to false and setIsDropdownOpen as the function to update it
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle toggling of the dropdown state
  const toggleDropdown = () => {
    // Set isDropdownOpen to opposite of its previous state to open or close
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative block max-w-md p-4 mr-4 mb-4 bg-white border border-gray-200 rounded">
      <div className="relative flex flex-row items-center justify-between mb-2">
        <h5 className="mr-4 text-lg font-bold tracking-tight text-black">
          {event.championship || "Test Event"}
          {event.round ? `, Round ${event.round}` : ""}
        </h5>
        <div
          className="text-gray-500 hover:text-black cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <MdMoreVert className="text-2xl" />

          {/* If isDropdownOpen is true, render DropdownMenu */}
          {isDropdownOpen && (
            <DropdownMenu
              dataID={event._id}
              dataType="event"
              refetch={refetch}
            /> // Pass dataID, dataType and refetch query to dropdownMenu for handleDelete function
          )}
        </div>
      </div>
      <p className="font-normal text-black">
        <span className="font-bold">Type:</span> {event.type}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Track:</span> {event.track}
      </p>
      <p className="font-normal text-black">
        <span className="font-bold">Date:</span>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default EventDetails;
