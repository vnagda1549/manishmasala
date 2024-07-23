import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import ProductList from "./pages/ProductList";
import client from "./apolloCLient";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import ReviewPage from "./pages/Reviews";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/admin" element={<AdminPage />} />

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
