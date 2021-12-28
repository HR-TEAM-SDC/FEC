import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext } from "../../ProductDetails";

const SizesSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  // console.log('currentStyle:', currentStyle);
  // console.log('currentSku:', currentSku);

  const renderSizes = () => {
    let content = [];
    for (let key in currentStyle.skus) {
      content.push(
        <option value={key}> {currentStyle.skus[key].size} </option>
      );
    }
    return content;
  };

  const handleSkuChange = () => {
    setCurrentSku(event.target.value);
  };

  return (
    <div>
      <h4>Sizes Component</h4>
      Select Size: <select onChange={handleSkuChange}>{renderSizes()}</select>
    </div>
  );
};

export default SizesSelector;
