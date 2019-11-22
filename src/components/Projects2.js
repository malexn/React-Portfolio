import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
import "../css/projects.css";

const Projects2 = () => {
  return (
    <div>
      <div className="ftco-section about-section">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-6 wrap">
            <div className="about-desc">
              <h1 className="bold-text">Code</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {data.programming.map(code => (
          <Link key={code.id} to={`/projects2/${code.id}`}>
            <div className="wrapper-card">
              <div className="container-card">
                <p id="txt">{code.name}</p>
                <h5 id="txt">{code.category}</h5>
                <h5 id="txt">{code.role}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="ftco-section about-section">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6 wrap ftco-animate">
            <div className="about-desc">
              <h1 className="bold-text" id="about">
                Prototype
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {data.prototypes.map(proto => (
          <Link key={proto.id} to={`/projects2/${proto.id}`}>
            <div className="wrapper-card">
              <div className="container-card">
                <p id="txt">{proto.name}</p>
                <h5 id="txt">{proto.role}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects2;
