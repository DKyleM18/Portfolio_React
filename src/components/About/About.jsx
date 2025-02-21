import "./About.css";
import avatarImage from "../../assets/about-avatar.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__avatar">
        <img className="about__avatar-image" src={avatarImage} alt="Avatar" />
      </div>
      <div className="about__info">
        <h2 className="about__title">Hello</h2>
        <p className="about__info-text">
          <b>I am Kyle Messersmith</b>: A Full Stack Developer from North
          Carolina, currently living in Ohio. I have honed my skills in web
          development with TripleTen&apos;s Software Engineering Bootcamp. I am
          proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, and
          MongoDB.
        </p>
        <p className="about__info-text">
          Studying web development at TripleTen has been a great learning
          experience for me. I focused on creating dynamic and interactive web
          pages using HTML, CSS, and JavaScript, how to build client-side and
          server-side applications using React and Node.js, and how to use
          MongoDB to store and retrieve data. I am excited to continue learning
          and applying these skills in future projects.
        </p>
      </div>
    </section>
  );
}
