import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default () => (
  <>
  < Navbar ></ Navbar>
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
  </>
);