import React, { useState, useEffect, useReducer, useContext } from 'react';
import axios from '../../apis/atelier.js';
import ReviewList from './ReviewList.jsx';
import BreakDown from './RatingBreakDown.jsx';
import WriteReview from './writeReview.jsx';
import { AppContext } from '../context';

const RRIndex = (props) => {
  const [data, setData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [filterData, setfilterData] = useState([]);
  const [filterRecord, setfilterRecord] = useState({});
  const [writeReview, setWriteReview] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { currentProduct } = useContext(AppContext);

  //JAKE CHANGE THIS PART TO WHAT YOU WANT TO DO, A

  console.log('I need this info: ', currentProduct);

  useEffect(() => {
    if (currentProduct) {
      initialReview();
    }
  }, [currentProduct]);

  var initialReview = () => {
    var id = currentProduct.id;
    axios
      .get('reviews/', {
        params: {
          product_id: id,
          sort: 'relevant',
        },
      })
      .then((res) => {
        setData(res.data.results);
        setfilterData(res.data.results);
        console.log('this has been invoked');
      });
    axios
      .get('reviews/meta', {
        params: {
          product_id: id,
        },
      })
      .then((res) => setMetaData(res.data));
  };
  useEffect(() => {
    console.log(filterData);
    setfilterData(filterData);
  }, [filterData]);

  // const divStyle = {
  //   color: "black",
  //   border: "1px solid rgba(0, 0, 0, 0.05)",
  // };

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
    <div className="reviewList">
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
      {<ReviewList data={filterData} count={filterData.length} />}
      <div className="writeReview">
        <button id="writeReviewButton" onClick={writeReviewClick}>
          Write Review
        </button>
        {writeReview ? <WriteReview id={currentProduct ? currentProduct.id : null} /> : null}
      </div>
    </div>
  );
};

export default RRIndex;
