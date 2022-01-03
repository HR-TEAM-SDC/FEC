import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';

const IndividualReviews = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.data.helpfulness);

  var dateConvert = (date) => {
    var mydate = new Date(date);
    var month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][mydate.getMonth()];
    var str = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear();
    return str;
  };

  var reportOnClick = (e) => {
    var API = 'reviews/' + props.data.review_id + '/report';
    axios
      .put(API)
      .then(console.log('Reported'))
      .catch((err) => console.log(err));
  };

  var helpfulOnClick = () => {
    var API = 'reviews/' + props.data.review_id + '/helpful';
    axios
      .put(API)
      .then(console.log('Helpful!'))
      .then(setHelpfulness(helpfulness + 1))
      .catch((err) => console.log(err));
  };

  var stars = (rating) => {
    var j = 100;
    var result = [];
    for (var i = 0; i < rating; i++) {
      var checkedStar = (
        <code key={i} style={{ color: 'black', fontSize: '25px' }}>
          &#9733;
        </code>
      );
      result.push(checkedStar);
    }
    for (var i = 0; i < 5 - rating; i++) {
      var unCheckedStar = (
        <code key={j} style={{ color: 'grey', fontSize: '25px' }}>
          &#9733;
        </code>
      );
      j++;
      result.push(unCheckedStar);
    }
    return result;
  };

  return (
    <div className="IndividualReviews">
      {stars(props.data.rating)}
      <div className="date">{dateConvert(props.data.date)}</div>
      <div className="summary">{props.data.summary}</div>
      <div className="body">
        {props.data.body}
        {props.data.photos.length === 0
          ? null
          : props.data.photos.map((photo) => <img src={photo.url} width="100" height="100"></img>)}
      </div>
      <div className="Recommend">{props.data.recommend ? 'Recommend!' : null}</div>
      <div className="Reviewer_name ">{props.data.reviewer_name}</div>
      <div className="response">{props.data.response}</div>
      <div className="helpfulness">
        Helpful?
        <span className="helpful" onClick={helpfulOnClick}>
          Yes ({helpfulness}) |{' '}
        </span>
        <span id="report" onClick={reportOnClick}>
          Report
        </span>
      </div>
    </div>
  );
};

export default IndividualReviews;
