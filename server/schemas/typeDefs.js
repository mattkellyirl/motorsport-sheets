const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

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

  # Define the Event type
  type Event {
    _id: ID
    type: String
    championship: String
    round: Int
    track: String
    date: Date
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
    cars(ownerId: ID!): [Car]

    # Fetch car by ID
    car(id: ID!): Car

    # Fetch all events
    events(ownerId: ID!): [Event]

    # Fetch event by ID
    event(id: ID!): Event
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

    # Add a new event
    addEvent(
      type: String!
      championship: String!
      round: Int!
      track: String!
      date: Date!
    ): Event
  }
`;

module.exports = typeDefs;
