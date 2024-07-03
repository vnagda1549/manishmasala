import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProductsPage.css';

const GET_PRODUCTS = gql`
  query GetProducts {
    productList {
      id
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

function ProductsPage() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <h2 className="products-heading">Our Products</h2>
        <div className="products-container">
          {data.productList.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p>
                {product.quantities.map((quantity, index) => (
                  <span key={index}>{quantity.size}: ${quantity.price.toFixed(2)}<br/></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
