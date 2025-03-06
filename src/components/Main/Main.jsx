import React from "react";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
// import backgroundImage from "../assets/background.jpg";
// import personalPhoto from "../assets/personalPhoto.jpg";

const MainPage = () => {
  return (
    <div>
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
