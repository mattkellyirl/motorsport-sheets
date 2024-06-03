import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../utils/queries";
import NewCarModal from "./Modals/NewCarModal";
import CarListing from "./Listings/CarListing";
import AuthService from "../../utils/authService";

function DashboardCars() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userProfile = AuthService.getProfile();
    // console.log("User Profile:", userProfile);
    setUserId(userProfile.data._id);
  }, []);

  const { data, refetch } = useQuery(GET_CARS, {
    variables: { ownerId: userId },
    skip: !userId,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col p-4 h-auto rounded bg-gray-100">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold tracking-tight text-black mb-2">
              Your Cars:
            </p>

            <button
              onClick={openModal}
              className="text-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 w-max"
            >
              Add Car
            </button>
          </div>
          {!data || data.cars.length === 0 ? (
            <p className="text-md font-normal text-black">
              You currently have no cars.
            </p>
          ) : (
            <CarListing cars={data.cars} />
          )}
        </div>
      </div>
      <NewCarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        refetch={refetch}
      />
    </div>
  );
}

export default DashboardCars;
