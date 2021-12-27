import React, { useState, useEffect } from 'react';
import IndividualReviews from './IndividualReviews.jsx'
import axios from '../../apis/atelier.js';


const ReviewList = (props) => {
  const [data, setData] = useState(props.data);
  const [showmore, setShowmore] = useState(false)

  var sort = (e) => {
    if (e.target.value ==="relevant") {
      axios.get('reviews/', {params: {
        product_id:40344, // need to change, will import data from main part.
        sort:"relevant"
      }}).then(res => setData(res.data.results));
    };

    if (e.target.value ==="helpful") {
      axios.get('reviews/', {params: {
        product_id:40344, // need to change, will import data from main part.
        sort:"helpful"
      }}).then(res => setData(res.data.results));
    };
    if (e.target.value ==="newest") {
      axios.get('reviews/', {params: {
        product_id:40344, // need to change, will import data from main part.
        sort:"newest"
      }}).then(res => setData(res.data.results));
    };
  };

  var showmoreOnclick = () => {
    showmore? setShowmore(false) : setShowmore(true);
  }

  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="ReviewList" style={divStyle}>
      <label >{props.count} reviews, sorted by </label>
      <select id="sort" onChange={sort}>
        <option value="relevant" >relevance</option>
        <option value="helpful" >helpful</option>
        <option value="newest" >newest</option>
      </select>
     {showmore? data.map(data => <IndividualReviews data={data} />): data.slice(0,2).map(data => <IndividualReviews data={data} />)}
     <div id="morereviews" onClick={showmoreOnclick}>more reviews</div>
    </div>
  );
};

export default ReviewList;
