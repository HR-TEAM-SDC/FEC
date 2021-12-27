import React, { useContext } from "react";
import { StylesContext } from "../../ProductDetails";

const Sizes = () => {
  const styles = useContext(StylesContext);
  console.log("styles context:", styles);

  return (
    <div>
      <h4>Sizes Component</h4>
    </div>
  );
};

export default Sizes;
