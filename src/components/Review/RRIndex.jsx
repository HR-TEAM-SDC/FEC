import React, { useState, useEffect, useReducer } from "react";
import axios from "../../apis/atelier.js";
import ReviewList from "./ReviewList.jsx";
import BreakDown from "./RatingBreakDown.jsx";
import WriteReview from "./writeReview.jsx";

const RRIndex = (props) => {
  const [data, setData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [filterData, setfilterData] = useState([]);
  const [filterRecord, setfilterRecord] = useState({});
  const [writeReview, setWriteReview] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  var id = 40344; //JAKE CHANGE THIS PART TO WHAT YOU WANT TO DO, A

  useEffect(() => {
    axios
      .get("reviews/", {
        params: {
          product_id: id,
          sort: "relevant",
        },
      })
      .then((res) => {
        setData(res.data.results);
        setfilterData(res.data.results);
        console.log("this has been invoked");
      });
    axios
      .get("reviews/meta", {
        params: {
          product_id: id,
        },
      })
      .then((res) => setMetaData(res.data));
  }, []);

  useEffect(() => {
    // console.log("this has been invoked")
    console.log(filterData);
    setfilterData(filterData);
  }, [filterData]);

  const divStyle = {
    color: "black",
    border: "1px solid rgba(0, 0, 0, 0.05)",
  };

  var filterDataSet = (result) => {
    setfilterData(result);
    forceUpdate();
  };

  var filterRecordSet = (record) => {
    setfilterRecord(record);
    forceUpdate();
  };

  var writeReviewClick = () => {
    writeReview ? setWriteReview(false) : setWriteReview(true);
  };

  return (
    <div className="reviewList" style={divStyle}>
      <h2>RATINGS AND REVIEWS</h2>
      {metaData ? (
        <BreakDown
          metaData={metaData}
          filterData={filterData}
          filterRecord={filterRecord}
          setfilterData={filterDataSet}
          setfilterRecord={filterRecordSet}
          data={data}
        />
      ) : null}
      {<ReviewList data={filterData} count={5} />}
      <div className="writeReview">
        <button id="writeReviewButton" onClick={writeReviewClick}>
          Write Review
        </button>
        {writeReview ? <WriteReview id={id} /> : null}
      </div>
    </div>
  );
};

export default RRIndex;
