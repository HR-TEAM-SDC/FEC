import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../apis/atelier";
import Style from "./Style";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSizeContext, CurrentSkuContext } from "../../ProductDetails";
import {
  CurrentQuantityContext,
  CurrentIndexContext,
} from "../../ProductDetails";
import { CurrentImageContext } from "../../ProductDetails";

const StyleSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { setCurrentQuantity } = useContext(CurrentQuantityContext);
  const { currentIndex } = useContext(CurrentIndexContext);
  const { setCurrentImage } = useContext(CurrentImageContext);

  const styleClickHandler = (style) => {
    setCurrentStyle(style);
    setCurrentSize(null);
    setCurrentSku(null);
    setCurrentQuantity(null);
    setCurrentImage(style.photos[currentIndex].thumbnail_url);
  };

  return (
    <h4>
      Style Selector Component.
      <div>
        {styles.map((style) => {
          return <Style style={style} key={style.style_id} />;
        })}
      </div>
    </h4>
  );
};

export default StyleSelector;
