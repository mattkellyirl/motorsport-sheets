import React, { useState } from "react";
import NewEventModal from "../../NewEventModal";

function DashboardEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col p-4 h-auto rounded bg-gray-100">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold tracking-tight text-black mb-2">
              Your Events:
            </p>

            <button
              onClick={openModal}
              className="text-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 w-max"
            >
              Add Event
            </button>
          </div>
          <div className="flex flex-row">
            <a
              href="#"
              class="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Porsche Carrera Cup Australia, Round 1
              </h5>
              <p class="font-normal text-black">
                <span className="font-bold">Type:</span> Race Event
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Track:</span> The Bend Motorsport
                Park
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Date:</span> 01/01/2024
              </p>
            </a>
          </div>
        </div>
      </div>
      <NewEventModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default DashboardEvents;
