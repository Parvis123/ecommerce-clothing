import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/homepage/HomePage";

const HatsPage = () => {
  <div>
    <h1>HATS PAGE</h1>
  </div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact patch="/" component={HomePage} />
        <Route exact patch="shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
