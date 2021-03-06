import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      ingredients: "",
      image: "",
      instruction: "",
      is_published: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }
  
  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/recipes/create";
    const { name, ingredients, image, instruction } = this.state;
    console.log('this.state', this.state);
    
    if (name.length == 0 || ingredients.lenth == 0 || instruction.length == 0 || image.length == 0 )
      return;
    
    const body = {
      name,
      ingredients,
      image,
      instruction: instruction.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/recipe/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <>
        < Navbar ></ Navbar>
        <div className="third-color"></div>
        
        <div id="page-content">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Add a new recipe to our awesome recipe collection.
                </h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="recipeName">Recipe name</label>
                  <input 
                    type="text"
                    name="name"
                    id="recipeName"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients">Image</label>
                  <input 
                    type="text"
                    name="image"
                    id="recipeImage"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients">Ingredients</label>
                  <input 
                    type="text"
                    name="ingredients"
                    id="recipeIngredients"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                  <small id="ingredientsHelp" className="form-text text-muted">
                    Separate each ingredient with a comma.
                  </small>
                </div>
                <label htmlFor="instruction">
                  Preparation Instructions
                </label>
                <textarea 
                  className="form-control"
                  name="instruction" 
                  id="instruction" 
                  cols="30" 
                  rows="5"
                  required
                  onChange={this.onChange}
                />
                <button type="submit" className="btn custom-button mt-3">
                  Create Recipe
                </button>
              </form>
              <Link to="/recipes" className="btn btn-link mt-3">
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

export default NewRecipe;