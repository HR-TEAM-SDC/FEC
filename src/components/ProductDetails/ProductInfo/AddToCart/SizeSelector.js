import React, { useContext } from "react";
import SizeOption from "./SizeOption";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext, CurrentSizeContext } from "../../ProductDetails";

const SizeSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  console.log("currentStyle inside size selector:", currentStyle);

  const renderSizes = () => {
    let content = [];
    for (let key in currentStyle.skus) {
      content.push(
        <SizeOption value={key} key={key} currentStyle={currentStyle} />
        // <option value={key}> {currentStyle.skus[key].size} </option>
      );
    }
    return content;
  };

  const handleChanges = () => {
    handleSkuChange();
    handleSizeChange();
  };

  const handleSkuChange = () => {
    console.log("sku from event:", event.target);
    let index = event.target.selectedIndex;
    let sku = event.target.childNodes[index].getAttribute("sku");
    // console.log('index:', index);
    // console.log('sku:', sku);
    setCurrentSku(sku);
    console.log("currentSku:", currentSku);
  };

  const handleSizeChange = () => {
    // console.log('currentStyle.skus[event.target.value]:', currentStyle.skus);
    // console.log('size from event:', event.target.value);
    setCurrentSize(event.target.value);
    console.log("currentSize on change:", currentSize);
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
