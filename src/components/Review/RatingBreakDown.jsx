import React, { useState, useEffect } from "react";
import ProductBreakDown from "./productBreakDown.jsx";

const BreakDown = (props) => {
  var ratingData = props.metaData.ratings;
  var totalStars = 0;
  var totalReviews = 0;
  for (var key in ratingData) {
    totalStars = totalStars + key * Number(ratingData[key]);
  }
  for (var key in ratingData) {
    totalReviews = totalReviews + Number(ratingData[key]);
  }
  var result = totalStars / totalReviews;
  var rounded = Math.round(result * 10) / 10;

  var summaryRating = rounded;

  var percentage = String((summaryRating / 5) * 100) + "%";

  var standardStyle = {
    color: "grey",
    fontSize: "30px",
    position: "relative",
    display: "inline-block",
  };

  var ratingStarStyle = {
    color: "gold",
    position: "absolute",
    width: percentage,
    top: "0",
    left: "0",
    overflow: "hidden",
  };
  var starPercentage = (starNumber) => {
    return String((ratingData[starNumber] / totalReviews) * 100) + "%";
  };

  var ratingBarStyle = (starNumber) => {
    var percentage = starPercentage(starNumber);
    var style = { backgroundColor: "green", height: "10px", width: percentage };
    return style;
  };

  var breakDownStarStyle = {
    color: "gold",
    width: "100px",
    display: "inline-block",
  };

  return (
    <div className="ratingSummary">
      <span id="numberSummary" style={{ fontSize: "100px" }}>
        {summaryRating}
      </span>
      <span className="star" style={standardStyle}>
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span style={ratingStarStyle}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </span>
      <div className="breakDownRatings">
        <p>
          <span
            className="5star"
            style={breakDownStarStyle}
            onClick={props.starClick}
          >
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <div
            className="bar"
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "10px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <div style={ratingBarStyle(5)}></div>
          </div>
          <span>{ratingData[5]}</span>
        </p>
        <p>
          <span
            className="4star"
            style={breakDownStarStyle}
            onClick={props.starClick}
          >
            &#9733;&#9733;&#9733;&#9733;
          </span>
          <div
            className="bar"
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "10px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <div style={ratingBarStyle(4)}></div>
          </div>
          <span>{ratingData[4]}</span>
        </p>
        <p>
          <span
            className="3star"
            style={breakDownStarStyle}
            onClick={props.starClick}
          >
            &#9733;&#9733;&#9733;
          </span>
          <div
            className="bar"
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "10px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <div style={ratingBarStyle(3)}></div>
          </div>
          <span>{ratingData[3]}</span>
        </p>
        <p>
          <span
            className="2star"
            style={breakDownStarStyle}
            onClick={props.starClick}
          >
            &#9733;&#9733;
          </span>
          <div
            className="bar"
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "10px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <div style={ratingBarStyle(2)}></div>
          </div>
          <span>{ratingData[2]}</span>
        </p>
        <p>
          <span
            className="1star"
            style={breakDownStarStyle}
            onClick={props.starClick}
          >
            &#9733;
          </span>
          <div
            className="bar"
            style={{
              backgroundColor: "grey",
              width: "100px",
              height: "10px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <div style={ratingBarStyle(1)}></div>
          </div>
          <span>{ratingData[1]}</span>
        </p>
        <p>
          {" "}
          {Math.round((props.metaData.recommended.true / totalReviews) * 1000) /
            10}
          % recommend
        </p>
      </div>
      <ProductBreakDown data={props.metaData.characteristics} />
    </div>
  ); //&#9733 is the star symbol
};

export default BreakDown;

// {color:'gold', position:'absolute', width:'50%', top:'0', left:'0', overflow:'hidden', display:'block'}
