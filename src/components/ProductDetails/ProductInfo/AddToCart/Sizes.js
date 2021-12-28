import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";

const Sizes = () => {
  const styles = useContext(StylesContext);
  const currentStyle = useContext(CurrentStyleContext);
  // console.log("styles context:", styles);
  // console.log("currentStyle context:", currentStyle);

  return (
    <div>
      <h4>Sizes Component</h4>
      <select></select>
    </div>
  );
};

export default Sizes;
