import React, { useState, useEffect } from 'react';
import IndividualReviews from './IndividualReviews.jsx'
import axios from '../../apis/atelier.js';


const ReviewList = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.data)
  }, []);

  var relevantSelect = () => {
    axios.get('reviews/', {params: {
      product_id:40344, // need to change, will import data from main part.
      sort:"relevant"
    }}).then(res => setData(res.data.results));
  };

  var helpfulSelect = () => {
    axios.get('reviews/', {params: {
      product_id:40344, // need to change, will import data from main part.
      sort:"helpful"
    }}).then(res => setData(res.data.results));
  };

  var newestSelect = () => {
    axios.get('reviews/', {params: {
      product_id:40344, // need to change, will import data from main part.
      sort:"newest"
    }}).then(res => setData(res.data.results));
  };

  var sort = (e) => {
    if (e.target.value ==="relevant") {
      relevantSelect();
    };

    if (e.target.value ==="helpful") {
      helpfulSelect();

    };
    if (e.target.value ==="newest") {
      newestSelect();
    };
  };


  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="ReviewList" style={divStyle}>
      <label >{props.count} reviews, sorted by </label>
      <select id="sort" onChange={sort}>
        <option value="relevant" onSelect={relevantSelect}>relevance</option>
        <option value="helpful" onSelect={helpfulSelect}>helpful</option>
        <option value="newest" onSelect={newestSelect}>newest</option>
      </select>
     {data? data.map(data => <IndividualReviews data={data} />) : props.data.map(data => <IndividualReviews data={data} />)}
    </div>
  );
};

export default ReviewList;
