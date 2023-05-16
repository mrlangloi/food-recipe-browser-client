import React from "react";

function About(props) {
  return (
    <div className="about-div">
      <h5>About Me</h5>
      <div className="about-p-div">
        <p>
          Recipe browser web application by Ricky Cheung
        </p>
        <p>
          Contact: rcheung1997@gmail.com
        </p>
        <p>
          <a href="https://github.com/mrlangloi/food-recipe-browser-client" target="_blank" rel="noopener noreferrer">Front-end Github</a>
        </p>
        <p>
          <a href="https://github.com/mrlangloi/food-recipe-browser-server" target="_blank" rel="noopener noreferrer">Back-end Github</a>
        </p>
      </div>
      <h5>Sources</h5>
      <div className="about-p-div">
        <p>
          <a href="https://materializecss.com/about.html" target="_blank" rel="noopener noreferrer">MaterializeCSS</a>
        </p>
        <p>
          <a href="https://developer.edamam.com/edamam-recipe-api" target="_blank" rel="noopener noreferrer">Edamam Food Recipe Search API</a>
        </p>
      </div>
    </div>
  );
}

export default About;
