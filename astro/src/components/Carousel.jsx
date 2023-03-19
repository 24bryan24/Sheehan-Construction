import React from "react";

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//Styles
import "./Carousel.scss";
import styled from "styled-components";

function Carousel({ carouselData }) {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="slider-main">
      <Slider {...settings}>
        {carouselData &&
          carouselData.map((item, index) => {
            const MainImage = styled.div`
              background: linear-gradient(
                  rgba(0, 0, 0, 0.25),
                  rgba(0, 0, 0, 0.15)
                ),
                url(${item.mainImage.asset.url}) center center;
            `;
            return (
              <MainImage
                className="slide"
                loading="lazy"
                title="Golden Rule Construction"
              >
                <img src={item.mainImage.asset.url} />
                <div className="text">
                  <p>{item?.body[0].children[0].text}</p>
                  <h1>{item.title}</h1>
                </div>
              </MainImage>
            );
          })}
      </Slider>
    </div>
  );
}

export default Carousel;
