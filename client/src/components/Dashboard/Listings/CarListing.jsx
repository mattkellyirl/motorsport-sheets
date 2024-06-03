import React from "react";

function CarListing({ cars }) {
  return (
    <div className="flex flex-row flex-wrap">
      {cars.map((car) => (
        <a
          key={`${car.id}-${car.raceNumber}`} // Combined key of car.id and car.raceNumber, incase car.id is a duplicate
          href="#"
          className="block max-w-sm p-4 mr-4 mb-4 bg-white border border-gray-200 rounded shadow hover:bg-gray-100"
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
            {car.make} {car.model}
          </h5>
          <p className="font-normal text-black">
            <span className="font-bold">Year:</span> {car.year}
          </p>
          <p className="font-normal text-black">
            <span className="font-bold">Race Number:</span> {car.raceNumber}
          </p>
          <p className="font-normal text-black">
            <span className="font-bold">Odometer:</span> {car.odometer}km
          </p>
        </a>
      ))}
    </div>
  );
}

export default CarListing;
