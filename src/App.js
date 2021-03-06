import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import ExplorePage from "./Components/Explore/Explore";
import DrinkInfo from "./Components/Explore/DrinkInfo";
import "./App.css";

const DrinkHeader = () => (
  <header>
    <div className="drink-header">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/explore">
        <button>Explore</button>
      </NavLink>
    </div>
  </header>
);

const App = () => (
  <BrowserRouter>
    <div className="App">
      <DrinkHeader />
      <div className="drink-content">
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/explore" component={ExplorePage} exact={true} />
          <Route path="/explore/:id" component={DrinkInfo} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
