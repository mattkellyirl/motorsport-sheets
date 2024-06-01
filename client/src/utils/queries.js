import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars {
    cars {
      _id
      make
      model
      year
      raceNumber
      odometer
    }
  }
`;
