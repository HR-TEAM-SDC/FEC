import React, { useState, useEffect, useReducer, useContext } from 'react';
import axios from '../../apis/atelier.js';
import ReviewList from './ReviewList.jsx';
import BreakDown from './RatingBreakDown.jsx';
import WriteReview from './writeReview.jsx';
import { AppContext } from '../context';
import './style.css';

const RRIndex = (props) => {
  const [data, setData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [filterData, setfilterData] = useState([]);
  const [filterRecord, setfilterRecord] = useState({});
  const [writeReview, setWriteReview] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { currentProduct } = useContext(AppContext);

  useEffect(() => {
    if (currentProduct) {
      initialReview();
    }
  }, [currentProduct]);

  // var currentProduct = { id: 40344};

  var initialReview = () => {
    var id = currentProduct.id;
    axios
      .get('reviews/', {
        params: {
          product_id: id,
          sort: 'relevant',
          count: 20,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setfilterData(res.data.results);
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
    setfilterData(filterData);
  }, [filterData]);

  var filterDataSet = (result) => {
    setfilterData(result);
    forceUpdate();
  };

  var filterRecordSet = (record) => {
    setfilterRecord(record);
    forceUpdate();
  };

  var clearAll = () => {
    setfilterData(data);
    var newRecord = {};
    setfilterRecord(newRecord);
    forceUpdate;
  };

  var writeReviewClick = () => {
    writeReview ? setWriteReview(false) : setWriteReview(true);
  };

  var fetchMoreData = (newNumber, sort) => {
    var id = currentProduct.id;
    axios
      .get('reviews/', {
        params: {
          product_id: id,
          sort: sort,
          count: newNumber,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setfilterData(res.data.results);
      });
  };

  return (
    <div id="reviewList" className="reviewList">
      <h2>RATINGS AND REVIEWS</h2>
      {metaData ? (
        <BreakDown
          metaData={metaData}
          filterData={filterData}
          filterRecord={filterRecord}
          setfilterData={filterDataSet}
          setfilterRecord={filterRecordSet}
          data={data}
          clearAll={clearAll}
        />
      ) : null}
      {
        <ReviewList
          data={filterData}
          count={metaData ? Number(metaData.recommended.false) + Number(metaData.recommended.true) : null}
          id={currentProduct ? currentProduct.id : null}
          fetchMoreData={fetchMoreData}
        />
      }
      <div className="writeReview">
        {writeReview ? null : (
          <button className="writeReviewButton" onClick={writeReviewClick}>
            Write Review
          </button>
        )}
        {writeReview ? (
          <WriteReview
            id={currentProduct ? currentProduct.id : null}
            name={currentProduct ? currentProduct.name : null}
            writeReviewClick={writeReviewClick}
            metaData={metaData ? metaData : null}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RRIndex;
