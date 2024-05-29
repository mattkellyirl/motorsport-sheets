import React, { useState } from "react";
import NewSheetModal from "../../NewSheetModal";

function DashboardSheets() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col p-4 h-auto rounded bg-gray-100">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold tracking-tight text-black mb-2">
              Your Sheets:
            </p>

            <button
              onClick={openModal}
              className="text-center text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 w-max"
            >
              Add Sheet
            </button>
          </div>
          <div className="flex flex-row">
            <a
              href="#"
              class="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Setup Sheet #1
              </h5>
              <p class="font-normal text-black">
                <span className="font-bold">Car:</span> Porsche 992 GT3 Cup
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Event:</span> Porsche Carrera Cup
                Australia, Round 1
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Session:</span> Qualifying
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Driver:</span> Harri Jones
              </p>
            </a>
          </div>
        </div>
      </div>
      <NewSheetModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default DashboardSheets;
