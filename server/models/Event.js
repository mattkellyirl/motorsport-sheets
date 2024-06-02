const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["Race Event", "Test Event"],
    },
    championship: {
      type: String,
      required: false,
    },
    round: {
      type: Number,
      required: false,
    },
    track: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
