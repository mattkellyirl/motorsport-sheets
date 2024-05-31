const User = require("../models/User");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // Get All Users
    users: async () => {
      try {
        const allUsers = await User.find({});
        console.log("Request Successful - All Users", allUsers);
        return allUsers;
      } catch (error) {
        console.error("Request Failed - All Users", error.message);
        throw new Error("Request Failed - All Users");
      }
    },
    // Get User By ID
    user: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        console.log(`Request Successful - User ${id}:`, user);
        return user;
      } catch (error) {
        console.error(`Request Failed - User ${id}:`, error.message);
        throw new Error(`Request Failed - User ${id}`);
      }
    },
  },

  Mutation: {
    // Add New User
    addUser: async (_, { email, password }) => {
      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new Error("User already exists");
        } else {
          const newUser = await User.create({ email, password });
          const token = signToken(newUser);
          console.log("User created successfully:", newUser);
          return { token, user: newUser };
        }
      } catch (error) {
        console.error("Error adding user:", error.message);
        throw new Error(error.message);
      }
    },

    // Login existing user
    loginUser: async (_, { email, password }) => {
      try {
        console.log("Attempting to login user:", email);
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError("Invalid credentials");
        }

        const validPassword = await user.isCorrectPassword(password);
        if (!validPassword) {
          throw new AuthenticationError("Invalid credentials");
        }

        const token = signToken(user);
        console.log("User logged in successfully:", user);
        return { token, user };
      } catch (error) {
        console.error("Error logging in user:", error.message);
        console.error(error.stack); // Log the stack trace
        throw new Error(`Error logging in user: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
