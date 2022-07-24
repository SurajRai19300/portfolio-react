import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Socialsm = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/suraj-rai-44192a215/.com" target='_blank'>
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com/SurajRai19300" target='_blank'>
        {" "}
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Socialsm;
