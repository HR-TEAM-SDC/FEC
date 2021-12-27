import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../apis/atelier";
import Style from "./Style";

const StyleSelector = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const styles = await axios.get(`products/40344/styles`);
      setStyles(styles.data.results);
    };
    fetchData();
  }, []);

  return (
    <h4>
      Style Selector Component
      <div>
        {styles.map((style) => {
          return <Style style={style} key={style.style_id} />;
        })}
      </div>
    </h4>
  );
};

export default StyleSelector;
