import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/recipes/index";
    
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(data => this.setState({recipes: data}))
      .catch(err => console.log(err));
    }
    render() {
      const { recipes } = this.state;
      const allRecipes = recipes.map((recipe, index) => (
        <div key={index} className = "col-md-6 col-lg-4">
          <div className="card mb-4">
            <img 
              src={recipe.image} 
              className="card-img-top"
              alt={`${recipe.name} image`} 
            />
            <div className="card-body">
              <h5 className= "card-title">{recipe.name}</h5>
              <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      ));
      const noRecipe = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
              No recipes yet. Why not <Link to="/new_recipe">create one!</Link>
          </h4>
        </div>
      );

      return (
        <>
          < Navbar ></ Navbar>
          <div className="third-color"></div>
           
          <div id="page-content">
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Recipes for every occasion</h1>
                <p className="lead text-muted">
                  We've pulled together our most popular recipes, <br></br>
                  so there's sure to be something tempting for all to try!
                </p>
              </div>
            </section>
            <div className="row">
              <section className="strip text-end py-3">
                <div className="col-sm">
                  <h1 className="display-6">Go Ahead</h1>
                </div>
                <div className="col-sm text-center py-1">
                  <p className="lead text-muted align-middle" style={{margin: 0}}>Include your favorite dish!</p>
                </div>  
                <div className="col-sm left">
                  <Link to="/newrecipe" className="btn custom-button">
                    Add a Recipe
                  </Link>
                </div>
              </section>
            </div>
            <div className="py-5">
              <main className="container">
              <div className="row">
                { recipes.length > 0 ? allRecipes : noRecipe }
              </div>
            </main>
            </div>
          </div>
          
          < Footer />
        </>
      );
    }
}
export default Recipes;