import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier.js";
import ReviewList from "./ReviewList.jsx";
import BreakDown from "./ratingBreakDown.jsx";

const RRIndex = (props) => {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);

  var id = 40344;

  useEffect(() => {
    axios
      .get("reviews/", {
        params: {
          product_id: id,
          sort: "relevant",
        },
      })
      .then((res) => setData(res.data.results));
    axios
      .get("reviews/meta", {
        params: {
          product_id: id,
        },
      })
      .then((res) => setMetaData(res.data));
  }, []);

  const divStyle = {
    color: "black",
    border: "1px solid rgba(0, 0, 0, 0.05)",
  };

  // var starClick = (starNumber) => {
  //   var result = [];
  //   if (data) {
  //     for (var i = 0; i < data.results.length; i++) {
  //       if (data.results[i].rating === starNumber) {
  //         result.push(data.results[i])
  //       };
  //     };
  //   }
  //   setData(result);
  // };
  var starClick = (e) => {
    var number = Number(e.target.className[0]);
    var result = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].rating === number) {
        result.push(data[i]);
      }
    }
    setData(result);
  };

  return (
    <div className="reviewList" style={divStyle}>
      <h2>RATINGS AND REVIEWS</h2>
      {metaData ? (
        <BreakDown metaData={metaData} starClick={starClick} />
      ) : null}
      {data ? <ReviewList data={data} count={5} /> : null}
    </div>
  );
};

export default RRIndex;
