import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier.js";
import ReviewList from "./ReviewList.jsx";
import BreakDown from "./ratingBreakDown.jsx";

const RRIndex = (props) => {
  const [data, setData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [filterData, setfilterData] = useState(null);
  const [filterRecord, setfilterRecord] = useState({});

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

  // useEffect(() => {setfilterData(filterData)}, [filterData])

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
    if (filterRecord[number] === true) {
      var result = [];
      for (let i = 0; i < filterData.length; i++) {
        if (filterData[i].rating !== number) {
          result.push(filterData[i]);
        }
      }
      var record = filterRecord;
      delete record[number];
      setfilterData(result);
      if (filterData.length === 0) {
        setfilterData(data);
      }
      setfilterRecord(record);
    } else {
      if (filterData) {
        var result = filterData;
      } else {
        var result = [];
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].rating === number) {
          result.push(data[i]);
        }
      }
      var record = filterRecord;
      record[number] = true;
      setfilterRecord(record);
      setfilterData(result);
    }
  };

  return (
    <div className="reviewList" style={divStyle}>
      <h2>RATINGS AND REVIEWS</h2>
      {metaData ? (
        <BreakDown metaData={metaData} starClick={starClick} />
      ) : null}
      {<ReviewList data={filterData ? filterData : data} count={5} />}
    </div>
  );
};

export default RRIndex;
