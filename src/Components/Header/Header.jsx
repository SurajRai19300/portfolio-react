import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Socialsm from "./Socialsm";

import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Suraj Rai</h1>
        <h5 className="typ">
          <TypeWriter />
        </h5>

        <CTA />
        <Socialsm />

        <div className="me">
          <img src={ME} alt="loading..." />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
