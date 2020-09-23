import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <>
      <h1 className="cover-heading">Hello, my name is Eugene Stepanenko</h1>
      <p className="lead">
        I am Junior React Developer and this is my website where you can check
        my recent pet projects and find out how to contact with me.
      </p>
      <p className="lead">
        <Link to="/aboutme" className="btn btn-lg btn-secondary">
          Learn more
        </Link>
      </p>
    </>
  );
}

export default Main;
