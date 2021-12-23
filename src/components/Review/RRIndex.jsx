import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';
import ReviewList from './ReviewList.jsx'

const RRIndex = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('reviews/', {params: {
      page: 1,
      count: 5,
      product_id:40344,
      sort:"newest"
    }}).then(res => setData(res.data));
  }, []);

  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
    <div>
      <h2>RATINGS AND REVIEWS</h2>
      <div className="reviewList" style={divStyle}>
        {data? <ReviewList data={data.results}/>:null}
      </div>
    </div>
  );
};

export default RRIndex;
