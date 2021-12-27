import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../apis/atelier";
import Style from "./Style";

const StyleSelector = () => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const styles = await axios.get(`products/40344/styles`);
      setStyles(styles.data.results);
      setCurrentStyle(styles.data.results[0]);
    };
    fetchData();
  }, []);
  // let content = [];
  // styles.forEach( (style, index) => {
  //   if ( (index + 1) % 4 === 0) {
  //     content.push (
  //       <div>
  //         <Style style={style} key={style.style_id} />
  //       </div>
  //     );
  //   } else {
  //     content.push (
  //       <Style style={style} key={style.style_id} />
  //     );
  //   }
  // });

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
