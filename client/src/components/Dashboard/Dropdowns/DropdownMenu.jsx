import { React } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

function DropdownMenu() {
  return (
    <div
      id="dropdown-menu"
      className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
    >
      <ul className="py-1 text-sm font-semibold text-black">
        <li>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
            <MdRemoveRedEye className="mr-4" />
            View
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
            <MdEdit className="mr-4" />
            Edit
          </a>
        </li>
      </ul>
      <div className="text-sm font-semibold py-1">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-red-600 hover:text-white hover:bg-red-600"
        >
          <TiDelete className="mr-4" />
          Delete
        </a>
      </div>
    </div>
  );
}

export default DropdownMenu;
