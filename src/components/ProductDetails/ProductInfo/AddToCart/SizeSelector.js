import React, { useContext } from "react";
import SizeOption from "./SizeOption";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext, CurrentSizeContext } from "../../ProductDetails";

const SizeSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);

  const renderSizes = () => {
    let content = [];
    content.push(<option>Select Size</option>);
    for (let key in currentStyle.skus) {
      content.push(
        <SizeOption value={key} key={key} currentStyle={currentStyle} />
      );
    }
    return content;
  };

  const handleChanges = () => {
    handleSkuChange();
    handleSizeChange();
  };

  const handleSkuChange = () => {
    let index = event.target.selectedIndex;
    let sku = event.target.childNodes[index].getAttribute("sku");
    setCurrentSku(sku);
  };

  const handleSizeChange = () => {
    setCurrentSize(event.target.value);
  };

  return (
    <div>
      <h4>Sizes Component</h4>
      Select Size:
      <select
        onChange={() => {
          handleChanges();
        }}
      >
        {renderSizes()}
      </select>
    </div>
  );
};

export default SizeSelector;
