require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const cors = require("cors");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Define CORS origin URL from environment variables
const corsOrigin =
  process.env.NODE_ENV === "production"
    ? "https://motorsport-sheets-6b6724ad9a1f.herokuapp.com/"
    : "http://localhost:5173";

// Apply CORS middleware with corsOrigin URL
app.use(
  cors({
    origin: corsOrigin,
  })
);

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// Start the Apollo Server and configure middleware
const startApolloServer = async () => {
  await server.start();

  // Middleware to parse URL-encoded data and JSON
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, "../client/public")));

  // GraphQL endpoint with authentication middleware
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: ({ req }) => authMiddleware({ req }),
    })
  );

  // Serve the React app in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    // Fallback route to serve index.html for client-side routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Start the server once the database connection is open
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  // Handle database connection errors
  db.on("error", (err) => {
    console.error("Database connection error:", err);
  });
};

startApolloServer();
