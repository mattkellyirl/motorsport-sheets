const mongoose = require("mongoose");

// Define MONGODB_URI from environment variables
const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI_PROD
    : process.env.MONGODB_URI_DEV;

// Connect to MongoDB using MONGODB_URI
mongoose.connect(MONGODB_URI);

module.exports = mongoose.connection;
