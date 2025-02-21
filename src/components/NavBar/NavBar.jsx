import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="navbar-logo">
          <li className="navbar-name">Daniel Kyle Messersmith</li>
        </div>
        <div className="navbar-links">
          <li className="navbar-projects">
            Projects
            <ul className="navbar-projects-list">
              <li className="navbar-projects-list-item">
                <Link to="https://d.kyle.blinklab.com">WTWR</Link>
              </li>
              <li className="navbar-projects-list-item">
                <Link to="https://dkylem18.github.io/se_project_news/">
                  News Explorer
                </Link>
              </li>
              <li className="navbar-projects-list-item">
                <Link to="/project3">Project 3</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-socials">
            Socials
            <ul className="navbar-socials-list">
              <li className="navbar-socials-list-item">
                <a href="https://github.com/DKyleM18">GitHub</a>
              </li>
              <li className="navbar-socials-list-item">
                <a href="https://www.linkedin.com/in/d-kyle-messersmith/">
                  LinkedIn
                </a>
              </li>
              <li className="navbar-socials-list-item">
                <a href="https://discord.com/users/DKyleM18">Discord</a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
