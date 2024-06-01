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

export const GET_EVENTS = gql`
  query GetEvents($ownerId: ID!) {
    events(ownerId: $ownerId) {
      _id
      type
      championship
      round
      track
      date
    }
  }
`;
