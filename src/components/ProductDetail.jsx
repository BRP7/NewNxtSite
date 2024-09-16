import React from 'react';

const ProductDetail = ({ planetName, productImage, productDescription }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', color: 'white', background: 'black' }}>
      <h1>{planetName}</h1>
      <img src={productImage} alt={planetName} style={{ width: '200px' }} />
      <p>{productDescription}</p>
    </div>
  );
};

export default ProductDetail;
