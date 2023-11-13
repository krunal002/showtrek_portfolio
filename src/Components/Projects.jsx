import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Projects = () => {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web Applications</button>
          </li>
        </ul>

        <div className="filter-select-box">
          {/* <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button> */}

          {/* <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul> */}
        </div>

        <ul className="project-list">
          {/* Sporty snap */}
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://sportysnap.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <VisibilityIcon />
                </div>

                <img
                  src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699174844/Portfolio/sportySnap.png"
                  alt="sportySnap"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Sporty Snap</h3>

              <p className="project-category">Social Media App</p>
              <p className="project-category">
                Experience social media app, utilized ReactJS, and a full tech
                stack. Highlights include user authentication, dynamic post
                management, and versatile user actions.
              </p>

              <p className="project-category">Web development</p>
            </a>
          </li>

          {/* Pristine card */}
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://pristinecard.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <VisibilityIcon />
                </div>

                <img
                  src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699175040/Portfolio/pristineCard.png"
                  alt="pristinecard"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Pristine Cards</h3>

              <p className="project-category">E-Commerse App</p>
              <p className="project-category">
                Utilized ReactJS, MockBee, and a range of front-end
                technologies. Achieved user authentication, robust filtering and
                sorting, and streamlined cart and order management.
              </p>

              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>

        <br />

        <h4 className="h3 service-item-title">More projects - </h4>
        <ul className="service-list">
          {/* EduSculptor */}
          <a
            href="https://edu-sculptor.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="service-item"
          >
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1698583222/icon-dev_dv8ox1.svg"
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">EduSculptor</h4>
              <span>Students Management App</span>
              <p className="service-item-text">
                Tech Stack : ReactJS, Redux, MongoDB, Express JS, Material UI,
                HTML, CSS
              </p>
            </div>
          </a>

          {/* Patient Care */}
          <a
            href="https://patientsCare.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="service-item"
          >
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1698583222/icon-dev_dv8ox1.svg"
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Patient Care</h4>
              <span>Patients Management App</span>
              <p className="service-item-text">
                Tech Stack : Material UI, MongoDB, ReactJS, Redux, Express JS,
                HTML, CSS
              </p>
            </div>
          </a>

          {/* Budget Budy */}
          <a
            href="https://budget-budy.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="service-item"
          >
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1698583222/icon-dev_dv8ox1.svg"
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Budget_Buddy</h4>
              <span>Finance Management App</span>
              <p className="service-item-text">
                Tech Stack : ReactJS, Redux, MongoDB, Express JS, Material UI,
                HTML, CSS
              </p>
            </div>
          </a>

          {/* Component Library */}
          <a
            href="https://component-library-002.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="service-item"
          >
            <div className="service-icon-box">
              <img
                src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1698583222/icon-dev_dv8ox1.svg"
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Component Library</h4>
              <span>CSS Component Library</span>
              <p className="service-item-text">
                Tech Stack : ReactJS, React Context, Material UI, HTML, CSS
              </p>
            </div>
          </a>
        </ul>
      </section>
    </article>
  );
};

export default Projects;
