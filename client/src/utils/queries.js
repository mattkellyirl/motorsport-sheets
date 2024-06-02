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

export const GET_SHEETS = gql`
  query GetSheets($ownerId: ID!) {
    sheets(ownerId: $ownerId) {
      _id
      event
      session
      trackCondition
      trackTemp
      car
      driver
      tyrePressureLF
      tyrePressureRF
      tyrePressureLR
      tyrePressureRR
      rideHeightLF
      rideHeightRF
      rideHeightLR
      rideHeightRR
      camberLF
      camberRF
      camberLR
      camberRR
      toeLF
      toeRF
      toeLR
      toeRR
    }
  }
`;
