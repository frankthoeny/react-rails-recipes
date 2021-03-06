import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: { ingredients: ""} };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  addHtmlEntities(str) {
    return String(str)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  }  

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(data => this.setState( { recipe : data } ))
      .catch( () => this.props.history.push("/recipes"));
  }

  deleteRecipe() {
    const { 
      match: { 
       params:{ id }
     }
    } = this.props;
    const url =  `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then( () => this.props.history.push("/recipes") )
      .catch( error => console.log(error.message) );
  }

  render() {
    const { recipe } = this.state;
    let ingredientList = "No ingredients available";

      if (recipe.ingredients.length > 0) {
        ingredientList = recipe.ingredients
          .split(",")
          .map((ingredient, index) => (
            <li key={index} className="list-group-item">
                {ingredient}
            </li>
          ));
      }
      const recipeInstruction = this.addHtmlEntities(recipe.instruction);

      return (
      <>
        < Navbar />
        <div id="page-content">
          <div className="hero position-relative d-flex align-items-center justify-content-center">
            <img 
              src={recipe.image} 
              alt={`${recipe.name} image`}
              className="img-fluid position-absolute" 
            />
            <div className="overlay bg-dark position-absolute" />
            <h1 className="display-4 position-relative text-white">
              {recipe.name}
            </h1>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <ul className="list-group">
                  <h5 className="mb-2">Ingredients</h5>
                  {ingredientList}
                </ul>
              </div>
              <div className="col-sm-12 col-lg-7 prep">
                <h5 className="mb-2">Preparation Instructions</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${recipeInstruction}`    
                  }}
                />
              </div>  
              <div className="col-sm-12 col-lg-2 d-flex align-items-end flex-column bd-highlight mb-3">
                <Link 
                    to={`/recipe/${recipe.id}/edit`}
                    className="btn custom-button mb-4"
                    role="button"
                    >
                    Edit Recipe
                </Link>
                <button type="button" className="btn btn-danger mb-4" onClick={this.deleteRecipe}>
                  Delete Recipe
                </button>
                <Link to="/recipes" className="big-link mt-10">
                  &#60; Back to Recipes  
                </Link>
              </div>
            </div>
          </div>
        </div>
        < Footer />
      </>
      );
    }

}
export default Recipe;