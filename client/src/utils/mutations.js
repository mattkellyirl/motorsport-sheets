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
    $date: String!
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
