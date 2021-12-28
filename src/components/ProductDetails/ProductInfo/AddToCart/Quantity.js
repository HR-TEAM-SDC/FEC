import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";

const SizesSelector = () => {
  const styles = useContext(StylesContext);
  const currentStyle = useContext(CurrentStyleContext);

  const renderSizes = () => {
    let content = [];
    for (let key in currentStyle.currentStyle.skus) {
      content.push(
        <option> {currentStyle.currentStyle.skus[key].size} </option>
      );
    }
    return content;
  };

  return (
    <div>
      <h4>Sizes Component</h4>
      Select Size: <select>{renderSizes()}</select>
    </div>
  );
};

export default SizesSelector;
