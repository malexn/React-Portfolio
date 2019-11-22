import React from "react";
import Programming from "./Programming";
import Prototypes from "./Prototypes";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects-list">
      <Programming />
      <Prototypes />
    </div>
  );
};

export default Projects;
