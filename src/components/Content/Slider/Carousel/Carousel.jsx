import React from "react";
import Slider from "react-slick";
import icon from "./../SlyderIcon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = ({ header, headerMin, description }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Slider {...settings}>
      <div className="slider__container">
        <div className="slider__icon content__icon">
          <img src={icon} alt="Icon" />
        </div>
        <h2 className="slider__header content__header">
          {header}
          <span className="slider__header_thin">{headerMin}</span>
        </h2>
        <div className="slider__text content__text">{description}</div>
      </div>
    </Slider>
  );
};

export default Carousel;
