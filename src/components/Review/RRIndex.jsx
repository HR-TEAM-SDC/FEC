import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';
import ReviewList from './ReviewList.jsx';
import BreakDown from './ratingBreakDown.jsx'

const RRIndex = (props) => {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);

  var id = 40344;

  useEffect(() => {
    axios.get('reviews/', {params: {
      product_id:id,
      sort:"relevant"
    }}).then(res => setData(res.data));
    axios.get('reviews/meta', {params: {
      product_id:id,
    }}).then(res => setMetaData(res.data));
  }, []);

  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
      <div className="reviewList" style={divStyle}>
        <h2>RATINGS AND REVIEWS</h2>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {metaData? <BreakDown metaData={metaData}/>:null}
        {data? <ReviewList data={data.results} count={data.count}/>:null}
      </div>
  );
};

export default RRIndex;
