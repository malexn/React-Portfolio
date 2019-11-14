import React from "react";

function Footer() {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section" id="contact">
      <div id="footer" className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <div className="ftco-footer-widget">
              <h2 className="mb-3">Contact</h2>
              <p className="h3 email">
                <a href="#">alexander.nordh@gmail.com</a>
              </p>
            </div>
            <div className="ftco-footer-widget mb-5">
              <ul className="ftco-footer-social list-unstyled">
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
      </div>
    </footer>
  );
}

export default Footer;
