import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import ProductList from "./pages/ProductList.jsx";
import client from "./apolloCLient";
import ProductDetail from "./pages/ProductDetail.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ReviewPage from "./pages/Reviews.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import ContactUsPage from "./pages/ContactUs.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Home from "./pages/Home.jsx";

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
