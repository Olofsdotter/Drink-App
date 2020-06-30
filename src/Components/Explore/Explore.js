import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Drinks from "../../Data/drinks.json";
import "../../Styling/Explore.css";
import Card from "./Card";

const ExplorePage = () => {
  const titel = "Find your favourite drink!";

  return (
    <div className="explore">
      <h1>{titel}</h1>
      <SearchField />
    </div>
  );
};

const SearchField = () => {
  const [searchedWord, setSearchedWord] = useState();
  let selectedDrinks = Drinks.filter((drink) =>
    drink.name.includes(searchedWord)
  );
  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearchedWord(value);
  };

  const handleInfo = (index) => {
    history.push("/explore/" + index.toString());
  };

  return (
    <div className="content">
      <form onSubmit={handleSearch}>
        <label>Search for drinks</label>
        <input type="text" onChange={handleSearch} />
      </form>
      <div className="cards">
        {selectedDrinks.map((drink) => (
          <div
            onClick={() =>
              handleInfo(Drinks.findIndex((item) => item.name === drink.name))
            }
          >
            <Card
              key={drink.name}
              name={drink.name}
              image={drink.image}
              className="drink-item"
            />
          </div>
        ))}
      </div>
      {searchedWord && selectedDrinks.length === 0 && <p>No found drinks</p>}
    </div>
  );
};

export default ExplorePage;
