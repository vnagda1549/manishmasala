import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProductDetails.css';

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      image
      longDescription
      shortDescription
      quantities {
        size
        price
      }
    }
  }
`;

function ProductDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (data && data.product) {
      const initialQuantity = data.product.quantities[0].size;
      const initialPrice = data.product.quantities[0].price;
      setSelectedQuantity(initialQuantity);
      setPrice(initialPrice);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.product;

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
    setPrice(product.quantities.find(q => q.size === quantity).price);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <main className="product-details-container">
        <div className="product-card product-image-card">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card product-info-card">
          <h2>{product.name}</h2>
          <p className="description">{product.longDescription}</p>
          <p className="price">${price.toFixed(2)}</p>
          <div className="product-quantity">
            <label className="quantity-label">Available Quantities:</label>
            <div className="quantity-options">
              {product.quantities.map(quantity => (
                <div 
                  key={quantity.size} 
                  className={`quantity-option ${selectedQuantity === quantity.size ? 'selected' : ''}`} 
                  onClick={() => handleQuantityChange(quantity.size)}
                >
                  {quantity.size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetails;
