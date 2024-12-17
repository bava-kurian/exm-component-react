import React from "react";
import Button from "./Button";
import "./Card.css";

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="Card" className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {buttonText && <Button onClick={onButtonClick} label={buttonText} />}
    </div>
  );
};

export default Card;
