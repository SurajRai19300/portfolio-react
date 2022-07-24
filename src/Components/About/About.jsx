import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { BiAward } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="loading.." />
          </div>
        </div>

        <div className="about__content">
          <p>
            Hey There! My name is Suraj Rai. A Software Developer searching for
            a platform to enhance my skills and knowledge. Always passionate,
            deciplined, and positive towards learning a new things.{" "}
          </p>

          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5> Education</h5>
              <small>Bsc.Hons, Herald College Kathmandu </small>
            </article>

            <article className="about__card" id="#portfolio">
              <AiOutlineFolderOpen className="about__icon" />
              <h5> Projects</h5>
              <small>
                Done projects i.e. webapp and android app during Bachelor.
              </small>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
