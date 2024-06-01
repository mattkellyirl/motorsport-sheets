const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

// Load environment variables for secret and expiration
const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

// Throw error if JWT secret is not found
if (!secret) {
  throw new Error("JWT_SECRET environment variable not found");
}

// Throw error if JWT expiration is not found
if (!expiration) {
  throw new Error("JWT_EXPIRATION environment variable not found");
}

module.exports = {
  // Middleware to authenticate requests using JWT
  authMiddleware: function ({ req }) {
    // Allow token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If token is provided in the authorization header, extract it
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // If no token is found, return the request object unmodified
    if (!token) {
      return req;
    }

    // Verify the token and attach user data to the request object
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      // If token is invalid, throw an AuthenticationError
      throw new AuthenticationError("Invalid token");

      // DEBUGGING BYPASS AUTHENTICATION ERROR
      // console.log("Invalid token", err);
    }

    // Return the request object with user data attached
    return req;
  },

  // Sign and create a JWT
  signToken: function ({ email, _id }) {
    // Create a payload with user email and ID
    const payload = { email, _id };

    // Sign the token with the secret and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
