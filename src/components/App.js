import React, { useState, useEffect } from "react";
import axios from "../apis/atelier";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedItems from "./RelatedItems";
import QAapp from "../components/QandA/QAindex.jsx";
import RRIndex from "./Review/RRIndex.jsx";

const App = () => {
  // useEffect(() => {
  //   axios.get("products").then((res) => setTest(res.data));
  // }, []);

  return (
    <main>
      <ProductDetails />
      <RelatedItems />
      <QAapp />
      {/* <RRIndex /> */}
    </main>
  );
};

export default App;
