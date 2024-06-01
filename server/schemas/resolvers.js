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
        if (!user) {
          console.error(`Request Failed - User ${id} Not Found`);
          throw new Error(`Request Failed - User ${id} Not Found`);
        } else {
          console.log(`Request Successful - User ${id}:`, user);
          return user;
        }
      } catch (error) {
        console.error(`Request Failed - User ${id}:`, error.message);
        throw new Error(`Request Failed - User ${id}`);
      }
    },
  },

  Mutation: {
    addUser: async (_, { email, password }) => {
      try {
        console.log(`Signup attempt for: ${email}`);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          console.error(`Request Failed - User ${email} Already Exists`);
          throw new Error(`Request Failed - User ${email} Already Exists`);
        }

        // Create new user
        console.log("Creating new user...");
        const newUser = await User.create({ email, password });
        console.log(`Request Successful - Created User ${email}:`, newUser);

        // Generate token
        console.log("Generating token...");
        const token = signToken(newUser);
        console.log(`Token generated for user ${email}`);

        return { token, user: newUser };
      } catch (error) {
        console.error(`Request Failed - Add User ${email}:`, error.message);
        throw new Error(`Request Failed - Add User ${email}`);
      }
    },

    // Login Existing User
    loginUser: async (_, { email, password }) => {
      try {
        console.log(`Login attempt for: ${email}`);

        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(`User ${email} Not Found`);
        } else {
          const validPassword = await user.isCorrectPassword(password);
          if (!validPassword) {
            throw new AuthenticationError(
              "Invalid Password - Please Try Again"
            );
          } else {
            console.log("Generating token...");
            const token = signToken(user);
            console.log(`Token generated for user ${email}`);
            console.log(`Request Successful - Logged In User ${email}:`, user);
            return { token, user };
          }
        }
      } catch (error) {
        console.error(
          `Request Failed - Logging In User ${email}:`,
          error.message
        );
        throw new Error(`Request Failed - Logging In User ${email}`);
      }
    },
  },
};

module.exports = resolvers;
