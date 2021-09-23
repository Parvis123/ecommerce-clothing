import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
