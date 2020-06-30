import React from "react";
import cocktails from "./cocktails.jpg";
import "../../Styling/Home.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to The Cocktail Explorer</h1>
      <img src={cocktails} alt={"Homepage cocktails"} />
    </div>
  );
};

export default HomePage;
