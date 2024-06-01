const mongoose = require("mongoose");

// Connect to MongoDB using the URI from environment variables or fallback to a local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/motorsport_sheets"
);

// DEBUGGING
// mongoose
//   .connect(
//     process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/motorsport_sheets",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("Successfully connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", function () {
//   console.log("Connected to MongoDB");
// });

// module.exports = db;

module.exports = mongoose.connection;
