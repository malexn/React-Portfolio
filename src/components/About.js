import React from "react";
import profilepicture from "../images/portfolio.jpg";

function About() {
  return (
    <div className="ftco-section about-section">
      <div id="about" className="container">
        <div className="row d-flex" data-scrollax-parent="true">
          <div className="col-md-2"></div>
          <div className="col-md-6 wrap ftco-animate">
            <div className="about-desc">
              <h1 className="bold-text" id="about">
                About
              </h1>
              <div className="p-5">
                <p>
                  Master student, Interactive Media Technology | KTH Royal
                  Institute of Technology, with an interest for front-end
                  development, UI/UX, web accessibility and project management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={profilepicture}
              alt="profilepicture"
              style={{ height: 300 + "px", width: 200 + "px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
