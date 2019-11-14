import React from "react";
import { Link } from "react-router-dom";
import { whileStatement } from "@babel/types";

function Nav() {
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
              <Link className="colorlib-logo" to="/about">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
