import React from "react";
import data from "../data";

const Programming = () => {
  const openPdf = ref => {
    const url = window.location.origin + "/documents/" + ref;
    window.open(url, "_blank");
  };

  return (
    <section className="ftco-section">
      <div className="ftco-section" id="about-section">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-6 wrap">
            <div className="about-desc">
              <h1 className="bold-text">Coding</h1>
            </div>
          </div>
        </div>
      </div>
      {data.programming.map(item => (
        <div key={item.id} id="project" className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>{item.name}</span>
              <h5>{item.category}</h5>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7 justify-content-start mb-5">
                <h5>Role: {item.role}</h5>
                <h6>{item.description}</h6>
                <a href={item.live}>{item.placeholder}</a>

                <div className="row justify-content-center">
                  <div className="col-md-4"></div>
                  <div className="col-md-2">
                    <ul className="icons">
                      <li>
                        <a href={item.github}>
                          <i className="icon-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    {item.report}
                    <div>
                      <a href="#" onClick={() => openPdf(item.pdf)}>
                        {item.pdf}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={window.location.origin + "/images/" + item.img}
                alt={item.name}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Programming;
