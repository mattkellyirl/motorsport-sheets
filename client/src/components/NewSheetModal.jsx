import React, { useState } from "react";
import { ADD_SHEET } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function NewSheetModal({ isOpen, onClose, refetch }) {
  // Initialise empty form fields when component first rendered
  const [sheetData, setSheetData] = useState({
    event: "",
    session: "",
    trackCondition: "",
    trackTemp: "",
    car: "",
    driver: "",
    tyrePressureLF: "",
    tyrePressureRF: "",
    tyrePressureLR: "",
    tyrePressureRR: "",
    rideHeightLF: "",
    rideHeightRF: "",
    rideHeightLR: "",
    rideHeightRR: "",
    camberLF: "",
    camberRF: "",
    camberLR: "",
    camberRR: "",
    toeLF: "",
    toeRF: "",
    toeLR: "",
    toeRR: "",
  });

  const [addSheet] = useMutation(ADD_SHEET);

  const handleChange = (event) => {
    setSheetData({ ...sheetData, [event.target.name]: event.target.value });
  };

  const handleSheetSubmit = async (event) => {
    event.preventDefault();
    console.log("Attempting to add new sheet:", sheetData);

    try {
      const { data } = await addSheet({
        variables: {
          ...sheetData,
          trackTemp: parseInt(sheetData.trackTemp),
          tyrePressureLF: parseInt(sheetData.tyrePressureLF),
          tyrePressureRF: parseInt(sheetData.tyrePressureRF),
          tyrePressureLR: parseInt(sheetData.tyrePressureLR),
          tyrePressureRR: parseInt(sheetData.tyrePressureRR),
          rideHeightLF: parseInt(sheetData.rideHeightLF),
          rideHeightRF: parseInt(sheetData.rideHeightRF),
          rideHeightLR: parseInt(sheetData.rideHeightLR),
          rideHeightRR: parseInt(sheetData.rideHeightRR),
          camberLF: parseInt(sheetData.camberLF),
          camberRF: parseInt(sheetData.camberRF),
          camberLR: parseInt(sheetData.camberLR),
          camberRR: parseInt(sheetData.camberRR),
          toeLF: parseInt(sheetData.toeLF),
          toeRF: parseInt(sheetData.toeRF),
          toeLR: parseInt(sheetData.toeLR),
          toeRR: parseInt(sheetData.toeRR),
        },
      });

      console.log("Request Successful - Sheet Added", data);

      // Reset form fields after submission
      setEventData({
        event: "",
        session: "",
        trackCondition: "",
        trackTemp: "",
        car: "",
        driver: "",
        tyrePressureLF: "",
        tyrePressureRF: "",
        tyrePressureLR: "",
        tyrePressureRR: "",
        rideHeightLF: "",
        rideHeightRF: "",
        rideHeightLR: "",
        rideHeightRR: "",
        camberLF: "",
        camberRF: "",
        camberLR: "",
        camberRR: "",
        toeLF: "",
        toeRF: "",
        toeLR: "",
        toeRR: "",
      });

      refetch();
      onClose();
    } catch (error) {
      console.error("Request Failed - Adding New Sheet:", error.message);

      if (error.networkError) {
        console.error("Network Error:", error.networkError.result.errors);
      }

      if (error.graphQLErrors) {
        error.graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      aria-hidden="false"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50"
    >
      <div className="relative w-full max-w-screen-xl max-h-full p-4">
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
          <form className="p-4 md:p-6" onSubmit={handleSheetSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3 md:gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Event&nbsp;and&nbsp;Session&nbsp;Selection
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label
                          htmlFor="event"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Event
                        </label>
                        <select
                          name="event"
                          id="event"
                          value={sheetData.event}
                          onChange={handleChange}
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
                      <div className="w-1/2">
                        <label
                          htmlFor="session"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Session
                        </label>
                        <select
                          name="session"
                          id="session"
                          value={sheetData.session}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          required
                        >
                          <option value="" disabled selected hidden>
                            Please select...
                          </option>
                          <option value="Practice 1">Practice 1</option>
                          <option value="Practice 2">Practice 2</option>
                          <option value="Practice 3">Practice 3</option>
                          <option value="Practice 4">Practice 4</option>
                          <option value="Practice 5">Practice 5</option>
                          <option value="Qualifying">Qualifying</option>
                          <option value="Race 1">Race 1</option>
                          <option value="Race 2">Race 2</option>
                          <option value="Race 3">Race 3</option>
                          <option value="Race 4">Race 4</option>
                          <option value="Race 5">Race 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-1/2">
                        <label
                          htmlFor="track-condition"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Track&nbsp;Condition
                        </label>
                        <select
                          name="track-condition"
                          id="track-condition"
                          value={sheetData.trackCondition}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          required
                        >
                          <option value="" disabled selected hidden>
                            Please select...
                          </option>
                          <option value="Dry">Dry</option>
                          <option value="Damp">Damp</option>
                          <option value="Wet">Wet</option>
                        </select>
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="track-temp"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Track&nbsp;Temp&nbsp;(°C)
                        </label>
                        <input
                          type="number"
                          name="track-temp"
                          id="track-temp"
                          value={sheetData.trackTemp}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter track temp"
                          required
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Car&nbsp;and&nbsp;Driver&nbsp;Selection
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-full">
                        <label
                          htmlFor="car"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Car
                        </label>
                        <select
                          name="car"
                          id="car"
                          value={sheetData.car}
                          onChange={handleChange}
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
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-full">
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
                          value={sheetData.driver}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter driver name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Tyre&nbsp;Pressure&nbsp;(psi)
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-front-pressure"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="left-front-pressure"
                          id="left-front-pressure"
                          value={sheetData.tyrePressureLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter tyre pressure"
                          required
                          min="0"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-front-pressure"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="right-front-pressure"
                          id="right-front-pressure"
                          value={sheetData.tyrePressureRF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter tyre pressure"
                          required
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-rear-pressure"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="left-rear-pressure"
                          id="left-rear-pressure"
                          value={sheetData.tyrePressureLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter tyre pressure"
                          required
                          min="0"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-rear-pressure"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="right-rear-pressure"
                          id="right-rear-pressure"
                          value={sheetData.tyrePressureRR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter tyre pressure"
                          required
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Ride&nbsp;Height&nbsp;(mm)
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-front-height"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="left-front-height"
                          id="left-front-height"
                          value={sheetData.rideHeightLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter ride height"
                          required
                          min="0"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-front-height"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="right-front-height"
                          id="right-front-height"
                          value={sheetData.rideHeightRF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter ride height"
                          required
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-rear-height"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="left-rear-height"
                          id="left-rear-height"
                          value={sheetData.rideHeightLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter ride height"
                          required
                          min="0"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-rear-height"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="right-rear-height"
                          id="right-rear-height"
                          value={sheetData.rideHeightRR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter ride height"
                          required
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Camber&nbsp;(°)
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-front-camber"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="left-front-camber"
                          id="left-front-camber"
                          value={sheetData.camberLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-front-camber"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="right-front-camber"
                          id="right-front-camber"
                          value={sheetData.camberRF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-rear-camber"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="left-rear-camber"
                          id="left-rear-camber"
                          value={sheetData.camberLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-rear-camber"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="right-rear-camber"
                          id="right-rear-camber"
                          value={sheetData.camberRR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-md font-semibold text-black">
                    Toe&nbsp;(mm)
                  </h4>
                  <div className="pt-4 border-t">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-front-toe"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="left-front-toe"
                          id="left-front-toe"
                          value={sheetData.toeLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-front-toe"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="right-front-toe"
                          id="right-front-toe"
                          value={sheetData.toeRF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                      <div className="w-1/2">
                        <label
                          htmlFor="left-rear-toe"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="left-rear-toe"
                          id="left-rear-toe"
                          value={sheetData.toeLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="right-rear-toe"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="right-rear-toe"
                          id="right-rear-toe"
                          value={sheetData.toeRR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
