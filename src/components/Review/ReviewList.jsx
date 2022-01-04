import React, { useState, useEffect, useReducer } from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import axios from '../../apis/atelier.js';
import './style.css';

const ReviewList = (props) => {
  const [data, setData] = useState(props.data.slice(0, 2));
  const [addMoreTracker, setaddMoreTracker] = useState(2);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentDataLengthTracker, setcurrentDataLengthTracker] = useState(props.data.length);
  const [sortTrack, setSortTrack] = useState('relevant');

  useEffect(() => setData(props.data), [props.data]);

  useEffect(() => {
    setcurrentDataLengthTracker(props.data.length);
    forceUpdate();
  }, []);

  useEffect(() => {
    if (props.data.length <= 2) {
      setaddMoreTracker(2);
    } else if (props.data.length < addMoreTracker) {
      setaddMoreTracker(props.data.length);
    }
  }, [props.data]);

  var sort = (e) => {
    if (e.target.value === 'relevant') {
      axios
        .get('reviews/', {
          params: {
            product_id: props.id, // need to change, will import data from main part.
            sort: 'relevant',
          },
        })
        .then((res) => setData(res.data.results));
      setSortTrack('relevant');
    }

    if (e.target.value === 'helpful') {
      axios
        .get('reviews/', {
          params: {
            product_id: props.id, // need to change, will import data from main part.
            sort: 'helpful',
          },
        })
        .then((res) => setData(res.data.results));
      setSortTrack('helpful');
    }
    if (e.target.value === 'newest') {
      axios
        .get('reviews/', {
          params: {
            product_id: props.id, // need to change, will import data from main part.
            sort: 'newest',
          },
        })
        .then((res) => setData(res.data.results));
      setSortTrack('newest');
    }
  };

  var showmoreOnclick = () => {
    var number = addMoreTracker + 2;
    setaddMoreTracker(number);
    if (number >= props.data.length) {
      var newNumber = Math.ceil(addMoreTracker / 5);
      console.log(addMoreTracker);
      props.fetchMoreData(newNumber, sortTrack);
      forceUpdate();
    }
  };

  var search = (e) => {
    var result = [];
    if (e.target.value.length >= 3) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].body.indexOf(e.target.value) !== -1) {
          result.push(data[i]);
        }
      }
    }
    setData(result);
    forceUpdate();

    if (e.target.value.length < 3) {
      setData(props.data.slice(0, addMoreTracker));
      forceUpdate();
    }
  };

  var key = 0;

  return (
    <div className="ReviewList">
      <div className="sort">
        <label>{props.count} reviews, sorted by </label>
        <select onChange={sort}>
          <option value="relevant">relevance</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
      </div>
      <input type="text" id="search" placeholder="search" style={{ float: 'right' }} onChange={search}></input>
      {data.slice(0, addMoreTracker).map((data) => (
        <IndividualReviews key={key++} data={data} />
      ))}
      {addMoreTracker < props.data.length ? (
        <button className="morereviews" onClick={showmoreOnclick}>
          More reviews
        </button>
      ) : null}
    </div>
  );
};

export default ReviewList;
