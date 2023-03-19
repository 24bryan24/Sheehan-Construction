import React, { useEffect, useState } from "react";

//React-router
// import {BrowserRouter as Router, Route} from 'react-router-dom';

//React-transition-group
// import {CSSTransition} from 'react-transition-group';

//Styles
import "./App.scss";

//Components
// import Navigation from './Components/Navigation';
// import MobileNavigation from './Components/MobileNavigation';
// import Footer from './Footer.jsx';

//Views
import Home from "./Home.jsx";
// import About from './Views/About';
// import Contact from './Views/Contact';
// import Portfolio from './Views/Portfolio';
// import Rental from './Views/Rental';

//Icons
import BackToTop from "../Icons/BackToTop.jsx";

// import { useTheme } from "./hooks/useTheme";
// Animation package
// import Aos from "aos";
// import "aos/dist/aos.css";

function App({ carouselData, companyName, aboutHomePageBody, portfolioData }) {
  //   const { isMobileMenuOpen, toggleMobileMenu } = useTheme();

  // const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  // const [showScrollToTop, setShowScrollToTop] = useState(false);

  //Detect position from top and show/hide scrollToTop button
  //If device width is smaller than 1100, don't show scrollToTop button

  //   function showScrollToTopIcon(){
  //     let positionY;
  //     let windowWidth;

  //     window.addEventListener('scroll',function(){
  //       positionY = this.scrollY;
  //       windowWidth = this.innerWidth;

  //       if(positionY > 200 && windowWidth < 1100){
  //         setShowScrollToTop(true);
  //       }else{
  //         setShowScrollToTop(false);
  //       }
  //     });
  //   }

  //Scroll to top for switching between the views
  //   function scrollToTop(){
  //     window.scrollTo({top:0});
  //   }

  //Smooth scroll to top for scrollToTop icon
  //   function smoothScrollToTop(){
  //     window.scrollTo({top:0,behavior:'smooth'})
  //   }

  //   useEffect(() => {
  //     Aos.init({
  //       duration: 1800,
  //       offset: 100,
  //       disable: "mobile",
  //     });
  //   }, []);

  return (
    // <Router>
    <div className="App" style={{ "--color": "black" }}>
      <div className="wrapper">
        {/* {showScrollToTopIcon()} */}

        {/* <div className="mobile-menu-wrapper">
              <MobileNavigation
                closeMobileMenu={() => toggleMobileMenu(false)}
              />
            </div> */}

        <div
          className="mobile-menu-overlay"
          onClick={() => toggleMobileMenu(false)}
        ></div>

        {/* <div
          className="scrollToTop"
          // onClick={smoothScrollToTop}
        >
          <BackToTop />
        </div> */}

        {/* <Navigation openMobileMenu={() => toggleMobileMenu(true)} /> */}

        {/* <Route key="/" exact path="/">
            {({ match }) => ( */}
        <div className="page">
          <Home
            carouselData={carouselData}
            companyName={companyName}
            aboutHomePageBody={aboutHomePageBody}
            portfolioData={portfolioData}
            //FIX THIS
            // scrollToTop={scrollToTop}
          />
        </div>
        {/* )} */}
        {/* </Route> */}

        {/* <Footer  */}
        {/* //   scrollToTop={smoothScrollToTop}  */}
        {/* /> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
