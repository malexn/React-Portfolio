import React from "react";

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-4 justify-content-center">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li className="ftco-animate">
                  <a href="#" className="skill">
                    <span className="icon-layers"></span>
                  </a>
                </li>
              </ul>
              <div className="media-body">
                <h3 className="heading">UI/UX DESIGN</h3>
                <h3 className="heading">PROTOTYPING</h3>
                <h3 className="heading">PROJECT MANAGEMENT</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li className="ftco-animate">
                  <a href="#" className="skill">
                    <span className="icon-code"></span>
                  </a>
                </li>
              </ul>
              <div className="media-body">
                <h3 className="heading">HTML/CSS</h3>
                <h3 className="heading">JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="media block-6 services p-3 py-4 d-block text-center">
              <ul className="ftco-footer-social list-unstyled">
                <li className="ftco-animate">
                  <a href="#" className="skill">
                    <span className="icon-library_books"></span>
                  </a>
                </li>
              </ul>
              <div className="media-body">
                <h3 className="heading">REACT</h3>
                <h3 className="heading">D3.JS</h3>
                <h3 className="heading">UNITY</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
