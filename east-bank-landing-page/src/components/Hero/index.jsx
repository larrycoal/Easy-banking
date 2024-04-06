import React from "react";
import { BgIntroBck, BgIntroBckTwo } from "../../assets";
import "./index.scss";
import PhonesImage from "../../assets/image-mockups.png";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="left">
          <h1>Next generation</h1>
          <h1>digital banking</h1>
          <p>
            Take your financial life online. your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing,and much more.
          </p>
          <button>Request Invite</button>
        </div>
        <div className="right">
          <BgIntroBck />
          <BgIntroBckTwo />
        </div>
      </div>
      <img className="hero-phone" src={PhonesImage} alt="phones" />
    </>
  );
};

export default Hero;
