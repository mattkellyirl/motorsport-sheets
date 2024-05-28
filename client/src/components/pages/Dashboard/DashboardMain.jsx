import React from "react";

function DashboardMain() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Setup Sheets:
          </p>
          {/* <p className="text-md font-normal text-black">
            You currently have no setup sheets. Click on the
            <span className="font-semibold"> Your Sheets</span> button to add
            one.
          </p> */}
          <div className="flex flex-row">
            <a
              href="#"
              class="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Porsche 992 GT3 Cup
              </h5>
              <p class="font-normal text-black">
                <span className="font-bold">Track:</span> The Bend Motorsport
                Park
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Session:</span> Practice #1
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Driver:</span> #12, Harri Jones
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-4 p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Cars:
          </p>
          {/* <p className="text-md font-normal text-black">
            You currently have no cars. Click on the
            <span className="font-semibold"> Your Cars</span> button to add one.
          </p> */}

          <div className="flex flex-row">
            <a
              href="#"
              class="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Porsche 992 GT3 Cup
              </h5>
              <p class="font-normal text-black">
                <span className="font-bold">Year:</span> 2021
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Odometer:</span> 6,628km
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Driver:</span> #12, Harri Jones
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-4 p-4 h-auto rounded bg-gray-100">
          <p className="text-xl font-bold tracking-tight text-black mb-2">
            Recent Events:
          </p>
          {/* <p className="text-md font-normal text-black">
            You currently have no events. Click on the
            <span className="font-semibold"> Your Events</span> button to add one.
          </p> */}

          <div className="flex flex-row">
            <a
              href="#"
              class="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
            >
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Round 1, Porsche Carrera Cup Australia
              </h5>
              <p class="font-normal text-black">
                <span className="font-bold">Date:</span> 01/01/2024
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Track:</span> The Bend Motorsport
                Park
              </p>
              <p class="font-normal text-black">
                <span className="font-bold">Driver:</span> #12, Harri Jones
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
