import React from "react";

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
// import SliderImage from '../Img/Slider-Portfolio/bridge.jpg';

//Arrows
import Next from "../Icons/Next";
import Prev from "../Icons/Prev";

//Styles
import "./PortfolioItemSlider.scss";

function PortfolioItemSlider({ portfolioData }) {
  //Custom arrows
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      id="prevSlide"
    >
      <Prev />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
      id="nextSlide"
    >
      <Next />
    </button>
  );

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log(portfolioData.supportingImages)

  return (
    <div className="portfolioItemSlider">
      <Slider {...settings}>
        {/* {portfolioData && (
                <div className="slide">
                    <div className="image">
                        <img src={portfolioData.mainImage.asset.url} alt="portfolio-example" /> 
                    </div>
                </div> 
                )}        */}

        {/* Make sure you put at least 3 photos in the portfolio part of Sanity. If not, it will just duplicate the mainImage so that there are at least 2 photos in there. I'd recommend having 3 supporting photos with 1 mainImage. This will ensure that there are navigation buttons and that it will slide and not just be static photos, meaning it will slide other photos as well */}

        {portfolioData.supportingImages &&
          portfolioData?.supportingImages?.map((item, index) => (
            <a href={`/portfolio/${portfolioData?.slug?.current}`}>
              <div className="slide">
                <div className="image">
                  <img src={item?.asset?.url} alt="portfolio-example" />
                </div>
              </div>
            </a>
          ))}
      </Slider>
    </div>
  );
}

export default PortfolioItemSlider;
