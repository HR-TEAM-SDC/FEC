import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';
import ReviewList from './ReviewList.jsx'

const RRIndex = (props) => {
  const [data, setData] = useState(null);

  var id = 40344;

  useEffect(() => {
    axios.get('reviews/', {params: {
      product_id:id,
      sort:"relevant"
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
        {data? <ReviewList data={data.results} count={data.count}/>:null}
      </div>
    </div>
  );
};

export default RRIndex;
