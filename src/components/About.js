import React, { useState } from "react";
import Loader from "./Loader";
const About = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoading = () => {
    setLoaded(true);
  };
  return (
    <div className="section about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6 wrap">
            <div className="about-desc">
              <h1 className="bold-text">About</h1>
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
              className="profile-img"
              src={window.location.origin + "/images/portfolio.jpg"}
              alt="profilepicture"
              onLoad={onLoading}
            />
            {!loaded && <Loader />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
