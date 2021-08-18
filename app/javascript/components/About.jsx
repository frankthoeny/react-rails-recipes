import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default () => (
  <>
    < Navbar ></ Navbar>
    <div className="third-color"></div>
    
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Why we create this list
          </p>
          <hr className="my-4" />
          <Link
            to="/cooks"
            className="btn btn-lg custom-button"
            role="button"
          >
            Discover our Kitchen
          </Link>
        </div>
      </div>
    </div>  

    <div id="page-content">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
                  <h1 className="font-weight-normal mb-5">
                    Discover The Effort Text TK.
                  </h1>
                  <p className="">
                    Something to come here...
                  </p>
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