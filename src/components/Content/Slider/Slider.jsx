import React from "react";
import Slider from "react-slick";
import icon from "./SlyderIcon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const SliderBlock = () => {
  let sliderItems = [
    {
      header: "AOD New York @aod",
      headerMin: " / 35 min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.",
    },
    {
      header: "AOD New York @aod",
      headerMin: " / 35 min",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quas repellendus incidunt error quam accusamus adipisci, harum ratione itaque porro!",
    },
    {
      header: "AOD New York @aod",
      headerMin: " / 35 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet sequi accusantium placeat labore nesciunt.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div className="slider__container" key={index}>
            <div className="slider__icon content__icon">
              <img src={icon} alt="Icon" />
            </div>
            <h2 className="slider__header content__header">
              {item.header}
              <span className="slider__header_thin">{item.headerMin}</span>
            </h2>
            <div className="slider__text content__text">{item.description}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderBlock;
