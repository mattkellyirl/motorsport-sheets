const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Define the User type
  type User {
    _id: ID
    email: String
  }

  # Define the Car type
  type Car {
    _id: ID
    make: String
    model: String
    year: Int
    raceNumber: Int
    odometer: Int
    owner: User
  }

  # Define the Auth type, which includes a token and a user
  type Auth {
    token: ID
    user: User
  }

  # Define the Query type for fetching data
  type Query {
    # Fetch all users
    users: [User]

    # Fetch user by ID
    user(id: ID!): User

    # Fetch all cars
    cars: [Car]

    # Fetch car by ID
    car(id: ID!): Car
  }

  # Define the Mutation type for modifying data
  type Mutation {
    # Add a new user and return Auth
    addUser(email: String!, password: String!): Auth

    # Login an existing user and return Auth
    loginUser(email: String!, password: String!): Auth

    # Add a new car
    addCar(
      make: String!
      model: String!
      year: Int!
      raceNumber: Int
      odometer: Int
    ): Car
  }
`;

module.exports = typeDefs;
