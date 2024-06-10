import { React } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_CAR,
  DELETE_EVENT,
  DELETE_SHEET,
} from "../../../utils/mutations";
import { MdRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

function DropdownMenu({ dataID, dataType, refetch }) {
  // Pass dataID, dataType and refetch query to dropdownMenu for handleDelete function

  let deleteMutation;

  // Determine appropriate mutation based on provided dataType
  switch (dataType) {
    case "car":
      deleteMutation = DELETE_CAR;
      break;
    case "event":
      deleteMutation = DELETE_EVENT;
      break;
    case "sheet":
      deleteMutation = DELETE_SHEET;
      break;

    // Throw error if invalid data type is provided
    default:
      throw new Error("Request Failed - Invalid Data Type");
  }

  // Initialise the deleteMutation function with the determined mutation and user variables
  const [deleteData] = useMutation(deleteMutation, {
    variables: { id: dataID },
  });

  // Handle data deletion and refetch data to update UI
  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(`Deleting ${dataType} with ID: ${dataID}`);
    try {
      await deleteData(); // Delete the data
      refetch(); // Refetch data to update UI after deletion
      console.log("Request Successful - Data Deleted");
    } catch (error) {
      if (error.networkError) {
        console.error("Network Error:", error.networkError.result.errors);
      }

      if (error.graphQLErrors) {
        error.graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        });
      }
    }
  };

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
          onClick={handleDelete}
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
