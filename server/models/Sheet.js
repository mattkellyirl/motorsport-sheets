const mongoose = require("mongoose");
const { Schema } = mongoose;

const sheetSchema = new Schema(
  {
    // Event, Session, Track Condition and Track Temp
    event: {
      type: String,
      required: true,
    },

    session: {
      type: String,
      required: true,
      enum: [
        "Practice 1",
        "Practice 2",
        "Practice 3",
        "Practice 4",
        "Practice 5",
        "Qualifying",
        "Race 1",
        "Race 2",
        "Race 3",
        "Race 4",
        "Race 5",
      ],
    },

    trackCondition: {
      type: String,
      required: true,
      enum: ["Dry", "Damp", "Wet"],
    },

    trackTemp: {
      type: Number,
      required: false,
    },

    // Car and Driver
    car: {
      type: String,
      required: true,
    },

    driver: {
      type: String,
      required: true,
    },

    // Tyre Pressures
    tyrePressureLF: {
      type: Number,
      required: true,
    },

    tyrePressureRF: {
      type: Number,
      required: true,
    },

    tyrePressureLR: {
      type: Number,
      required: true,
    },

    tyrePressureRR: {
      type: Number,
      required: true,
    },

    // Ride Height
    rideHeightLF: {
      type: Number,
      required: true,
    },

    rideHeightRF: {
      type: Number,
      required: true,
    },

    rideHeightLR: {
      type: Number,
      required: true,
    },

    rideHeightRR: {
      type: Number,
      required: true,
    },

    // Camber
    camberLF: {
      type: Number,
      required: true,
    },

    camberRF: {
      type: Number,
      required: true,
    },

    camberLR: {
      type: Number,
      required: true,
    },

    camberRR: {
      type: Number,
      required: true,
    },

    // Toe
    toeLF: {
      type: Number,
      required: true,
    },

    toeRF: {
      type: Number,
      required: true,
    },

    toeLR: {
      type: Number,
      required: true,
    },

    toeRR: {
      type: Number,
      required: true,
    },

    // Sheet Owner
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Sheet = mongoose.model("Sheet", sheetSchema);

module.exports = Sheet;
