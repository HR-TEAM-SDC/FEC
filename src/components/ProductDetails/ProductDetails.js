import React, { useState } from 'react';

const ProductDetails = () => {
  // Create state of ProductDetails
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Product Details Component</h2>
      <h3>{value}</h3>
    </div>
  );
};

export default ProductDetails;