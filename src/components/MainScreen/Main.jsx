import React from "react";
import "./Main.scss";
import MainImg from "./MainImg.png";

const Main = () => {
  return (
    <div className="main">
      <img src={MainImg} alt="Bicycle" className="main__bg" />
    </div>
  );
};

export default Main;
