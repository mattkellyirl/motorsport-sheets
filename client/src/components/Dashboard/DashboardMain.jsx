import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CARS, GET_EVENTS, GET_SHEETS } from "../../utils/queries";
import CarListing from "./Listings/CarListing";
import EventListing from "./Listings/EventListing";
import SheetListing from "./Listings/SheetListing";
import AuthService from "../../utils/authService";

function DashboardMain() {
  // Initialize state for userId before changing state with fetched data
  const [userId, setUserId] = useState(null);

  // Extract the userProfile from AuthService, and setUserId to userProfile.data._id
  useEffect(() => {
    const userProfile = AuthService.getProfile();
    // console.log("User Profile:", userProfile);
    setUserId(userProfile.data._id);
  }, []);

  // Fetch car data specific to user to render carListing
  const { data: carsData, refetch: refetchCars } = useQuery(GET_CARS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  // Fetch event data specific to user to render eventListing
  const { data: eventsData, refetch: refetchEvents } = useQuery(GET_EVENTS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  // Fetch sheet data specific to user to render sheetListing
  const { data: sheetsData, refetch: refetchSheets } = useQuery(GET_SHEETS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        {/* Car Listing: */}
        <div className="flex flex-col p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Cars:
          </p>
          {!carsData || carsData.cars.length === 0 ? (
            <p className="text-md font-normal text-black">
              You currently have no cars. Click on the
              <span className="font-semibold"> Your Cars</span> button to add
              one.
            </p>
          ) : (
            <CarListing cars={carsData.cars} refetch={refetchCars} />
          )}
        </div>

        {/* Event Listing: */}
        <div className="flex flex-col mt-4 p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Events:
          </p>
          {!eventsData || eventsData.events.length === 0 ? (
            <p className="text-md font-normal text-black">
              You currently have no events. Click on the
              <span className="font-semibold"> Your Events</span> button to add
              one.
            </p>
          ) : (
            <EventListing events={eventsData.events} refetch={refetchEvents} />
          )}
        </div>

        {/* Sheet Listing: */}
        <div className="flex flex-col mt-4 p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Setup Sheets:
          </p>
          {!sheetsData || sheetsData.sheets.length === 0 ? (
            <p className="text-md font-normal text-black">
              You currently have no setup sheets. Click on the
              <span className="font-semibold"> Your Sheets</span> button to add
              one.
            </p>
          ) : (
            <SheetListing sheets={sheetsData.sheets} refetch={refetchSheets} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
