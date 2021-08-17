import React from "react";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import About from "../components/About";
import NewRecipe from "../components/NewRecipe";


export default () => (
<footer className="footer mt-auto py-3">
  <div className="container-fluid">
    <span className="text-muted">
      <div className="row g-2">
        <div className="col-sm-4 col-lg-3 ">  
          <Link
            to="/"
            className="navbar-brand nav-link active"
            aria-current="page"
          >
          Yummy Nonsense
          </Link>
        </div>  
        
        <div className="col-sm-4 col-lg-2">  
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
        </ul>
        </div>
        <div className="col-sm-4 col-lg-2">  
          <ul className="navbar-nav">      
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
            >
            About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newrecipe"
              className="nav-link"
              >
              The Cooks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newrecipe"
              className="nav-link"
              >
              Bake with Us
            </Link>
          </li>
        </ul>
        </div>
      </div>
      </span>
    
  </div>
</footer>
);