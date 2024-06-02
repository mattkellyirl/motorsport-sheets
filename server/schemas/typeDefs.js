const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  # Define the User type
  type User {
    _id: ID
    email: String
  }

  # Define the Auth type, which includes a token and a user
  type Auth {
    token: ID
    user: User
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

  # Define the Sheet type
  type Sheet {
    _id: ID
    event: String
    session: String
    trackCondition: String
    trackTemp: Int
    car: String
    driver: String
    tyrePressureLF: Int
    tyrePressureRF: Int
    tyrePressureLR: Int
    tyrePressureRR: Int
    rideHeightLF: Int
    rideHeightRF: Int
    rideHeightLR: Int
    rideHeightRR: Int
    camberLF: Int
    camberRF: Int
    camberLR: Int
    camberRR: Int
    toeLF: Int
    toeRF: Int
    toeLR: Int
    toeRR: Int
    owner: User
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

    # Fetch all sheets
    sheets(ownerId: ID!): [Sheet]

    # Fetch sheet by ID
    sheet(id: ID!): Sheet
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
      ownerId: ID!
    ): Car

    # Add a new event
    addEvent(
      type: String!
      championship: String
      round: Int
      track: String!
      date: Date!
      ownerId: ID!
    ): Event

    # Add a new sheet
    addSheet(
      event: String!
      session: String!
      trackCondition: String!
      trackTemp: Int
      car: String!
      driver: String!
      tyrePressureLF: Int!
      tyrePressureRF: Int!
      tyrePressureLR: Int!
      tyrePressureRR: Int!
      rideHeightLF: Int!
      rideHeightRF: Int!
      rideHeightLR: Int!
      rideHeightRR: Int!
      camberLF: Int!
      camberRF: Int!
      camberLR: Int!
      camberRR: Int!
      toeLF: Int!
      toeRF: Int!
      toeLR: Int!
      toeRR: Int!
      ownerId: ID!
    ): Sheet
  }
`;

module.exports = typeDefs;
