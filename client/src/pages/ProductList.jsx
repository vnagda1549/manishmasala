import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../css/ProductsPage.css';
import ProductCard from './ProductsCard';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log('Product IDs:', data.productList.map(product => product._id)); 

  return (
    <div>
      <Navbar />
      <Header />
      <h2 className="products-heading">Our Products</h2>
      <div className="products-container">
        {data.productList.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
