import React from "react";

const Card = ({ name, image }) => (
  <div className="card-container">
    <p>{name}</p>
    <br />
    <img src={image} alt={name}></img>
  </div>
);

export default Card;
