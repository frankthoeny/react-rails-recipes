import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import About from "../components/About";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import UpdateRecipe from "../components/UpdateRecipe";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/about" exact component={About} />
      <Route path="/recipe/:id" exact component={Recipe} />
      <Route path="/newrecipe" exact component={NewRecipe} />
      <Route path="/recipe/:id/edit" exact component={UpdateRecipe} />
    </Switch>
  </Router>    
);