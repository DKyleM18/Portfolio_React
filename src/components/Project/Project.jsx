import React from "react";
import "./Project.css";
import newsImage from "../../assets/news.png";
import wtwrImage from "../../assets/wtwr.png";

const Project = () => {
  return (
    <section className="project__container">
      <h2 className="project__title">Projects</h2>
      <p className="project__description">
        Here are some of the projects I have worked on.
      </p>
      <div className="project__list">
        <div className="project__item">
          <h3 className="project__item-title">Project 1</h3>
          <p className="project__item-description">Description of project 1.</p>
          <div className="project__item-links">
            <a href="https://github.com/DKyleM18">GitHub</a>
            <a href="https://d.kyle.blinklab.com/wtwr/">Live</a>
          </div>
          <img
            className="project__item-image"
            src={wtwrImage}
            alt="Project 1"
          />
        </div>
        <div className="project__item">
          <h3 className="project__item-title">Project 2</h3>
          <p className="project__item-description">Description of project 2.</p>
          <div className="project__item-links">
            <a href="https://github.com/DKyleM18">GitHub</a>
            <a href="https://d.kyle.blinklab.com/news/">Live</a>
          </div>
          <img
            className="project__item-image"
            src={newsImage}
            alt="Project 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
