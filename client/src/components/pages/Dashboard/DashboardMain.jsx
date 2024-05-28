import React from "react";

function DashboardMain() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col p-4 h-48 rounded bg-gray-100">
          <p className="text-xl font-semibold text-black">Your Setup Sheets:</p>
          <p className="text-md font-normal text-black">
            You currently have no setup sheets. Click on the
            <span className="font-semibold"> Your Sheets</span> button to get
            make one.
          </p>
        </div>

        <div className="flex flex-col my-4 p-4 h-48 rounded bg-gray-100">
          <p className="text-xl font-semibold text-black">Your Cars:</p>
          <p className="text-md font-normal text-black">
            You currently have no cars. Click on the
            <span className="font-semibold"> Your Cars</span> button to get make
            one.
          </p>
        </div>

        <div className="flex flex-col p-4 h-48 rounded bg-gray-100">
          <p className="text-xl font-semibold text-black">Your Events:</p>
          <p className="text-md font-normal text-black">
            You currently have no setup sheets. Click on the
            <span className="font-semibold"> Your Events</span> button to get
            make one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
