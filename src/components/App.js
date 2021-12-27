
import React, { useState, useEffect } from "react";
import axios from "../apis/atelier";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedItems from "./RelatedItems";
import RRIndex from './Review/RRIndex.jsx';


const App = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get("products").then((res) => setTest(res.data));
  }, []);

  return (

    <main>
      <ProductDetails />
      <RelatedItems />
      <RRIndex />
    </main>

  );
};

export default App;
