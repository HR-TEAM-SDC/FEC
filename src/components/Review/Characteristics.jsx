import React, { useState, useEffect } from 'react';
import './style.css';

const Characteristics = (props) => {
  var size = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];

  var width = ['Too narrow ', 'Slightly narrow ', 'Perfect ', 'Slightly wide ', 'Too wide '];

  var Comfort = ['Uncomfortable ', 'Slightly uncomfortable ', 'Ok ', 'Comfortable ', 'Perfect '];

  var Quality = ['Poor ', 'Below average ', 'What I expected ', 'Pretty great ', 'Perfect '];

  var Length = ['Runs Short ', 'Runs slightly short ', 'Perfect ', 'Runs slightly long ', 'Runs long '];

  var Fit = ['Runs tight ', 'Runs slightly tight ', 'Perfect ', 'Runs slightly long ', 'Runs long '];

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
        <div className="Characteristics-box">
          <input type="radio" id={id} value={num} name={name} onClick={Characteristics} />
          <label for={id} title="text">
            {array[i]}
          </label>
        </div>
      );
      num++;
    }
    return result;
  };

  return (
    <div className="Characteristics">
      <h2>Characteristics </h2>
      <div>
        <div className="Characteristics-names-Size">Size </div>
        {eachCharacteristics(size, 14, 'Size')}{' '}
      </div>
      <div>
        <div className="Characteristics-names">Width</div> {eachCharacteristics(width, 15, 'Width')}{' '}
      </div>
      <div>
        <div className="Characteristics-names">Comfort</div> {eachCharacteristics(Comfort, 16, 'Comfort')}{' '}
      </div>
      <div>
        <div className="Characteristics-names">Quality</div> {eachCharacteristics(Quality, 17, 'Quality')}{' '}
      </div>
      <div>
        <div className="Characteristics-names">Length</div> {eachCharacteristics(Length, 18, 'Length')}{' '}
      </div>
      <div>
        <div className="Characteristics-names">Fit</div> {eachCharacteristics(Fit, 19, 'Fit')}{' '}
      </div>
    </div>
  );
};

export default Characteristics;
