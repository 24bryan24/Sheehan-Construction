import React from "react";

//Styles
import "./Header.scss";

// //Font awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import ToggleButton from "./ToggleButton"

//Logo
import LogoBlack from "./LogoBlack";

function Header() {
  return (
    <nav style={{ "--color": "white" }}>
      <div className="container">
        <div className="nav-items">
          <div className="logo-container">
            <div className="logo">
              <a>
                <img src="/assets/images/sheehan-logo.png" />
              </a>
            </div>
          </div>

          <div className="menu">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div
            className="mobile-menu-icon"
            // onClick={() => props.openMobileMenu()}
          >
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </div>
          {/* <ToggleButton /> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
