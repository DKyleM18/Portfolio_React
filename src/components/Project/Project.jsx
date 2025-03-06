import React from "react";
import "./Project.css";
import newsImage from "../../assets/news.png";
import wtwrImage from "../../assets/wtwr.png";

const Project = () => {
  return (
    <section className="project__container">
      <h2 className="project__title">Projects</h2>
      <p className="project__description">
        Here are a few examples of projects I have worked on. Click on the links
        to view the source code on GitHub or see the live version of the
        project.
      </p>
      <div className="project__list">
        <div className="project__item">
          <h3 className="project__item-title">What to Wear</h3>
          <p className="project__item-description">
            React application using Weather API to list saved clothing items
            based on user&apos;s current location&apos;s weather.
          </p>
          <div className="project__item-links">
            <a href="https://github.com/DKyleM18/WhatToWear_React">GitHub</a>
            <a href="https://d.kyle.blinklab.com/wtwr/">Live</a>
          </div>
          <img
            className="project__item-image"
            src={wtwrImage}
            alt="Project 1"
          />
        </div>
        <div className="project__item">
          <h3 className="project__item-title">News Explorer</h3>
          <p className="project__item-description">
            React application using News API to fetch news articles from the
            past week based on user input.
          </p>
          <div className="project__item-links">
            <a href="https://github.com/DKyleM18/NewsExplorer_React">GitHub</a>
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
