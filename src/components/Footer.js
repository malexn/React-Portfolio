import React from "react";

const Footer = () => {
  const onClickMail = function() {
    window.location.href = "mailto:alexander.nordh@gmail.com";
  };

  return (
    <footer className="ftco-footer ftco-bg-dark" id="contact">
      <div id="footer" className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <div className="ftco-footer-widget">
              <h2 className="mb-3">Contact</h2>
              <p className="h3 email">
                <a href="#" onClick={onClickMail}>
                  alexander.nordh@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <ul className="icons">
              <li className="ftco-animate">
                <a href="https://www.linkedin.com/in/alexander-nordh-464133164/">
                  <span className="icon-linkedin"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="https://github.com/malexn">
                  <span className="icon-github"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
