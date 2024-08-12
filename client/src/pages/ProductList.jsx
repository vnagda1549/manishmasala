import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../css/ProductsPage.css";
import ProductCard from "./ProductsCard";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GET_PRODUCTS = gql`
  query GetProducts {
    productList {
      id
      _id
      name
      image
      shortDescription
      quantities {
        size
        price
      }
      category
    }
  }
`;

const categories = [
  "Pure spices",
  "Blended spices",
];

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === "All"
    ? data.productList
    : data.productList.filter(product => product.category === selectedCategory);

  console.log(
    "Product IDs:",
    data.productList.map((product) => product._id)
  );

  return (
    <div>
      <Navbar />
      <Header />
      <h2 className="products-heading">Our Products</h2>
      <div className="category-select-container">
        <label htmlFor="category-select">Sort by Category:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
