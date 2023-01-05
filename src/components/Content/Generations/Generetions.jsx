import React from "react";
import "./Generetions.scss";
import generationsIcon from "./generationsIcon.png";

const Generetions = () => {
  return (
    <section id="generations" className="generations">
      <div className="generations__containre">
        <div className="generations__icon content__icon">
          <img src={generationsIcon} alt="Icon" />
        </div>
        <h2 className="generetions__header content__header">
          A new generations of vintage bike
        </h2>
        <div className="generations__text content__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </section>
  );
};

export default Generetions;
