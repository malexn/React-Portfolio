import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="navbar-brand">
              <Link className="navbar-text" to="/">
                Alexander Nordh
              </Link>
            </div>
            <div className="navbar-brand">
              <Link className="navbar-text" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
