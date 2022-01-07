import React, { useContext } from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';
import { CurrentSkuContext } from '../../ProductDetails';
import '../../styles.css';

const AddToCart = () => {
  const { currentSku } = useContext(CurrentSkuContext);

  return (
    <div>
      <div id="size-msg"></div>
      <SizeSelector />
      <br></br>
      {currentSku ? (
        <QuantitySelector />
      ) : (
        <div>
          Quantity:
          <select class="menu" disabled>
            <option> - </option>
          </select>
        </div>
      )}
      <br></br>
      <AddToCartButton />
    </div>
  );
};

export default AddToCart;
