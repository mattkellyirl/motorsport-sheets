import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars($ownerId: ID!) {
    cars(ownerId: $ownerId) {
      _id
      make
      model
      year
      raceNumber
      odometer
    }
  }
`;
