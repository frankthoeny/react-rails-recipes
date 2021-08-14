import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import About from "../components/About";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/about" exact component={About} />
    </Switch>
  </Router>
);