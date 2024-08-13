import { ApolloClient, InMemoryCache } from "@apollo/client";

// Determine the GraphQL server URI based on the current URL
const uri =
  window.location.hostname === "localhost"
    ? "http://localhost:4000/graphql" // Local development
    : "https://your-server-url.onrender.com/graphql"; // Production (Render)

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default client;
