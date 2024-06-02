import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_CAR = gql`
  mutation addCar(
    $make: String!
    $model: String!
    $year: Int!
    $raceNumber: Int
    $odometer: Int
  ) {
    addCar(
      make: $make
      model: $model
      year: $year
      raceNumber: $raceNumber
      odometer: $odometer
    ) {
      _id
      make
      model
      year
      raceNumber
      odometer
      owner {
        _id
        email
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $type: String!
    $championship: String
    $round: Int
    $track: String!
    $date: Date!
  ) {
    addEvent(
      type: $type
      championship: $championship
      round: $round
      track: $track
      date: $date
    ) {
      _id
      type
      championship
      round
      track
      date
      owner {
        _id
        email
      }
    }
  }
`;

export const ADD_SHEET = gql`
  mutation addSheet(
    $event: String!
    $session: String!
    $trackCondition: String!
    $trackTemp: Int
    $car: String!
    $driver: String!
    $tyrePressureLF: Int!
    $tyrePressureRF: Int!
    $tyrePressureLR: Int!
    $tyrePressureRR: Int!
    $rideHeightLF: Int!
    $rideHeightRF: Int!
    $rideHeightLR: Int!
    $rideHeightRR: Int!
    $camberLF: Int!
    $camberRF: Int!
    $camberLR: Int!
    $camberRR: Int!
    $toeLF: Int!
    $toeRF: Int!
    $toeLR: Int!
    $toeRR: Int!
  ) {
    addSheet(
      event: $event
      session: $session
      trackCondition: $trackCondition
      trackTemp: $trackTemp
      car: $car
      driver: $driver
      tyrePressureLF: $tyrePressureLF
      tyrePressureRF: $tyrePressureRF
      tyrePressureLR: $tyrePressureLR
      tyrePressureRR: $tyrePressureRR
      rideHeightLF: $rideHeightLF
      rideHeightRF: $rideHeightRF
      rideHeightLR: $rideHeightLR
      rideHeightRR: $rideHeightRR
      camberLF: $camberLF
      camberRF: $camberRF
      camberLR: $camberLR
      camberRR: $camberRR
      toeLF: $toeLF
      toeRF: $toeRF
      toeLR: $toeLR
      toeRR: $toeRR
    ) {
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
      owner {
        _id
        email
      }
    }
  }
`;
