import React, { useState } from "react";
import NewCarModal from "../../NewCarModal";

function DashboardCars() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              className="text-center text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 w-max"
            >
              Add Car
            </button>
          </div>
          <div className="flex flex-row">
            <a
              href="#"
              className="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
                Porsche 992 GT3 Cup
              </h5>
              <p className="font-normal text-black">
                <span className="font-bold">Year:</span> 2021
              </p>
              <p className="font-normal text-black">
                <span className="font-bold">Race Number:</span> #12
              </p>
              <p className="font-normal text-black">
                <span className="font-bold">Odometer:</span> 6,628km
              </p>
            </a>
          </div>
        </div>
      </div>
      <NewCarModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default DashboardCars;
