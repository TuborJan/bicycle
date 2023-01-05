import React from "react";
import Generations from "./Generations/Generetions";
import FirstGeneration from "./FirstGeneration/FirstGeneration";
import SecondGeneration from "./SecondGeneration/SecondGeneration";
import ThridGeneration from "./ThridGeneration/ThridGeneration";
import SliderBlock from "./Slider/Slider";
import Shop from "./Shop/Shop";
import Form from "./Form/Form";

import "./ContentStyles.scss";

const Content = () => {
  return (
    <div className="content">
      <Generations />
      <FirstGeneration />
      <SecondGeneration />
      <ThridGeneration />
      <SliderBlock />
      <Shop />
      <Form />
    </div>
  );
};

export default Content;
