import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";

const Search = ({ editSearch }) => {
  return (
    <div>
      <form
        onChange={(event) => {
          editSearch(event);
        }}
      >
        <input
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWER"
          size="70"
          type="text"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
