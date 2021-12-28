import React, { useContext } from "react";
import axios from "../../../../apis/atelier";
import Style from "./Style";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";

const StyleSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const styleClickHandler = (style) => {
    setCurrentStyle(style);
  };

  return (
    <h4>
      Style Selector Component. <br></br>
      Current Style: {currentStyle.name} <br></br>
      Current Style Photo: <br></br>
      <img
        src={currentStyle.photos ? currentStyle.photos[0].thumbnail_url : null}
      ></img>
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
        })}
      </div>
    </h4>
  );
};

export default StyleSelector;
