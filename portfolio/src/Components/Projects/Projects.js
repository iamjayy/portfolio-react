import React from "react";
import "./Projects.css";
import usa from "../../img/usa.jpg";

function Projects() {
  return (
    <section className="wrapper text-dark bg-grey destinations">
      <div className="container d-flex-c">
        <div className="text-center">
          <h6 className="heading my-1 font-x2">Projects</h6>
          <p className="my-3">Here are some of my work</p>
        </div>
        {/* First Row */}
        <ul className="d-flex-r nospace">
          <li className="hover1">
            <img src={usa} alt="usa" />
            <div className="overlay">
              <h2>India</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>

          <li className="hover1">
            <img src={usa} alt="usa" />
            <div className="overlay">
              <h2>usa</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>

          <li className="hover1">
            <img src={usa} alt="uk" />
            <div className="overlay">
              <h2>uk</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>
        </ul>

        {/* second Row */}
        <ul className="d-flex-r nospace">
          <li className="hover1">
            <img src={usa} alt="india" />
            <div className="overlay">
              <h2>India</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>

          <li className="hover1">
            <img src={usa} alt="usa" />
            <div className="overlay">
              <h2>usa</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>

          <li className="hover1">
            <img src={usa} alt="uk" />
            <div className="overlay">
              <h2>uk</h2>
              <a href="/" className="info">
                View
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
