import React from "react";

function EventListing({ events }) {
  return (
    <div className="flex flex-row">
      {events.map((event) => (
        <a
          key={event.id}
          href="#"
          className="block max-w-sm p-4 mr-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
            {event.championship || "Test Event"}
            {event.round ? `, Round ${event.round}` : ""}
          </h5>
          <p className="font-normal text-black">
            <span className="font-bold">Type:</span> {event.type}
          </p>
          <p className="font-normal text-black">
            <span className="font-bold">Track:</span> {event.track}
          </p>
          <p className="font-normal text-black">
            <span className="font-bold">Date:</span>{" "}
            {new Date(event.date).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
}

export default EventListing;
