import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy; 2025 Daniel Kyle Messersmith
      </div>
      <div className="footer__socials">
        <a href="https://discord.com/users/DKyleM18" className="footer__link">
          Discord
        </a>
        <a href="https://github.com/DKyleM18" className="footer__link">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/d-kyle-messersmith"
          className="footer__link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
