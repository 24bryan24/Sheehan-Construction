import React from "react";

//Styles
import "./About.scss";

//Icons
import Building from "../Icons/about/Building";
import Excavator from "../Icons/about/Excavator";
import Wrench from "../Icons/about/Wrench";
import Painter from "../Icons/about/Painter";
import Spray from "../Icons/about/Spray";
import Shield from "../Icons/about/Shield";
import Standard1 from "../Icons/about/Standard1";
import Standard2 from "../Icons/about/Standard2";
import Standard3 from "../Icons/about/Standard3";
import Standard4 from "../Icons/about/Standard4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import Triangle from "../Icons/Triangle";

function About({ aboutBody, aboutCompany }) {
  return (
    <div className="aboutView">
      <div className="container">
        <div className="aboutUs section">
          <h2>
            About Us <Dots />
          </h2>

          <div className="container-inner">
            <h4 className="company-name">
              <span className="golden-rule">{aboutCompany.split(" ")[0]}</span>{" "}
              Construction
            </h4>

            <div className="text">
              <p>{aboutBody}</p>
            </div>
          </div>

          <Triangle />
          <Square />
        </div>

        <div className="whatWeDo section">
          <h2>
            What we do <Dots />
          </h2>

          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <Building />
                <p>Renovations</p>
              </div>

              <div className="card">
                <Excavator />
                <p>Reconstruction</p>
              </div>

              <div className="card">
                <Wrench />
                <p>Handy Man Services</p>
              </div>

              <div className="card">
                <Painter />
                <p>Painting</p>
              </div>

              <div className="card">
                <Spray />
                <p>Touch Up Work</p>
              </div>

              <div className="card">
                <Shield />
                <p>Seasonal Protection</p>
              </div>
            </div>
          </div>

          <Square />
          <Circle />
        </div>

        <div className="ourStandards section">
          <h2>
            Our standards <Dots />{" "}
          </h2>

          <div className="container-inner">
            <div className="text">
              <p>
                We take measures in all activities in the company to reduce the
                generation of waste, and we apply procedures that are friendly
                to the environment and protection of life and health at work.
              </p>
            </div>

            <div className="standard-container">
              <div className="standard">
                <Standard1 />
                <div className="standard-text">
                  <h4>Great service</h4>
                  <p>
                    You can count on the high quality of our work and compliance
                    with agreed deadlines and prices.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard2 />
                <div className="standard-text">
                  <h4>High standards</h4>
                  <p>
                    When providing our services, we always try to proceed in
                    accordance with the requirements of ISO and STN standards
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard3 />
                <div className="standard-text">
                  <h4>A team of professionals</h4>
                  <p>
                    Our customers can always count on high expertise and the
                    professionalism of our workers.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard4 />
                <div className="standard-text">
                  <h4>Creative solutions</h4>
                  <p>
                    Since our inception, we have implemented dozens of
                    construction projects of various nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
