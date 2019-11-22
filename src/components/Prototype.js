import React, { useState, useEffect } from "react";
import MediaPlayer from "./MediaPlayer";
import data from "../data";

const Prototype = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const [proto, setProto] = useState({});
  const [open, setOpen] = useState(false);

  const fetchItem = () => {
    const fetchId = match.params.name;
    const proto = data.prototypes[fetchId - 1];
    console.log(proto);
    setProto(proto);
  };

  const openPdf = ref => {
    const url = window.location.origin + "/documents/" + ref;
    window.open(url, "_blank");
  };

  return (
    <section>
      <div key={proto.id} id="project" className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span>{proto.name}</span>
          </div>
          <div className="col-md-7 justify-content-start mb-5">
            <h5>Role: {proto.role}</h5>
            <h6>{proto.description}</h6>
            <a href={proto.prototype}>{proto.placeholder}</a>
            <span onClick={() => setOpen(true)}>{proto.video}</span>
            {open && <MediaPlayer video={proto.video} />}
          </div>
          <div className="col-md-4 card-wrapper">
            <div className="card-container" id="c0">
              <a href="#" onClick={() => openPdf(proto.pdf)}>
                <img
                  className="report-img"
                  src={window.location.origin + "/images/" + proto.img}
                  alt={proto.name}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
