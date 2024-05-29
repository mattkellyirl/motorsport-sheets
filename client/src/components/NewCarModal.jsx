// components/CarModal.jsx
import React from "react";

function NewCarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      aria-hidden="false"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-black">Add New Car</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
          {/* Modal body */}
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="make"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Make
                </label>
                <input
                  type="text"
                  name="make"
                  id="make"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter vehicle make"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="model"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter vehicle model"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Race Number
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter race number"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="odometer"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Odometer
                </label>
                <input
                  type="number"
                  name="odometer"
                  id="odometer"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter vehicle odometer"
                  required=""
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCarModal;
