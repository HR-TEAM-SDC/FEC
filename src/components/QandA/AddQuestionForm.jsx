import React, { useState, useEffect, useContext } from "react";
import axios from "../../apis/atelier";
import "./styles.css";

const AddQuestionForm = ({ product, handleAddQuestion }) => {
  return (
    <div>
      <h1>Ask Your Question</h1>
      <h3>
        About the{" "}
        <span className="hightlight">{product ? product.name : "Null"} </span>
      </h3>

      <form onSubmit={(event) => handleAddQuestion(event, product.id)}>
        <div className="form-cell">
          <label>Enter your username:</label>
          <div>
            <input
              type="text"
              maxLength="60"
              required="required"
              placeholder="Example: jackson11!"
              className="input-small"
            ></input>
          </div>
          <span className="privacy">
            * For privacy reasons, do not use your full name or email address
          </span>
        </div>

        <div className="form-cell">
          <label>Enter your email: </label>
          <div>
            <input
              type="email"
              maxLength="60"
              required="required"
              placeholder="Why did you like the product or not?"
              className="input-small"
            ></input>
          </div>
          <span className="privacy">
            * For authentication reasons, you will not be emailed
          </span>
        </div>

        <div className="form-cell">
          <label>Enter your new question:</label>
          <textarea
            className="textarea"
            maxLength="1000"
            placeholder="Any questions..."
            required="required"
          ></textarea>
        </div>

        <div className="form-cell">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestionForm;
