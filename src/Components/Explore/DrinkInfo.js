import React from "react";
import Drinks from "../../Data/drinks.json";

const DrinkInfo = (props) => {
  const drinkItem = props.match.params.id;

  const drinkInfo = Drinks[drinkItem];
  return (
    <div>
      <h1>{drinkInfo.name}</h1>
      <img src={drinkInfo.image} alt={drinkInfo.name} />
      <p>{drinkInfo.preparation}</p>
    </div>
  );
};

export default DrinkInfo;
