const { GraphQLScalarType, Kind } = require("graphql");
const { User, Car, Event, Sheet } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

// Custom scalar to handle Date objects in GraphQL (Used for Event Date)
const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom scaler to handle event dates",
  serialize(value) {
    return value instanceof Date ? value.toISOString() : null;
  },
  parseValue(value) {
    return typeof value === "string" ? new Date(value) : null;
  },
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? new Date(ast.value) : null;
  },
});

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
    // Get All Cars
    cars: async (_, { ownerId }) => {
      try {
        const allCars = await Car.find({ owner: ownerId });
        console.log("Request Successful - All Cars", allCars);
        return allCars;
      } catch (error) {
        console.error("Request Failed - All Cars", error.message);
        throw new Error("Request Failed - All Cars");
      }
    },

    // Get Car By ID
    car: async (_, { id }) => {
      try {
        const car = await Car.findById(id).populate("owner");
        if (!car) {
          console.error(`Request Failed - Car ${id} Not Found`);
          throw new Error(`Request Failed - Car ${id} Not Found`);
        } else {
          console.log(`Request Successful - Car ${id}:`, car);
          return car;
        }
      } catch (error) {
        console.error(`Request Failed - Car ${id}`, error.message);
        throw new Error(`Request Failed - Car ${id}`);
      }
    },

    // Get All Events
    events: async (_, { ownerId }) => {
      try {
        const allEvents = await Event.find({ owner: ownerId });
        console.log("Request Successful - All Events", allEvents);
        return allEvents;
      } catch (error) {
        console.error("Request Failed - All Events", error.message);
        throw new Error("Request Failed - All Events");
      }
    },

    // Get Event By ID
    event: async (_, { id }) => {
      try {
        const event = await Event.findById(id).populate("owner");
        if (!event) {
          console.error(`Request Failed - Event ${id} Not Found`);
          throw new Error(`Request Failed - Event ${id} Not Found`);
        } else {
          console.log(`Request Successful - Event ${id}:`, event);
          return event;
        }
      } catch (error) {
        console.error(`Request Failed - Event ${id}`, error.message);
        throw new Error(`Request Failed - Event ${id}`);
      }
    },

    // Get All Sheets
    sheets: async (_, { ownerId }) => {
      try {
        const allSheets = await Sheet.find({ owner: ownerId });
        console.log("Request Successful - All Sheets", allSheets);
        return allSheets;
      } catch (error) {
        console.error("Request Failed - All Sheets", error.message);
        throw new Error("Request Failed - All Sheets");
      }
    },

    // Get Sheet By ID
    sheet: async (_, { id }) => {
      try {
        const sheet = await Sheet.findById(id).populate("owner");
        if (!sheet) {
          console.error(`Request Failed - Sheet ${id} Not Found`);
          throw new Error(`Request Failed - Sheet ${id} Not Found`);
        } else {
          console.log(`Request Successful - Sheet ${id}:`, sheet);
          return sheet;
        }
      } catch (error) {
        console.error(`Request Failed - Sheet ${id}`, error.message);
        throw new Error(`Request Failed - Sheet ${id}`);
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

    addCar: async (
      _,
      { make, model, year, raceNumber, odometer },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const car = await Car.create({
            make,
            model,
            year,
            raceNumber,
            odometer,
            owner: user._id,
          });
          console.log(`Request Successful - Added Car:`, car);
          return car;
        } catch (error) {
          console.error("Request Failed - Add Car:", error.message);
          throw new Error("Request Failed - Add Car");
        }
      }
    },

    addEvent: async (
      _,
      { type, championship, round, track, date },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const event = await Event.create({
            type,
            championship,
            round,
            track,
            date,
            owner: user._id,
          });
          console.log(`Request Successful - Added Event:`, event);
          return event;
        } catch (error) {
          console.error("Request Failed - Add Event:", error.message);
          throw new Error("Request Failed - Add Event");
        }
      }
    },

    addSheet: async (
      _,
      {
        event,
        session,
        trackCondition,
        trackTemp,
        car,
        driver,
        tyrePressureLF,
        tyrePressureRF,
        tyrePressureLR,
        tyrePressureRR,
        rideHeightLF,
        rideHeightRF,
        rideHeightLR,
        rideHeightRR,
        camberLF,
        camberRF,
        camberLR,
        camberRR,
        toeLF,
        toeRF,
        toeLR,
        toeRR,
      },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const sheet = await Sheet.create({
            event,
            session,
            trackCondition,
            trackTemp,
            car,
            driver,
            tyrePressureLF,
            tyrePressureRF,
            tyrePressureLR,
            tyrePressureRR,
            rideHeightLF,
            rideHeightRF,
            rideHeightLR,
            rideHeightRR,
            camberLF,
            camberRF,
            camberLR,
            camberRR,
            toeLF,
            toeRF,
            toeLR,
            toeRR,
            owner: user._id,
          });
          console.log(`Request Successful - Added Sheet:`, sheet);
          return sheet;
        } catch (error) {
          console.error("Request Failed - Add Sheet:", error.message);
          throw new Error("Request Failed - Add Sheet");
        }
      }
    },
  },
};

module.exports = resolvers;
