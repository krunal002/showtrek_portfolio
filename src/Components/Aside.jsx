import React, { useContext } from "react";

import Email from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DataContext } from "../Context/DataContext";

const Aside = () => {
  const { showContacts, setShowContacts } = useContext(DataContext);

  return (
    <aside className={`sidebar ${showContacts ? "active" : ""} `} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box" style={{ borderRadius: "50%" }}>
          <img
            src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699181385/krunal002.jpg"
            alt="krunal"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Krunal Mandlekar">
            Krunal Mandlekar
          </h1>
          <div className="profile_tabs">
            {/* <p className="title">Frontend Engineer</p> */}
            <p className="title">React Developer</p>
          </div>
        </div>

        <ul className="social-list social-list-hide">
          <li className="social-item">
            <a
              href="https://github.com/krunal002"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ fontSize: "xs" }} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/krunal-mandlekar-106b95299"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "xs" }} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/krunalmandlekar"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon sx={{ fontSize: "s" }} />
            </a>
          </li>
        </ul>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setShowContacts((prev) => !prev)}
        >
          <span>Show Contacts</span>

          <KeyboardArrowDownIcon
            sx={{
              "@media (min-width: 580px)": {
                display: "none",
              },
            }}
          />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Email />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:krunalmandlekar@gmail.com"
                className="contact-link"
              >
                krunalmandlekar@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIcon />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+919764012801" className="contact-link">
                +91 9764012801
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnIcon />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Nagpur, Maharashtra</address>
            </div>
          </li>

          {showContacts ? (
            <ul className="social-list">
              <li className="social-item">
                <a
                  href="https://github.com/krunal002"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: "xs" }} />
                </a>
              </li>

              <li className="social-item">
                <a
                  href="https://twitter.com/krunalmandlekar"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon sx={{ fontSize: "s" }} />
                </a>
              </li>

              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/krunal-mandlekar-106b95299"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: "xs" }} />
                </a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
};

export default Aside;
