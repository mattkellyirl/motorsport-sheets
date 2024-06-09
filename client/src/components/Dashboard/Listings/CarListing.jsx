import React from "react";
import CarDetails from "./ListingDetails/CarDetails";

function CarListing({ cars }) {
  return (
    <div className="flex flex-row flex-wrap">
      {cars.map((car) => (
        <CarDetails key={`${car._id}-${car.raceNumber}`} car={car} /> // Combined key of car._id and car.raceNumber, in case car._id is a duplicate
      ))}
    </div>
  );
}

export default CarListing;
