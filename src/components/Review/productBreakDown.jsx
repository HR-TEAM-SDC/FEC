import React, { useState, useEffect } from "react";

const ProductBreakDown = (props) => {
  if (props.data.Size) {
    var SizePercentage = String((props.data.Size.value / 5) * 100) + "px";
  }

  if (props.data.Comfort) {
    var ComfortPercentage = String((props.data.Comfort.value / 5) * 100) + "px";
  }

  if (props.data.Fit) {
    var FitPercentage = String((props.data.Fit.value / 5) * 100) + "px";
  }

  if (props.data.Length) {
    var LengthPercentage = String((props.data.Length.value / 5) * 100) + "px";
  }

  if (props.data.Quality) {
    var QualityPercentage = String((props.data.Quality.value / 5) * 100) + "px";
  }

  return (
    <div className="productBreakDown">
      <div className="productBreakDownSize">
        <span style={{ display: "block" }}>Size</span>
        <div
          style={{
            backgroundColor: "grey",
            width: "100px",
            height: "10px",
            display: "inline-block",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              color: "black",
              left: SizePercentage,
            }}
          >
            &#124;
          </span>
        </div>
      </div>
      <div className="productBreakDownComfort">
        <span style={{ display: "block" }}>Comfort</span>
        <div
          style={{
            backgroundColor: "grey",
            width: "100px",
            height: "10px",
            display: "inline-block",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              color: "black",
              left: ComfortPercentage,
            }}
          >
            &#124;
          </span>
        </div>
      </div>
      <div className="productBreakDownFit">
        <span style={{ display: "block" }}>Fit</span>
        <div
          style={{
            backgroundColor: "grey",
            width: "100px",
            height: "10px",
            display: "inline-block",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              color: "black",
              left: FitPercentage,
            }}
          >
            &#124;
          </span>
        </div>
      </div>
      <div className="productBreakDownLength">
        <span style={{ display: "block" }}>Length</span>
        <div
          style={{
            backgroundColor: "grey",
            width: "100px",
            height: "10px",
            display: "inline-block",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              color: "black",
              left: LengthPercentage,
            }}
          >
            &#124;
          </span>
        </div>
      </div>
      <div className="productBreakDownQuality">
        <span style={{ display: "block" }}>Quality</span>
        <div
          style={{
            backgroundColor: "grey",
            width: "100px",
            height: "10px",
            display: "inline-block",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              color: "black",
              left: QualityPercentage,
            }}
          >
            &#124;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreakDown;
