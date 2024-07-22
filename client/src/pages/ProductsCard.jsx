import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductsPage.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log('Product :', product._id);

    navigate(`/product/${product._id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
        <img 
                src={`${product.image}`} 
                alt={product.name} 
                className="product-image" 
                onError={(e) => console.log('Image load error', product.image)}
              />
      <h3>{product.name}</h3>
      {}
    </div>
  );
}

export default ProductCard;
