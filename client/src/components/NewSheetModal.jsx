import React from "react";

function NewSheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      aria-hidden="false"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50"
    >
      <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
            <h3 className="text-lg font-semibold text-black">
              Add New Setup Sheet
            </h3>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-black"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2">
                <label
                  htmlFor="car"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Car
                </label>
                <select
                  name="car"
                  id="car"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  required
                >
                  <option value="" disabled selected hidden>
                    Please select...
                  </option>
                  <option value="Car 1">Car 1</option>
                  <option value="Car 2">Car 2</option>
                  <option value="Car 3">Car 3</option>
                </select>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="event"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Event
                </label>
                <select
                  name="event"
                  id="event"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  required
                >
                  <option value="" disabled selected hidden>
                    Please select...
                  </option>
                  <option value="Event 1">Event 1</option>
                  <option value="Event 2">Event 2</option>
                  <option value="Event 3">Event 3</option>
                </select>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="driver"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Driver
                </label>
                <input
                  type="text"
                  name="driver"
                  id="driver"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  placeholder="Enter driver name"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Add Sheet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewSheetModal;
