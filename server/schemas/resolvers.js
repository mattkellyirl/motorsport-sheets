const { User, Car, Event, Sheet } = require("../models");
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
    user: async (_, { _id }) => {
      try {
        const user = await User.findById(_id);
        if (!user) {
          console.error(`Request Failed - User ${_id} Not Found`);
          throw new Error(`Request Failed - User ${_id} Not Found`);
        } else {
          console.log(`Request Successful - User ${_id}:`, user);
          return user;
        }
      } catch (error) {
        console.error(`Request Failed - User ${_id}:`, error.message);
        throw new Error(`Request Failed - User ${_id}`);
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
    car: async (_, { _id }) => {
      try {
        const car = await Car.findById(_id).populate("owner");
        if (!car) {
          console.error(`Request Failed - Car ${_id} Not Found`);
          throw new Error(`Request Failed - Car ${_id} Not Found`);
        } else {
          console.log(`Request Successful - Car ${_id}:`, car);
          return car;
        }
      } catch (error) {
        console.error(`Request Failed - Car ${_id}`, error.message);
        throw new Error(`Request Failed - Car ${_id}`);
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
    event: async (_, { _id }) => {
      try {
        const event = await Event.findById(_id).populate("owner");
        if (!event) {
          console.error(`Request Failed - Event ${_id} Not Found`);
          throw new Error(`Request Failed - Event ${_id} Not Found`);
        } else {
          console.log(`Request Successful - Event ${_id}:`, event);
          return event;
        }
      } catch (error) {
        console.error(`Request Failed - Event ${_id}`, error.message);
        throw new Error(`Request Failed - Event ${_id}`);
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
    sheet: async (_, { _id }) => {
      try {
        const sheet = await Sheet.findById(_id).populate("owner");
        if (!sheet) {
          console.error(`Request Failed - Sheet ${_id} Not Found`);
          throw new Error(`Request Failed - Sheet ${_id} Not Found`);
        } else {
          console.log(`Request Successful - Sheet ${_id}:`, sheet);
          return sheet;
        }
      } catch (error) {
        console.error(`Request Failed - Sheet ${_id}`, error.message);
        throw new Error(`Request Failed - Sheet ${_id}`);
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

    // Add Car
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

    // Edit Car
    editCar: async (
      _,
      { _id, make, model, year, raceNumber, odometer },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const car = await Car.findByIdAndUpdate(
            _id,
            { make, model, year, raceNumber, odometer },
            { new: true }
          );
          if (!car) {
            throw new Error(`Car ${_id} Not Found`);
          }
          console.log("Request Successful - Edited Car:", car);
          return car;
        } catch (error) {
          console.error("Request Failed - Edit Car:", error.message);
          throw new Error("Request Failed - Edit Car");
        }
      }
    },

    // Delete Car
    deleteCar: async (_, { _id }, { user }) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const car = await Car.findByIdAndDelete(_id);
          if (!car) {
            throw new Error("Car not found");
          }
          console.log(`Request Successful - Deleted Car:`, car);
          return car;
        } catch (error) {
          console.error("Request Failed - Delete Car:", error.message);
          throw new Error("Request Failed - Delete Car");
        }
      }
    },

    // Add Event
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

    // Edit Event
    editEvent: async (
      _,
      { _id, type, championship, round, track, date },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const event = await Event.findByIdAndUpdate(
            _id,
            { type, championship, round, track, date },
            { new: true }
          );
          if (!event) {
            throw new Error(`Event ${_id} Not Found`);
          }
          console.log("Request Successful - Edited Event:", event);
          return event;
        } catch (error) {
          console.error("Request Failed - Edit Event:", error.message);
          throw new Error("Request Failed - Edit Event");
        }
      }
    },

    // Delete Event
    deleteEvent: async (_, { _id }, { user }) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const event = await Event.findByIdAndDelete(_id);
          if (!event) {
            throw new Error("Event not found");
          }
          console.log(`Request Successful - Deleted Event:`, event);
          return event;
        } catch (error) {
          console.error("Request Failed - Delete Event:", error.message);
          throw new Error("Request Failed - Delete Event");
        }
      }
    },

    // Add Sheet
    addSheet: async (
      _,
      {
        title,
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
            title,
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

    // Edit Sheet
    editSheet: async (
      _,
      {
        _id,
        title,
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
          const sheet = await Sheet.findByIdAndUpdate(
            _id,
            {
              title,
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
            { new: true }
          );
          if (!sheet) {
            throw new Error(`Sheet ${_id} Not Found`);
          }
          console.log("Request Successful - Edited Sheet:", sheet);
          return sheet;
        } catch (error) {
          console.error("Request Failed - Edit Sheet:", error.message);
          throw new Error("Request Failed - Edit Sheet");
        }
      }
    },

    // Delete Sheet
    deleteSheet: async (_, { _id }, { user }) => {
      if (!user) {
        throw new AuthenticationError("User Not Logged In");
      } else {
        try {
          const sheet = await Sheet.findByIdAndDelete(_id);
          if (!sheet) {
            throw new Error("Sheet not found");
          }
          console.log(`Request Successful - Deleted Sheet:`, sheet);
          return sheet;
        } catch (error) {
          console.error("Request Failed - Delete Sheet:", error.message);
          throw new Error("Request Failed - Delete Sheet");
        }
      }
    },
  },
};

module.exports = resolvers;
