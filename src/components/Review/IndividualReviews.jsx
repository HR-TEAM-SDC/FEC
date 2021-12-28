import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier.js";

const IndividualReviews = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.data.helpfulness);

  var dateConvert = (date) => {
    var mydate = new Date(date);
    var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][mydate.getMonth()];
    var str = month + " " + mydate.getDate() + ", " + mydate.getFullYear();
    return str;
  };

  // useEffect(() => {
  //   setHelpfulness(props.data.helpfulness)
  // }, []);

  const divStyle = {
    color: "black",
    border: "1px solid black",
  };

  var reportOnClick = (e) => {
    var API = "reviews/" + props.data.review_id + "/report";
    axios
      .put(API)
      .then(console.log("Reported"))
      .catch((err) => console.log(err));
  };

  var helpfulOnClick = () => {
    var API = "reviews/" + props.data.review_id + "/helpful";
    axios
      .put(API)
      .then(console.log("Helpful!"))
      .then(setHelpfulness(helpfulness + 1))
      .catch((err) => console.log(err));
  };

  var percentage = String((props.data.rating / 5) * 100) + "%";

  var ratingStyle = {
    color: "gold",
    position: "absolute",
    width: percentage,
    top: "0",
    left: "0",
    overflow: "hidden",
  };

  return (
    <div className="IndividualReviews" style={divStyle}>
      <span
        className="star"
        style={{
          color: "grey",
          fontSize: "30px",
          position: "relative",
          display: "inline-block",
        }}
      >
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span style={ratingStyle}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </span>
      <p className="date">{dateConvert(props.data.date)}</p>
      <p className="summary">{props.data.summary}</p>
      <div className="body">
        {props.data.body}
        {props.data.photos.length === 0
          ? null
          : props.data.photos.map((photo) => (
              <img src={photo.url} width="100" height="100"></img>
            ))}
      </div>
      <div className="Recommend">
        {props.data.recommend ? "Recommend!" : null}
      </div>
      <p className="Reviewer_name ">{props.data.reviewer_name}</p>
      <p className="response">{props.data.response}</p>
      <p className="helpfulness">
        Helpful?
        <span onClick={helpfulOnClick}>Yes ({helpfulness})</span>
        <span> | </span>
        <span onClick={reportOnClick}>Report</span>
      </p>
    </div>
  );
};

export default IndividualReviews;
