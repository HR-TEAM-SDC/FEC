import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from '../../apis/atelier';
import { Context } from '../context/context.js';
// import './styles.css';

const Image = ({ currentPic }) => {
  return (
    <div>
      <img src={currentPic} className="image" />
    </div>
  );
};

export default Image;
