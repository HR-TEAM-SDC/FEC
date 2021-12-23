import React, { useState, useEffect } from 'react';
import IndividualReviews from './IndividualReviews.jsx'


const ReviewList = (props) => {
  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="ReviewList" style={divStyle}>
     {props.data.map(data => <IndividualReviews data={data} />)}
    </div>
  );
};

export default ReviewList;
