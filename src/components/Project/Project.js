import React from "react";
import "./Project.css";
import Vibe from "../../images/Mood app pic.png"
import Impulse from "../../images/impulse.png"
import Artist from "../../images/artist.png"

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        Portfolio -
        
      </p>
      <div className="project-details">
        <img src={Impulse} alt="Project React Simple Portfolio" width = "700px"
        height = "500px"/>
        <div className="details-left">
          <p className="gray-text">
           Impulse! The Game
          </p>
        </div>
        </div>
        <div className="project-details">
        <img src={Vibe} alt="Project React Simple Portfolio" width = "700px"
        height = "500px" />
        <div className="details-left">
          <p className="gray-text">
           Vibe Check
          </p>
        </div>
        </div>

        <div className="project-details">
        <img src={Artist} alt="Project React Simple Portfolio" width = "700px"
        height = "500px"/>
        <div className="details-left">
          <p className="gray-text">
           Artist Search
          </p>
        </div>
        
      </div>
      
      
    </section>
  );
}

export default Project;
