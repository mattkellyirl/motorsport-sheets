const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  raceNumber: {
    type: Number,
    required: false,
  },
  odometer: {
    type: Number,
    required: false,
  },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
