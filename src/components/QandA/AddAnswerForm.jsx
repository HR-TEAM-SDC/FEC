import React, { useState, useEffect, useContext } from "react";
import axios from "../../apis/atelier";
import { Context } from "../context/context.js";
import "./styles.css";

const AddAnswerForm = ({ question }) => {
  const { product } = useContext(Context);
  const [photos, setPhoto] = useState([]);
  const { handleAddAnswer } = useContext(Context);

  const handlePhoto = (event) => {
    event.preventDefault();

    if (event.target.files.length > 5) {
      alert("You can select only 5 images.");
      return;
    } else if (photos.length === 5) {
      alert("Reach the Max amount of 5.");
      return;
    } else {
      //console.log("what is photo:", event.target.files);
      let currPhoto = [...event.target.files];
      console.log("currPhoto", currPhoto);

      let newList = currPhoto.map((photo) => {
        return URL.createObjectURL(photo);
      });

      let combinedList = [...photos, ...newList];

      setPhoto(combinedList);
      //console.log('what is photos: ', photos[0], photos[1], photos.length)
    }
  };

  return (
    <div>
      <h1>Submit Your Answer</h1>
      <h4>
        <span className="hightlight">{product.name}</span>:{" "}
        {question.question_body}
      </h4>
      <form
        onSubmit={(event) =>
          handleAddAnswer(event, question.question_id, photos)
        }
      >
        <div className="form-cell">
          <label>Enter your username:</label>
          <div>
            <input
              type="text"
              maxLength="60"
              required="required"
              placeholder="Example: jack543!"
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
              placeholder="Example: jack@email.com"
              className="input-small"
            ></input>
          </div>
          <span className="privacy">
            * For authentication reasons, you will not be emailed
          </span>
        </div>

        <div className="form-cell">
          <label>Enter your answer:</label>
          <textarea
            className="textarea"
            maxLength="1000"
            placeholder="Enter your answers here"
            required="required"
          ></textarea>
        </div>

        <div className="form-cell">
          <label>Upload photos: {photos.length} / 5 Max</label>
          <div>
            <input
              type="file"
              className="button"
              accept=".png, .jpg, .jpeg"
              multiple
              max-uploads="5"
              onChange={(event) => handlePhoto(event)}
            ></input>
            <div className="thumbnail-photos">
              {photos.length > 0
                ? photos.map((photo) => {
                    return (
                      <img src={photo} width="100" height="100" key={photo} />
                    );
                  })
                : "No photo selected"}
            </div>
          </div>
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

export default AddAnswerForm;
