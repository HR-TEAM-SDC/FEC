import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';

const IndividualReviews = (props) => {

  const [helpfulness, setHelpfulness] = useState(props.data.helpfulness);

  var dateConvert = (date) => {
    var mydate = new Date(date)
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var str = month + ' ' + mydate.getDate() + ', '+ mydate.getFullYear();
    return str;
  }

  // useEffect(() => {
  //   setHelpfulness(props.data.helpfulness)
  // }, []);

  const divStyle = {
    color: 'blue',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  var reportOnClick = (e) => {
    var API = "reviews/" + props.data.review_id +"/report"
    axios.put(API)
    .then(console.log("Reported"))
    .catch((err) => console.log(err));
  };

  var helpfulOnClick = () => {
    var API = "reviews/" + props.data.review_id +"/helpful"
    axios.put(API)
    .then(console.log("Helpful!"))
    .then(setHelpfulness(helpfulness + 1))
    .catch((err) => console.log(err));
  };

  var stars = (rating) =>{
    var checkedStar = (<span class="fa fa-star checked" style={{color:'orange'}}></span>)
    var unCheckedStar = (<span class="fa fa-star"></span>)
    var result = [];
    for (var i = 0; i < rating; i++) {
      result.push(checkedStar)
    }
    for (var i = 0; i < 5 - rating; i++) {
      result.push(unCheckedStar)
    }
    return result;
  }

  return (
    <div className="IndividualReviews" style={divStyle}>
        {/* <span class="fa fa-star checked" style={{color:'orange'}}></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> */}
        {stars(props.data.rating)}
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
      <span onClick={helpfulOnClick}>Yes ({helpfulness})</span><span> | </span><span onClick={reportOnClick}>Report</span></div>
    </div>
  );
};

export default IndividualReviews;
