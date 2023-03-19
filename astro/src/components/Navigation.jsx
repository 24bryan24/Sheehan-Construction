import React from "react";

//React-router-dom
// import {NavLink} from 'react-router-dom';

import LogoBlack from "./LogoBlack";

//Styles
import "./Navigation.scss";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation(props) {
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <a href="/" className="logo">
            {/* <h3>LOGO</h3>   */}
            <img
              style={{ width: "200px", height: "100px" }}
              src="/assets/images/sheehan-construction-logo.png"
            />
          </a>

          <div className="menu">
            <ul>
              <li>
                <a href="/" exact activeClassName="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" exact activeClassName="active">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" exact activeClassName="active">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" exact activeClassName="active">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="rental">
            <a href="/contact" activeClassName="activeRental">
              Make an appointment today!
            </a>
          </div>

          <div
            className="mobile-menu-icon"
            onClick={() => props.openMobileMenu()}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
