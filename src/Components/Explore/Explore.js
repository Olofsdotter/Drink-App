import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../../Data/drinks.json';
import './Explore.css';

const ExplorePage = () => {

    const titel = 'Find your favourite drink!';

    return (
        <div className='explore'>
            <h1>{titel}</h1>
            <SearchField />
        </div>
    )
};

const SearchField = () => {
    
    const [searchedWord, setSearchedWord] = useState();
    let selectedDrinks = Drinks.filter((drink) => drink.name.includes(searchedWord));

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className='content'>
        <form onSubmit={handleSearch}>
            <input type='text' onChange={(e) => setSearchedWord(e.target.value)} />
            <button type='submit'>
                Search
            </button>
        </form>
        <div className="cards">
        {selectedDrinks.map((drink) => (
          <Card
            key={drink.name}
            name={drink.name}
            drinkInfo={drink.preparation}
            image={drink.image}
          />
        ))}
        </div>
        </div>
    )
};

const Card = ({name, image, drinkInfo}) => (
    <div className='card-container'>
        <Link to={drinkInfo}>{name}</Link><br />
        <img src={image} alt={name}></img>
    </div>
);




export default ExplorePage;