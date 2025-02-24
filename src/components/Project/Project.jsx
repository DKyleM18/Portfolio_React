import React from "react";

const Project = () => {
  return (
    <section>
      <h2 className="project__title">Projects</h2>
      <p className="project__description">
        Here are some of the projects I have worked on.
      </p>
      <div className="project__list">
        <div className="project__item">
          <h3 className="project__item-title">Project 1</h3>
          <p className="project__item-description">Description of project 1.</p>
        </div>
        <div className="project__item">
          <h3 className="project__item-title">Project 2</h3>
          <p className="project__item-description">Description of project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
