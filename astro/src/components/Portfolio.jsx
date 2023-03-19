import React from "react";

//Styles
import "./Portfolio.scss";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";

//Components
import PortfolioItemSlider from "./PortfolioItemSlider";

function Portfolio({ portfolioData }) {
  // console.log(portfolioData);
  return (
    <div className="portfolioView">
      <div className="container">
        <div className="intro section">
          <h2>
            Portfolio <Dots />
          </h2>
          <Square />

          <div className="container-inner">
            <div className="text">
              <p>
                Bear claw lemon drops jujubes gingerbread jelly chupa chups
                caramels biscuit soufflé. Marzipan gummi bears cupcake. Tootsie
                roll gummies sweet croissant liquirice. Jelly jujubes fruitcake
                cake candy sugar plum.
              </p>

              <p>
                Oat cake drageé cake cupcake soufflé brownie gingerbread
                tiramisu. Chocolate cake pudding cake ice cream jujubes
                gingerbread donut jelly marzipan. Halvah wafer drageé caramels
                chupa chups jelly-o dessert lemon drops croissant. Bear claw
                marzipan donut soufflé tiramisu.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio section">
          <div className="container-inner">
            <div className="portfolio-container">
              {portfolioData &&
                portfolioData.map((item, index) => (
                  <div className="portfolio-item">
                    <h3>
                      <a
                        style={{
                          color: "inherit",
                          textDecoration: "inherit",
                        }}
                        href={`/portfolio/${item.slug.current}`}
                      >
                        {item.title} <Square />
                      </a>
                    </h3>
                    <h5>{item.description[0].children[0].text}</h5>
                    <p>{item.body[0].children[0].text}</p>
                    <PortfolioItemSlider portfolioData={portfolioData[index]} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
