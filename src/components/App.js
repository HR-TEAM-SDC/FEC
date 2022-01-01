import React, { useState, useEffect } from "react";
import axios from "../apis/atelier";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedItems from "./RelatedItems/index.jsx";
import QAapp from "../components/QandA/QAindex.jsx";
import RRIndex from "./Review/RRIndex.jsx";
const styles = {
  fontFamily: "Montserrat, sans-serif",
  display: "grid",
};

const App = () => {
  return (
    <main style={styles}>
      <ProductDetails />
      <RelatedItems />
      <QAapp />
      <RRIndex />
    </main>
  );
};

export default App;
