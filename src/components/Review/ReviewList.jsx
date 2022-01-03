import React, { useState, useEffect, useReducer } from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import axios from '../../apis/atelier.js';

const ReviewList = (props) => {
  const [data, setData] = useState(props.data.slice(0, 2));
  const [addMoreTracker, setaddMoreTracker] = useState(2);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => setData(props.data), [props.data]);

  useEffect(() => {
    if (props.data.length <= 2) {
      setaddMoreTracker(2);
    } else if (props.data.length < addMoreTracker) {
      setaddMoreTracker(props.data.length);
    }
  }, [props.data]);
  // useEffect(
  //   () => {
  //     // setaddMoreTracker(2)
  //     setData(props.data.slice(0, addMoreTracker))},
  //   [props.data, addMoreTracker]
  // );

  var sort = (e) => {
    if (e.target.value === 'relevant') {
      axios
        .get('reviews/', {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: 'relevant',
          },
        })
        .then((res) => setData(res.data.results));
    }

    if (e.target.value === 'helpful') {
      axios
        .get('reviews/', {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: 'helpful',
          },
        })
        .then((res) => setData(res.data.results));
    }
    if (e.target.value === 'newest') {
      axios
        .get('reviews/', {
          params: {
            product_id: 40344, // need to change, will import data from main part.
            sort: 'newest',
          },
        })
        .then((res) => setData(res.data.results));
    }
  };

  var showmoreOnclick = () => {
    var number = addMoreTracker + 2;
    setaddMoreTracker(number);
  };

  var search = (e) => {
    var result = [];
    console.log(e.target.value.length);
    if (e.target.value.length >= 3) {
      for (var i = 0; i < props.data.length; i++) {
        if (props.data[i].body.indexOf(e.target.value) !== -1) {
          result.push(props.data[i]);
          console.log('this has been invoked');
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

  const divStyle = {
    color: 'black',
    border: '1px solid black',
    display: 'inline-block',
    width: '75%',
    textAlign: 'left',
  };

  var key = 0;

  return (
    <div className="ReviewList" style={divStyle}>
      <label>{props.count} reviews, sorted by </label>
      <select id="sort" onChange={sort}>
        <option value="relevant">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
      <input type="text" id="search" placeholder="search" style={{ float: 'right' }} onChange={search}></input>
      <div style={{ maxHeight: '600px', overflow: 'scroll', width: '100%' }} id="reviewsBox">
        {data.slice(0, addMoreTracker).map((data) => (
          <IndividualReviews key={key++} data={data} />
        ))}
      </div>
      {addMoreTracker < props.data.length ? (
        <button id="morereviews" onClick={showmoreOnclick}>
          More reviews
        </button>
      ) : null}
    </div>
  );
};

export default ReviewList;
