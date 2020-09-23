import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">
          <Link className="home-link" to="/">
            Eugene
          </Link>
        </h3>
        <nav className="nav nav-masthead justify-content-center">
          <NavLink className="nav-link" to="/aboutme">
            About Me
          </NavLink>
          <NavLink className="nav-link" to="/pet-projects">
            Pet Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
