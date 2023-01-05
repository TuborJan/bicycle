import React from "react";
import logo from "./logo.png";
import leftLeft from "./left-left.png";
import leftRight from "./left-right.png";
import leftBottom from "./left-bottom.png";

import middleLeft from "./middle-left.png";
import middleRight from "./middle-right.png";

import rightLeft from "./right-left.png";
import rightRight from "./right-right.png";
import rightTop from "./right-top.png";

import "./Shop.scss";

const Shop = () => {
  return (
    <section id="shop" className="shop">
      <div className="shop__body content">
        <div className="content__column">
          <div className="content__doubleimg">
            <a href="#Header" className="doubleimg item">
              <span className="item__logo">
                <img src={logo} alt="Logo" className="logo" />
                Shop now
              </span>
              <span className="item__bg">
                <img src={leftLeft} alt="img" />
              </span>
            </a>

            <a href="#Header" className="doubleimg item">
              <span className="item__logo">
                <img src={logo} alt="Logo" className="logo" />
                Shop now
              </span>
              <span className="item__bg">
                <img src={leftRight} alt="Main" />
              </span>
            </a>
          </div>

          <a href="#Header" className="sigleimg item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
              Shop now
            </span>
            <span className="item__bg">
              <img src={leftBottom} alt="Main" />
            </span>
          </a>
        </div>

        <div className="content__column_middle">
          <a href="#Header" className="sigleimg item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
              Shop now
            </span>
            <span className="item__bg">
              <img src={middleLeft} alt="Main" />
            </span>
          </a>
        </div>

        <div className="content__column_middle">
          <a href="#Header" className="sigleimg item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
              Shop now
            </span>
            <span className="item__bg">
              <img src={middleRight} alt="Main" />
            </span>
          </a>
        </div>

        <div className="content__column">
          <a href="#Header" className="sigleimg item">
            <span className="item__logo">
              <img src={logo} alt="Logo" className="logo" />
              Shop now
            </span>
            <span className="item__bg">
              <img src={rightTop} alt="Main" />
            </span>
          </a>

          <div className="content__doubleimg">
            <a href="#Header" className="doubleimg item">
              <span className="item__logo">
                <img src={logo} alt="Logo" className="logo" />
                Shop now
              </span>
              <span className="item__bg">
                <img src={rightLeft} alt="img" />
              </span>
            </a>

            <a href="#Header" className="doubleimg item">
              <span className="item__logo">
                <img src={logo} alt="Logo" className="logo" />
                Shop now
              </span>
              <span className="item__bg">
                <img src={rightRight} alt="Main" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="shop__footer">
        <div className="shop__container">
          <a href="/" className="shop__button">
            <span>Discover the shop</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
