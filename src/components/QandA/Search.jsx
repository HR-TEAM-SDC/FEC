import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import "./styles.css";

const Search = ({ editSearch }) => {
  return (
    <div>
      <form
        onChange={(event) => {
          editSearch(event);
        }}
      >
        <input
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWER ↵"
          size="70"
          type="text"
          className="searchBar"
        ></input>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default Search;
