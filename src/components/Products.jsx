/* eslint-disable no-bitwise */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import Item from './Item';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      cartId: uuidv4(),
    });
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
