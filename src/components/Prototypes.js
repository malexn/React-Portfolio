import React, { Component } from "react";
import data from "../data";
import MediaPlayer from "./MediaPlayer";

class Prototypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    this.setState(oldState => ({ isOpen: !oldState.isOpen }));
  }

  openPdf(ref) {
    const url = window.location.origin + "/documents/" + ref;
    window.open(url, "_blank");
  }

  render() {
    const { isOpen } = this.state;
    return (
      <section className="ftco-section">
        <div className="ftco-section about-section">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-6 wrap ftco-animate">
              <div className="about-desc">
                <h1 className="bold-text" id="about">
                  Prototypes
                </h1>
              </div>
            </div>
          </div>
        </div>
        {data.prototypes.map(item => (
          <div key={item.id} id="project" className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span>{item.name}</span>
              </div>
              <div className="col-md-7 justify-content-start mb-5">
                <h5>Role: {item.role}</h5>
                <h6>{item.description}</h6>
                <a href={item.prototype}>{item.placeholder}</a>
                <span onClick={this.toggleBox}>{item.video}</span>
                {isOpen && <MediaPlayer video={item.video} />}
              </div>
              <div className="col-md-4 card-wrapper">
                <div className="card-container" id="c0">
                  <a href="#" onClick={() => this.openPdf(item.pdf)}>
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
        ))}
      </section>
    );
  }
}
export default Prototypes;
