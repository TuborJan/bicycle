import React from "react";
import "./Footer.scss";
import Twitter from "./twitter.png";
import Facebooc from "./facebook.png";
import Pintress from "./pintress.png";
import Logo from "./footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__rows">
          <div className="footer__column">
            <div className="footer__adress">
              <p>AOD New York</p>
              <p>2250 Lexington Avenue</p>
              <p>New York, NY 10035 - info@domain.com</p>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__socials">
              <a href="/">
                <img src={Twitter} alt="twitter" />
              </a>
              <a href="/">
                <img src={Facebooc} alt="facbook" />
              </a>
              <a href="/">
                <img src={Pintress} alt="pintress" />
              </a>
            </div>
          </div>
          <div className="footer__column">
            <a href="/" className="footer__logo">
              <span className="logo__text">Handcrafted by</span>
              <span className="logo">
                <img src={Logo} alt="logo" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
