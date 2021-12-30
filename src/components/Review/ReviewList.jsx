import React, { useState, useEffect } from "react";
import IndividualReviews from "./IndividualReviews.jsx";
import axios from "../../apis/atelier.js";
import WriteReview from "./writeReview.jsx";

const ReviewList = (props) => {
  const [data, setData] = useState(props.data.slice(0, 2));
  const [addMoreTracker, setaddMoreTracker] = useState(2);
  const [writeReview, setWriteReview] = useState(false);

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

  var addReview = () => {
    setWriteReview(true);
  };

  const divStyle = {
    color: "black",
    border: "1px solid black",
    display: "inline-block",
    width: "60%",
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
      {addMoreTracker <= props.data.length ? (
        <button id="morereviews" onClick={showmoreOnclick}>
          More reviews
        </button>
      ) : null}
      <button id="writereview" onClick={addReview}>
        Write Review
      </button>
      {writeReview ? <WriteReview /> : null}
    </div>
  );
};

export default ReviewList;
