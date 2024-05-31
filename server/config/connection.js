const mongoose = require("mongoose");

// Connect to MongoDB using the URI from environment variables or fallback to a local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/motorsport_sheets"
);

module.exports = mongoose.connection;
