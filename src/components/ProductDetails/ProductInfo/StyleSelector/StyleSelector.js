import React, { useContext, useEffect } from "react";
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
  // let index = 0;

  return (
    <h4>
      Style Selector Component. <br></br>
      Current Style: {currentStyle.name} <br></br>
      <div>
        {styles.map((style) => {
          return (
            <Style
              style={style}
              currentStyle={currentStyle}
              key={style.style_id}
              styleClickHandler={styleClickHandler}
            />
          );
          // console.log('index:', index);
          // if (index === 0) {
          //   index++;
          //   return (
          //     <Style
          //       style={style}
          //       currentStyle={currentStyle}
          //       key={style.style_id}
          //       styleClickHandler={styleClickHandler}
          //     />
          //   );
          // }
          // if (index % 4 === 0) {
          //   index++;
          //   return (
          //     <div>
          //       <Style
          //         style={style}
          //         currentStyle={currentStyle}
          //         key={style.style_id}
          //         styleClickHandler={styleClickHandler}
          //       />
          //     </div>
          //   );
          // } else {
          //   index++;
          //   return (
          //     <Style
          //       style={style}
          //       currentStyle={currentStyle}
          //       key={style.style_id}
          //       styleClickHandler={styleClickHandler}
          //     />
          //   );
          // }
        })}
      </div>
    </h4>
  );
};

export default StyleSelector;
