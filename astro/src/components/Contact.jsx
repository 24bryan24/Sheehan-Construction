import React from "react";

//Styles
import "./Contact.scss";

//React-router-dom
// import { Link } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";

function Contact({ phone, name, established, email, workingArea }) {
  const phoneNoSpaces = phone.replace("-", "").replace("-", "");

  return (
    <div className="contactView">
      <div className="container">
        <div className="contactForm section">
          <h2>
            Contact <Dots />
          </h2>
          <Square />

          <div className="container-inner">
            <div className="wrapper">
              <div className="info">
                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="inside-button"
                    />
                    <h4>Where we are</h4>
                  </div>
                  <p>{workingArea}</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="inside-button"
                    />
                    <h4>Contact</h4>
                  </div>
                  <p>{name}</p>
                  <p>{phone}</p>
                  <p>{email}</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faClock} className="inside-button" />
                    <h4>Established in </h4>
                  </div>
                  <p>{established}</p>
                </div>
              </div>

              <div className="form">
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />

                  <textarea placeholder="Message"></textarea>

                  <div className="send">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      size="xs"
                      className="inside-button-send"
                    />
                    <a>Send</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="rental section">
          <div className="container-inner">
            <h2>Call Now</h2>

            <h1>
              <a
                style={{ color: "inherit", textDecoration: "inherit" }}
                href={`tel:${phoneNoSpaces}`}
              >
                +{phone}
              </a>
            </h1>
            <p>
              <a
                style={{ color: "inherit", textDecoration: "inherit" }}
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
