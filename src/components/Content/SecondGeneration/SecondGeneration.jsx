import React from "react";
import mainImg from "./SecondGenerationMainImg.png";
import contentImg from "./SecondGenerationContentImg.png";
import icon from "./SecondGenerationIcon.png";
import logo from "./logo.png";

const SecondGeneration = () => {
  return (
    <section className="secondGeneration">
      <div className="secondGeneration__container content__container">
        <div className="secondGeneration__content content">
          <div className="secondGeneration__text-content text__content">
            <div className="secondGeneration__icon content__icon">
              <img src={icon} alt="" />
            </div>
            <h2 className="secondGeneration__header content__header">
              vintage oliva
            </h2>
            <div className="secondGeneration__text content__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived.
            </div>
          </div>
          <div className="secondGeneration__img-content img__content">
            <img src={contentImg} alt="Vintage Oliva" />
          </div>
        </div>

        <div className="secondGeneration__main-img main-img">
          <a href="#Header" className="main-img__item item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
            </span>
            <span className="item__bg">
              <img src={mainImg} alt="Main" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondGeneration;
