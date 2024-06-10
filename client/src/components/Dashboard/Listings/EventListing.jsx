import React from "react";
import EventDetails from "./ListingDetails/EventDetails";

function EventListing({ events, refetch }) {
  return (
    <div className="flex flex-row flex-wrap">
      {events.map((event) => (
        <EventDetails
          key={`${event.id}-${event.date}`} // Combined key of event.id and event.date, incase event.id has a duplicate
          event={event} // Pass event to eventDetails for handleDelete function
          refetch={refetch} // Pass refetch query to eventDetails for handleDelete function
        />
      ))}
    </div>
  );
}

export default EventListing;
