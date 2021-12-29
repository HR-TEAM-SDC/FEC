import React, { useState, useEffect } from "react";
import IndividualReviews from "./IndividualReviews.jsx";
import axios from "../../apis/atelier.js";

const ReviewList = (props) => {
  const [data, setData] = useState(props.data.slice(0, 2));
  // const [showmore, setShowmore] = useState(false);
  const [addMoreTracker, setaddMoreTracker] = useState(2);

  useEffect(
    () => setData(props.data.slice(0, addMoreTracker)),
    [props.data, addMoreTracker]
  );

  var sort = (e) => {
    if (e.target.value === "relevant") {
      axios
        .get("reviews/", {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: "relevant",
          },
        })
        .then((res) => setData(res.data.results));
    }

    if (e.target.value === "helpful") {
      axios
        .get("reviews/", {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: "helpful",
          },
        })
        .then((res) => setData(res.data.results));
    }
    if (e.target.value === "newest") {
      axios
        .get("reviews/", {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: "newest",
          },
        })
        .then((res) => setData(res.data.results));
    }
  };

  var showmoreOnclick = () => {
    var number = addMoreTracker + 2;
    setaddMoreTracker(number);
  };

  const divStyle = {
    color: "black",
    border: "1px solid black",
  };

  return (
    <div className="ReviewList" style={divStyle}>
      <label>{props.count} reviews, sorted by </label>
      <select id="sort" onChange={sort}>
        <option value="relevant">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
      {data.map((data) => (
        <IndividualReviews data={data} />
      ))}
      {/* {showmore
        ? data.map((data) => <IndividualReviews data={data} />)
        : data.slice(0, 2).map((data) => <IndividualReviews data={data} />)} */}
      <div id="morereviews" onClick={showmoreOnclick}>
        {addMoreTracker <= props.data.length ? "more reviews" : null}
      </div>
    </div>
  );
};

export default ReviewList;
