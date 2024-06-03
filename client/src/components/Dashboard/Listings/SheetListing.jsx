import React from "react";

function SheetListing({ sheets }) {
  return (
    <div className="flex flex-row flex-wrap">
      {sheets.map((sheet) => (
        <a
          key={`${sheet.id}-${sheet.event}-${sheet.session}`} // Combined key of sheet.id, sheet.event, sheet.session, incase sheet.id has a duplicate
          href="#"
          className="block max-w-sm p-4 mr-4 mb-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
            {sheet.title}
          </h5>
          <p className="font-normal text-black">
            <span className="font-bold">Car:</span> {sheet.car}
          </p>

          <p className="font-normal text-black">
            <span className="font-bold">Event:</span> {sheet.event}
          </p>

          <p className="font-normal text-black">
            <span className="font-bold">Session:</span> {sheet.session}
          </p>
          <p className="font-normal text-black">
            <span className="font-bold">Driver:</span> {sheet.driver}
          </p>
        </a>
      ))}
    </div>
  );
}

export default SheetListing;
