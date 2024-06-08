import React from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Define GraphQL endpoint URL from environment variables
const endpointURL =
  process.env.NODE_ENV === "production"
    ? "https://motorsport-sheets-6b6724ad9a1f.herokuapp.com/graphql"
    : "http://localhost:3001/graphql";

// Create an HTTP link to the GraphQL endpoint
const httpLink = createHttpLink({
  uri: endpointURL,
});

// Set up authentication middleware
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
