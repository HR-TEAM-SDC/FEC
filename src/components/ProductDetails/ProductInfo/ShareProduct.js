import React from 'react';
import '../styles.css';

const ShareProduct = () => {
  const addGap = {
    margin: '0 25px',
  };

  return (
    <div style={addGap}>
      {'Share on Social Media: '}
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-pinterest"></a>
    </div>
  );
};

export default ShareProduct;
