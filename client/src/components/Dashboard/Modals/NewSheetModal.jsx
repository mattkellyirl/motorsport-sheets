import React, { useState, useEffect } from "react";
import { ADD_SHEET } from "../../../utils/mutations";
import { GET_EVENTS, GET_CARS } from "../../../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import AuthService from "../../../utils/authService";
import sheetTitleGen from "../../../utils/sheetTitleGen";

function NewSheetModal({ isOpen, onClose, refetch }) {
  // Initialize state for userId and sheetTitle before changing state with fetched data
  const [userId, setUserId] = useState(null);
  const [sheetTitle, setSheetTitle] = useState("");

  // Initialise empty form fields when component first rendered
  const [sheetData, setSheetData] = useState({
    title: "",
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

  // Initialize the addSheet mutation for adding a new setup sheet
  const [addSheet] = useMutation(ADD_SHEET);

  // Extract the userProfile from AuthService, and setUserId to userProfile.data._id
  useEffect(() => {
    const userProfile = AuthService.getProfile();
    setUserId(userProfile.data._id);
  }, []);

  // Fetch event data specific to user to render in event dropdown
  const { data: eventsData } = useQuery(GET_EVENTS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  // Fetch car data specific to user to render in car dropdown
  const { data: carsData } = useQuery(GET_CARS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  // Extract data to use for custom setup sheet title from sheetData and pass it through sheetTitleGen helper to create custom setup sheet title
  useEffect(() => {
    if (
      sheetData.event &&
      sheetData.car &&
      sheetData.session &&
      sheetData.driver
    ) {
      const eventName = sheetData.event;
      const carName = sheetData.car;
      const sessionName = sheetData.session;
      const driverName = sheetData.driver;

      const generatedTitle = sheetTitleGen(
        eventName,
        carName,
        sessionName,
        driverName
      );

      setSheetTitle(generatedTitle);
    }
  }, [sheetData]);

  // Automatically update sheetData based on input values in New Sheet form
  const handleChange = (event) => {
    setSheetData({ ...sheetData, [event.target.name]: event.target.value });
  };

  // Handle the submission of the New Sheet form
  const handleSheetSubmit = async (event) => {
    event.preventDefault();
    console.log("Attempting to add new sheet:", sheetData);

    try {
      const { data } = await addSheet({
        variables: {
          ...sheetData,
          title: sheetTitle,
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
      setSheetData({
        title: "",
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

      // Refetch data to refresh the page and display the latest setup sheets
      refetch();

      // Close the New Sheet Modal once form submitted
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
                          <option value="" disabled hidden>
                            Please select...
                          </option>

                          {eventsData.events.map((event) => (
                            <option key={`${event._id}-${event.date}`}>
                              {event.championship
                                ? `${event.championship} Round ${event.round}`
                                : `${event.type} at ${event.track}`}
                            </option>
                          ))}
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
                          <option value="" disabled hidden>
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
                          htmlFor="trackCondition"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Track&nbsp;Condition
                        </label>
                        <select
                          name="trackCondition"
                          id="trackCondition"
                          value={sheetData.trackCondition}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          required
                        >
                          <option value="" disabled hidden>
                            Please select...
                          </option>
                          <option value="Dry">Dry</option>
                          <option value="Damp">Damp</option>
                          <option value="Wet">Wet</option>
                        </select>
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="trackTemp"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Track&nbsp;Temp&nbsp;(°C)
                        </label>
                        <input
                          type="number"
                          name="trackTemp"
                          id="trackTemp"
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
                          <option value="" disabled hidden>
                            Please select...
                          </option>

                          {carsData.cars.map((car) => (
                            <option
                              key={`${car._id}-${car.raceNumber}`}
                              value={`${car.make} ${car.model}`}
                            >
                              {car.make} {car.model}
                            </option>
                          ))}
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
                          htmlFor="tyrePressureLF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="tyrePressureLF"
                          id="tyrePressureLF"
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
                          htmlFor="tyrePressureRF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="tyrePressureRF"
                          id="tyrePressureRF"
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
                          htmlFor="tyrePressureLR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="tyrePressureLR"
                          id="tyrePressureLR"
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
                          htmlFor="tyrePressureRR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="tyrePressureRR"
                          id="tyrePressureRR"
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
                          htmlFor="rideHeightLF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="rideHeightLF"
                          id="rideHeightLF"
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
                          htmlFor="rideHeightRF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="rideHeightRF"
                          id="rideHeightRF"
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
                          htmlFor="rideHeightLR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="rideHeightLR"
                          id="rideHeightLR"
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
                          htmlFor="rideHeightRR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="rideHeightRR"
                          id="rideHeightRR"
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
                          htmlFor="camberLF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="camberLF"
                          id="camberLF"
                          value={sheetData.camberLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="camberRF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="camberRF"
                          id="camberRF"
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
                          htmlFor="camberLR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="camberLR"
                          id="camberLR"
                          value={sheetData.camberLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter camber setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="camberRR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="camberRR"
                          id="camberRR"
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
                          htmlFor="toeLF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Front
                        </label>
                        <input
                          type="number"
                          name="toeLF"
                          id="toeLF"
                          value={sheetData.toeLF}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="toeRF"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Front
                        </label>
                        <input
                          type="number"
                          name="toeRF"
                          id="toeRF"
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
                          htmlFor="toeLR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Left Rear
                        </label>
                        <input
                          type="number"
                          name="toeLR"
                          id="toeLR"
                          value={sheetData.toeLR}
                          onChange={handleChange}
                          className="block w-full p-2.5 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Enter toe setting"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="toeRR"
                          className="block mb-2 text-sm font-semibold text-black"
                        >
                          Right Rear
                        </label>
                        <input
                          type="number"
                          name="toeRR"
                          id="toeRR"
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
