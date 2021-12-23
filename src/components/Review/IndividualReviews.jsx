import React, { useState, useEffect } from 'react';


const IndividualReviews = (props) => {

  var dateConvert = (date) => {
    var mydate = new Date(date)
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var str = month + ' ' + mydate.getDay() + ', '+ mydate.getFullYear();
    return str;
  }

  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="IndividualReviews" style={divStyle}>
      <div className="ratings">{props.data.rating}</div>
      <div className="date">{dateConvert(props.data.date)}</div>
      <div className="summary">{props.data.summary}</div>
      <div className="body">
        {props.data.body}
        {props.data.photos.length === 0? null:props.data.photos.map(photo => <img src={photo.url} width="100" height="100"></img>)}
      </div>
      <div className="Recommend">{props.data.recommend? "Recommend!":null}</div>
      <div className="Reviewer_name ">{props.data.reviewer_name}</div>
      <div className="response">{props.data.response}</div>
      <div className="helpfulness">Helpful?
      <var>Yes ({props.data.helpfulness})</var></div>
    </div>
  );
};

export default IndividualReviews;
