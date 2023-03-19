import React, { useEffect, useState } from "react";
import client from "../client";

// import { Link } from 'react-router-dom';

//Styles
import "./Footer.scss";

//Icons
import BackToTop from "../Icons/BackToTop.jsx";
// import { useTheme } from '../hooks/useTheme';

function Footer({ phone, name, established, email, workingArea, companyName }) {
  const [data, setData] = useState([]);
  const phoneNoSpaces = phone.replace("-", "").replace("-", "");
  // console.log(phoneNoSpaces);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footer"]{
        title,
        slug,
        body,
        image{
          asset->{
            _id,
            url
          },
        },
        hexCode,
      }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  // console.log(data);
  //   const { ref } = useTheme();

  return (
    <div className="footer">
      <div className="container">
        <div className="container-inner">
          <iframe
            title="map"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97838.895366572!2d-75.01390473932514!3d39.975701923109305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14a98ac5efd09%3A0xb678295f4be1e444!2sMoorestown%2C%20NJ%2008057!5e0!3m2!1sen!2sus!4v1670458237080!5m2!1sen!2sus"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396570.58450001845!2d-75.09687705657177!3d39.05618081707444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0b19281be5c87%3A0x25c4847aaf526d9f!2sCape%20May%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1678921227954!5m2!1sen!2sus"
            width="80%"
            height="450"
            frameBorder="0"
            allowFullScreen="false"
            aria-hidden="false"
            tabIndex="0"
            zoom="0"
          ></iframe>

          <div className="column-wrapper">
            <div className="column">
              <h5>Navigation</h5>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </div>

            <div className="column">
              <h5>Contact</h5>
              <a href={`tel:${phoneNoSpaces}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div className="column">
              <h5>Top Projects</h5>
              {/* {data && data.map((item, index) => <p>{item.title}</p>)} */}
              <p>Kitchens</p>
              <p>Bathrooms</p>
              <p>Tile Work</p>
              <p>Additions</p>
              <p>Renovations</p>
            </div>

            <div className="column">
              <h5>Areas of Work</h5>
              <p>{workingArea}</p>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; {companyName}</p>

            {/* <div className="back-to-top">
              <BackToTop />
              <p href="/">Back to top</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
