import React from "react";
import leftImg from "./ThridGenerationLeftImg.png";
import rightImg from "./ThridGenerationRightImg.png";
import contentImg from "./ThridGenerationContentImg.png";
import icon from "./ThridGenerationIcon.png";
import logo from "./logo.png";
import "./ThridGeneration.scss";

const ThridGeneration = () => {
  return (
    <section className="thridGeneration">
      <div className="thridGeneration__container content__container">
        <div className="thridGeneration__main-img main-img">
          <a href="#Header" className="main-img__item item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
            </span>
            <span className="item__bg">
              <img src={leftImg} alt="Main" />
            </span>
          </a>
        </div>

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

        <div className="thridGeneration__main-img main-img">
          <a href="#Header" className="main-img__item item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
            </span>
            <span className="item__bg">
              <img src={rightImg} alt="Main" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThridGeneration;
