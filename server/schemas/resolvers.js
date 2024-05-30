const { User } = require("../models");
// const { signToken, AuthenticationError } = require("../utils/auth"); don't remove this line, will need later

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

    user: async (_, { id }) => {
      try {
        return User.findById(id);
      } catch (error) {
        throw new Error("Error fetching user by ID");
      }
    },
  },

  Mutation: {},
};

module.exports = resolvers;
