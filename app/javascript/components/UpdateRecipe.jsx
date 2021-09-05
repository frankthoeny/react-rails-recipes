import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class UpdateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      image: "",
      instruction: "",
      is_published: true
    };
    
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

   addHtmlEntities(str) {
     return String(str)
     .replace(/&lt;/g, "<")
     .replace(/&gt;/g, ">");
   } 
   
   stripHtmlEntities(str) {
    return String(str)
      .replace(/<br>/g, "\n" );
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;



    const url = `/api/v1/show/${id}`;
    console.log('this.url', url);

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(data => this.setState( { ...data } ))
      .catch(error => console.log(error.message) );
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  updateRecipe(event) {
    event.preventDefault();
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/update/${id}`;
    const { name, ingredients, image, instruction } = this.state;
    const body = {
      name,
      ingredients,
      image,
      instruction: instruction.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: 'PATCH',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then( (response) => {
        alert('Recipe updated successfully');
      })
      .then(response => this.props.history.push(`/recipe/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    const { name, ingredients, image, instruction, is_published } = this.state;
    const { recipe } = this.state;
    const recipeInstruction = this.stripHtmlEntities(instruction);

      return (
      <>
        < Navbar />
        <div id="page-content">
          <div className="main-shot" style={{ backgroundImage: `url(${this.state.image})` }}></div>
          <div className="container mt-5 mb-5 jumbotron bg-transparent">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3 py-2 px-3 main-color">
                <h1 className="font-weight-normal mb-5 display-6 recipeTitle">
                  Update the recipe: <br />
                  <span>{name}</span>.
                </h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="recipeName">Recipe name</label>
                  <input 
                    type="text"
                    name="name"
                    id="recipeName"
                    className="form-control lite-text"
                    required
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients">Image</label>
                  <input 
                    type="text"
                    name="image"
                    id="recipeImage"
                    className="form-control lite-text"
                    required
                    value={image}
                    onChange={this.onChange}
                  />
                  <small id="ingredientsHelp" className="form-text text-muted">
                    For now, only upload a hosted endpoint.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients">Ingredients</label>
                  <input 
                    type="text"
                    name="ingredients"
                    id="recipeIngredients"
                    className="form-control lite-text"
                    required
                    value={ingredients}
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
                  className="form-control lite-text"
                  name="instruction" 
                  id="instruction" 
                  cols="30" 
                  rows="5"
                  required
                  value={recipeInstruction}
                  onChange={this.onChange}
                />
                <button type="submit" onClick={this.updateRecipe} className="btn custom-button mt-3">
                  Update Recipe
                </button>
              </form>
              <Link to={`/recipe/${this.state.id}`} className="btn btn-link mt-3">
                &#60; Back to Recipe
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
export default UpdateRecipe;