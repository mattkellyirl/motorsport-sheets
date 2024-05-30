const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  # Define the Query type for fetching data
  type Query {
    # Fetch all users
    users: [User]

    # Fetch user by ID
    user(id: ID!): User
  }

  # Define the Mutation type for modifying data
  type Mutation {
    # Add a new user and return Auth
    addUser(email: String!, password: String!): Auth

    # Login an existing user and return Auth
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
