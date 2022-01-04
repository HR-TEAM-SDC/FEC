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
          <input type="radio" id={id ? id : null} value={num} name={name} onClick={Characteristics} />
          <label for={id} title="text">
            {array[i]}
          </label>
        </div>
      );
      num++;
    }
    return result;
  };

  var metaDataID = props.metaData.characteristics;

  return (
    <div className="Characteristics">
      <h2>Characteristics </h2>
      {metaDataID.Size ? (
        <div>
          <div className="Characteristics-names">Size </div>
          {eachCharacteristics(size, metaDataID.Size.id, 'Size')}
        </div>
      ) : null}
      {metaDataID.Width ? (
        <div>
          <div className="Characteristics-names">Width </div>
          {eachCharacteristics(size, metaDataID.Width.id, 'Width')}
        </div>
      ) : null}
      {metaDataID.Comfort ? (
        <div>
          <div className="Characteristics-names">Comfort </div>
          {eachCharacteristics(size, metaDataID.Comfort.id, 'Comfort')}
        </div>
      ) : null}
      {metaDataID.Quality ? (
        <div>
          <div className="Characteristics-names">Quality </div>
          {eachCharacteristics(size, metaDataID.Quality.id, 'Quality')}
        </div>
      ) : null}
      {metaDataID.Length ? (
        <div>
          <div className="Characteristics-names">Length </div>
          {eachCharacteristics(size, metaDataID.Length.id, 'Length')}
        </div>
      ) : null}
      {metaDataID.Fit ? (
        <div>
          <div className="Characteristics-names">Fit </div>
          {eachCharacteristics(size, metaDataID.Fit.id, 'Fit')}
        </div>
      ) : null}
    </div>
  );
};

export default Characteristics;
