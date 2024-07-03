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
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      {/* <p>{product.shortDescription}</p>
      <p>
        {product.quantities.map((quantity, index) => (
          <span key={index}>{quantity.size}: ${quantity.price.toFixed(2)}<br/></span>
        ))}
      </p> */}
    </div>
  );
}

export default ProductCard;
