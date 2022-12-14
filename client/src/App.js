import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Market from "./pages/Market";

import AddProducts from "./pages/AddProducts";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";

import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <div className="d-flex row no_padding justify-content-center align-items-center">
            <Nav />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/market" element={<Market />} />

                <Route path="/addproducts" element={<AddProducts />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
