import React from 'react';
import '../styles/components/Products.css';

function Item({ product, handleAddToCart }) {
  const { image, title, price, description } = product;
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Product-item-info">
        <h2>
          {title}
          <span>{price}</span>
        </h2>
        <p>{description}</p>
        <button type="button" onClick={() => handleAddToCart(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Item;
