import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div id="header" className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <Link className="colorlib-logo" to="/">
                Alexander Nordh
              </Link>
            </div>
            <div className="colorlib-navbar-brand">
              <Link className="colorlib-logo" to="/projects">
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
