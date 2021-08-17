import React from "react";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import About from "../components/About";
import NewRecipe from "../components/NewRecipe";


export default () => (
<nav className="navbar sticky-top navbar-light bg-light">
  <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand nav-link active"
            aria-current="page"
          >
            Yummy Nonsense
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">      
        <li className="nav-item">
          <Link
            to="/recipe/90"
            className="nav-link active"
            aria-current="page"
          >
            Hot New Recipe!
          </Link>
        </li>        
        
        <li className="nav-item">
          <Link
            to="/recipes"
            className="nav-link"
          >
            Recipes
        </Link>
        </li>
        
        <li className="nav-item">
          <Link
            to="/newrecipe"
            className="nav-link"
          >
            Create a Recipe
        </Link>
        </li>
        
        <li className="nav-item">
          <Link
            to="/about"
            className="nav-link"
          >
            About
        </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
);