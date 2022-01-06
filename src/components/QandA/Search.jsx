import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';
// import './styles.css';

const Search = ({ editSearch }) => {
  return (
    <div>
      <form
        onChange={(event) => {
          editSearch(event);
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWER ↵" size="70" type="text" className="searchBar"></input>
      </form>
    </div>
  );
};

export default Search;
