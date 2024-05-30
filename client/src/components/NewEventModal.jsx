import React, { useState } from "react";

function NewEventModal({ isOpen, onClose }) {
  const [isRaceEventSelected, setIsRaceEventSelected] = useState(false);

  if (!isOpen) return null;

  const handleEventTypeChange = (event) => {
    setIsRaceEventSelected(event.target.value === "Race Event");
  };

  return (
    <div
      id="crud-modal"
      aria-hidden="false"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50"
    >
      <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
            <h3 className="text-lg font-semibold text-black">Add New Event</h3>
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
          <form className="p-4 md:p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="col-span-2">
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  required
                  onChange={handleEventTypeChange}
                >
                  <option value="" disabled selected hidden>
                    Please select...
                  </option>
                  <option value="Test Event">Test Event</option>
                  <option value="Race Event">Race Event</option>
                </select>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="championship"
                  className={`block mb-2 text-sm font-semibold ${
                    !isRaceEventSelected ? "text-gray-400" : "text-black"
                  }`}
                >
                  Championship
                </label>
                <select
                  name="championship"
                  id="championship"
                  className={`block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 ${
                    !isRaceEventSelected ? "text-gray-400" : ""
                  }`}
                  defaultValue="N/A"
                  required
                  disabled={!isRaceEventSelected}
                >
                  <option value="Supercars Championship">
                    Supercars Championship
                  </option>
                  <option value="GT World Challenge Australia">
                    GT World Challenge Australia
                  </option>
                  <option value="Porsche Carrera Cup Australia">
                    Porsche Carrera Cup Australia
                  </option>
                  <option value="TCR Australia">TCR Australia</option>
                  <option value="Australian GT Championship">
                    Australian GT Championship
                  </option>
                </select>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="championshipRound"
                  className={`block mb-2 text-sm font-semibold ${
                    !isRaceEventSelected ? "text-gray-400" : "text-black"
                  }`}
                >
                  Round
                </label>
                <input
                  type="number"
                  name="championshipRound"
                  id="championshipRound"
                  className={`block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 ${
                    !isRaceEventSelected ? "text-gray-400" : ""
                  }`}
                  placeholder="Enter championship round"
                  defaultValue={1}
                  min={1}
                  disabled={!isRaceEventSelected}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="track"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Track
                </label>
                <input
                  type="text"
                  name="track"
                  id="track"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  placeholder="Enter event track"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewEventModal;
