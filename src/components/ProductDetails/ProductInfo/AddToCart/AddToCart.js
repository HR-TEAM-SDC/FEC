import React, { useContext } from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';
import { CurrentSkuContext } from '../../ProductDetails';

const AddToCart = () => {
  const { currentSku } = useContext(CurrentSkuContext);

  return (
    <div>
      <h4>Add To Cart</h4>
      <SizeSelector />
      {currentSku ? (
        <QuantitySelector />
      ) : (
        <div>
          Quantity:
          <select disabled>
            <option> - </option>
          </select>
        </div>
      )}
      <AddToCartButton />
    </div>
  );
};

export default AddToCart;
