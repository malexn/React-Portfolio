import React from "react";

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-4 justify-content-center">
            <div className="text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li>
                  <a href="#" className="skill">
                    <span className="icon-layers"></span>
                  </a>
                </li>
              </ul>
              <div>
                <h3>UI/UX DESIGN</h3>
                <h3>PROTOTYPING</h3>
                <h3>PROJECT MANAGEMENT</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li>
                  <a href="#" className="skill">
                    <span className="icon-code"></span>
                  </a>
                </li>
              </ul>
              <div>
                <h3>HTML/CSS</h3>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li>
                  <a href="#" className="skill">
                    <span className="icon-library_books"></span>
                  </a>
                </li>
              </ul>
              <div>
                <h3>REACT</h3>
                <h3>D3.JS</h3>
                <h3>UNITY</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
