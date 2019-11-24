import React, { useState } from "react";
import MediaPlayer from "./MediaPlayer";

import data from "../data";

const Project = ({ match }) => {
  const [open, setOpen] = useState(false);
  const openPdf = ref => {
    const url = window.location.origin + "/documents/" + ref;
    window.open(url, "_blank");
  };

  const fetchItem = () => {
    const fetchId = match.params.id;
    for (let i = 0; i < data.programming.length; i++) {
      if (data.programming[i].id == fetchId) {
        const item = data.programming[i];
        return (
          <div key={item.id} className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section">
                <span>{item.name}</span>
                <h5>{item.category}</h5>
              </div>
              <div className="row justify-content-center item-row">
                <div className="col-md-7 justify-content-start mb-5">
                  <h5>Role: {item.role}</h5>
                  <h6>Environment: {item.environment}</h6>
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
                        <a href="" onClick={() => openPdf(item.pdf)}>
                          {item.pdf}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={window.location.origin + "/images/" + item.img}
                    alt={item.name}
                  />
                  <span className="dgi" onClick={() => setOpen(!open)}>
                    {item.video}
                  </span>
                  {open && <MediaPlayer video={item.video} />}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    for (let i = 0; i < data.prototypes.length; i++) {
      if (data.prototypes[i].id == fetchId) {
        const item = data.prototypes[i];
        return (
          <div key={item.id} className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section">
                <span>{item.name}</span>
              </div>
              <div className="row justify-content-center item-row">
                <div className="col-md-7 justify-content-start mb-5">
                  <h5>Role: {item.role}</h5>
                  <h6>Environment: {item.environment}</h6>
                  <h6>{item.description}</h6>
                  <a href={item.live}>{item.placeholder}</a>
                  <span onClick={() => setOpen(!open)}>{item.video}</span>
                  {open && <MediaPlayer video={item.video} />}
                </div>
                <div className="col-md-4">
                  <a href="" onClick={() => openPdf(item.pdf)}>
                    <img
                      className="report-img"
                      src={window.location.origin + "/images/" + item.img}
                      alt={item.name}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  return <section>{fetchItem()}</section>;
};

export default Project;
