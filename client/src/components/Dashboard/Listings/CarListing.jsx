import React from "react";
import CarDetails from "./ListingDetails/CarDetails";

function CarListing({ cars, refetch }) {
  return (
    <div className="flex flex-row flex-wrap">
      {cars.map((car) => (
        <CarDetails
          key={`${car._id}-${car.raceNumber}`} // Combined key of car._id and car.raceNumber, in case car._id is a duplicate
          car={car} // Pass car to carDetails for handleDelete function
          refetch={refetch} // Pass refetch query to carDetails for handleDelete function
        />
      ))}
    </div>
  );
}

export default CarListing;
