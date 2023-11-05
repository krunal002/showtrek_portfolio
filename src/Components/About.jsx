import React from "react";

// import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a <span className="text-highlight">front-end developer</span> from
          Maharashtra, India. I specialize in building apps with a strong
          emphasis on{" "}
          <span className="text-highlight">
            React, JavaScript, Redux Toolkit, Node.js, and MongoDB.
          </span>{" "}
          I take pleasure in simplifying intricate problems into elegant,
          user-friendly designs. As a software engineer, I'm passionate about
          tackling challenges.
        </p>

        <p>
          I am having an experience of building high-performing, responsive,
          beautiful web applications to deliver a unique, intuitive user
          experience that works, also keen interest in UI/UX with some nice
          designing skills. I am a well-trained a teammate who loves to share
          ideas and prioritizes communication in order to achieve goals within
          the set deadlines. I enjoy being challenged and working on projects
          that require me to step outside of my comfort zone.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699176382/Portfolio/webDesign.svg"
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699176382/Portfolio/webDesign.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
