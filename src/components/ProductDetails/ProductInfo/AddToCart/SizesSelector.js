import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSizeContext } from "../../ProductDetails";

const SizesSelector = () => {
  const styles = useContext(StylesContext);
  const currentStyle = useContext(CurrentStyleContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);

  const renderSizes = () => {
    let content = [];
    for (let key in currentStyle.currentStyle.skus) {
      content.push(
        <option> {currentStyle.currentStyle.skus[key].size} </option>
      );
    }
    return content;
  };

  const handleSizeChange = () => {
    setCurrentSize(event.target.value);
    console.log("current size:", currentSize);
  };

  return (
    <div>
      <h4>Sizes Component</h4>
      Select Size: <select onChange={handleSizeChange}>{renderSizes()}</select>
    </div>
  );
};

export default SizesSelector;
