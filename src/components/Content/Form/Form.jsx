import React from "react";
import "./Form.scss";
import logo from "./Logo.png";

const Form = () => {
  return (
    <section id="contact" className="form">
      <div className="form__container">
        <div className="form__body">
          <div className="form__logo">
            <img src={logo} alt="" />
          </div>

          <div className="form__header">Stay on the saddle!</div>

          <form action="" className="form__form">
            <div className="form__input">
              <input type="email" placeholder="enter your email..." />
            </div>
            <div className="form__button">
              <button type="submit" className="form__subscribe">
                <span>GO</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
