import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from './Components/Home/Home';
import ExplorePage from './Components/Explore/Explore';
import './App.css';


const DrinkHeader = () => (
  <header>
  <div className='drink-header'>
  <NavLink to='/'>
    <button>Home</button>
  </NavLink>
  <NavLink to='/explore'>
    <button>Explore</button>
  </NavLink>
  </div>
  </header>
);

const App = () => (
  <BrowserRouter>
    <div className='App'>
    <DrinkHeader />
    <div className='drink-content'>
    <Switch>
      <Route path='/' component={HomePage} exact={true} />
      <Route path='/explore' component={ExplorePage} />
    </Switch>
    </div>
    </div>
  </BrowserRouter>
);


export default App;
