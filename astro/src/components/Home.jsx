import React, { useRef, useState } from "react";
import client from "../client";

//Styles
import "./Home.scss";

//Font awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from "./Carousel";
import PortfolioSlider from "./PortfolioSlider";
// import ContactHome from "../ContactHome";

//Certificate paths
// import ISO9001 from '../Img/Certificates/iso9001.jpg';
// import ISO14001 from '../Img/Certificates/iso14001.jpg';
// import ISO18001 from '../Img/Certificates/iso18001.jpg';

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import Medal from "../Icons/medal.png";
import Trust from "../Icons/trust.png";
import Trophy from "../Icons/trophy.png";
// import { NavLink, Link } from 'react-router-dom';
import { useEffect } from "react";
// import { useTheme } from "../hooks/useTheme";

function Home({ carouselData, companyName, aboutHomePageBody, portfolioData }) {
  //   const linkRefOne = useRef()
  //   const linkRefTwo = useRef()
  //   const linkRefThree = useRef()
  //   const { ref, changeRefs } = useTheme();
  // console.log(ref.current)

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "about"]{
  //       title,
  //       slug,
  //       body,
  //       image{
  //         asset->{
  //           _id,
  //           url
  //         },
  //       },
  //       hexCode,
  //     }`
  //     )
  //     .then((data) => setData(data))
  //     .catch(console.error);
  // }, []);

  // console.log(data[0]?.body[0]?.children[0]?.text)

  // useEffect(() => {
  //   changeRefs([linkRefOne, linkRefTwo, linkRefThree]);
  // }, [])

  return (
    <div className="homeView">
      <div className="container">
        {/* FIX */}
        {/* <div className="rentalOffer">
            <p>Not sure what project you need done? We can help!</p>
            <NavLink to="/rental" onClick={() => props.scrollToTop()}>
              Learn More
            </NavLink>
          </div> */}

        <div
          // ref={linkRefOne}
          id="about"
          className="aboutUs section"
          data-aos="fade-right"
        >
          <h2>
            About
            <Dots />
          </h2>

          <div className="container-inner">
            <h4>
              <span className="golden-rule">{companyName.split(" ")[0]}</span>{" "}
              Construction
            </h4>
            <div className="text">
              <p>
                {aboutHomePageBody}
                {data[0]?.body[0]?.children[0]?.text}
              </p>
            </div>
          </div>

          <Square />
        </div>

        <div
          // ref={linkRefTwo}
          className="portfolio section"
          data-aos="fade-left"
        >
          <h2>
            Portfolio
            <Dots />
          </h2>

          <div className="container-inner">
            <h4>Descriptions</h4>

            <Square />
            <PortfolioSlider portfolioData={portfolioData} />
          </div>
        </div>
      </div>

      <div className="allWorks">
        <Circle />

        <div className="container">
          <h3>Want to see all our work? </h3>

          {/* Used to be NavLinks...I changed it because wouldn't compile when removing the to parameter */}
          <a
            href="/portfolio"
            // onClick={() => props.scrollToTop()}
          >
            View the entire Portfolio
          </a>
        </div>
      </div>

      {/* <ContactHome  */}
      {/* // linkRefThree={linkRefThree}  */}
    </div>
  );
}

export default Home;
