const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    //  Fetch all users
    users: async () => {
      try {
        return await User.find({});
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
    //  Fetch user by ID
    user: async (_, { id }) => {
      try {
        return User.findById(id);
      } catch (error) {
        throw new Error("Error fetching user by ID");
      }
    },
  },

  Mutation: {
    addUser: async (_, { email, password }) => {
      try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        // If user exists, throw error
        if (existingUser) {
          throw new Error("User already exists");
        } else {
          // If user doesn't exist, create user and sign token
          const newUser = await User.create({ email, password });
          const token = signToken(newUser);

          // Return token and new user
          return { token, user: newUser };
        }
      } catch (error) {
        throw new Error("Error adding user");
      }
    },

    loginUser: async (_, { email, password }) => {
      try {
        // Check to see if user exists
        const user = await User.findOne({ email });

        // If user doesn't exist, throw error
        if (!user) {
          throw new AuthenticationError("Invalid credentials");
        } else {
          // If user exists, check password
          const validPassword = await user.isCorrectPassword(password);
          // If password is incorrect, throw error
          if (!validPassword) {
            throw new AuthenticationError("Invalid credentials");
          } else {
            // If password is correct, sign in user and return token and user
            const token = signToken(user);
            return { token, user };
          }
        }
      } catch (error) {
        throw new Error("Error logging in user");
      }
    },
  },
};

module.exports = resolvers;
