import React, { useState, useEffect } from "react";

const Characteristics = (props) => {
  var size = [
    "A size too small",
    "½ a size too small",
    "Perfect",
    "½ a size too big",
    "A size too wide",
  ];

  var width = [
    "Too narrow ",
    "Slightly narrow ",
    "Perfect ",
    "Slightly wide ",
    "Too wide ",
  ];

  var Comfort = [
    "Uncomfortable ",
    "Slightly uncomfortable ",
    "Ok ",
    "Comfortable ",
    "Perfect ",
  ];

  var Quality = [
    "Poor ",
    "Below average ",
    "What I expected ",
    "Pretty great ",
    "Perfect ",
  ];

  var Length = [
    "Runs Short ",
    "Runs slightly short ",
    "Perfect ",
    "Runs slightly long ",
    "Runs long ",
  ];

  var Fit = [
    "Runs tight ",
    "Runs slightly tight ",
    "Perfect ",
    "Runs slightly long ",
    "Runs long ",
  ];

  var result = {};

  var Characteristics = (e) => {
    // result[e.target.id] = e.target.value;
    props.CharacteristicsReview(e);
  };

  var eachCharacteristics = (array, id, name) => {
    var num = 1;
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(
        <span>
          <input
            type="radio"
            id={id}
            value={num}
            name={name}
            onClick={Characteristics}
          />
          <label for={id} title="text">
            {array[i]}
          </label>
        </span>
      );
      num++;
    }
    return result;
  };

  return (
    <div className="Characteristics">
      <h5>Characteristics </h5>
      <span className="size">
        <div>Size {eachCharacteristics(size, 14, "Size")} </div>
        <div>Width {eachCharacteristics(width, 15, "Width")} </div>
        <div>Comfort {eachCharacteristics(Comfort, 16, "Comfort")} </div>
        <div>Quality {eachCharacteristics(Quality, 17, "Quality")} </div>
        <div>Length {eachCharacteristics(Length, 18, "Length")} </div>
        <div>Fit {eachCharacteristics(Fit, 19, "Fit")} </div>
      </span>
    </div>
  );
};

export default Characteristics;
