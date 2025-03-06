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
          Carolina, currently living in Ohio. I am proficient in HTML, CSS,
          JavaScript, React, Node.js, Express.js, and MongoDB.
        </p>
        <p className="about__info-text">
          I have a strong passion for creating dynamic and interactive web
          pages. My expertise includes building client-side and server-side
          applications using React and Node.js, and utilizing MongoDB for data
          storage and retrieval. I am experienced in developing RESTful APIs,
          integrating third-party services, and implementing responsive design
          principles to ensure a seamless user experience across devices.
        </p>
        <p className="about__info-text">
          I am skilled in version control using Git and have experience with
          continuous integration and deployment (CI/CD) pipelines. I am also
          familiar with containerization technologies like Docker, which helps
          in creating consistent development and production environments.
        </p>
        <p className="about__info-text">
          I am excited to continue learning and applying these skills in future
          projects, and I am always looking for opportunities to collaborate
          with other developers to create innovative solutions.
        </p>
      </div>
    </section>
  );
}
