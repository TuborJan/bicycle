import React, { useState } from "react";
import "./Header.scss";
import logo from "./Logo.png";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

    if (!isActive) document.body.classList.add("body-lock");
    else document.body.classList.remove("body-lock");
  };

  const handleLink = () => {
    if (document.body.classList.contains("body-lock"))
      document.body.classList.remove("body-lock");
    if (isActive) setActive(!isActive);
  };

  return (
    <header className="header">
      <div className="header__navigation">
        <nav className="header__menu">
          <div className="menu__icon">
            <i
              className={`${
                isActive ? "uil uil-multiply" : "uil uil-list-ui-alt"
              }`}
              onClick={handleToggle}
            ></i>
          </div>
          <div className={`menu__body ${isActive ? "active" : "inactive"}`}>
            <ul className="menu__list">
              <li>
                <a
                  href="#generations"
                  className="menu__link"
                  onClick={handleLink}
                >
                  about us
                </a>
              </li>
              <li>
                <a href="#works" className="menu__link" onClick={handleLink}>
                  work
                </a>
              </li>
              <li>
                <a href="#shop" className="menu__link" onClick={handleLink}>
                  shop
                </a>
              </li>
              <li>
                <a href="#contact" className="menu__link" onClick={handleLink}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
