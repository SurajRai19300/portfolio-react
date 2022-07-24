import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/p.png";
import IMG2 from "../../assets/portfolio.png";
import IMG3 from "../../assets/portfolio.png";
import IMG4 from "../../assets/portfolio.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MI-Clone WebApp using react js and bootstrap. It is a dynamic website.",
    github: "https://github.com/SurajRai19300/mi-clone",
    demo: "https://miclone-np.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "MI-pp",
    github: "https://github.com/SurajRai19300",
    demo: "https://miclone-np.netlify.app/",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: " WebApp",
  //   github: "https://github.com",
  //   demo: "https://miclone-np.netlify.app/",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "MI-C",
  //   github: "https://github.com",
  //   demo: "https://miclone-np.netlify.app/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="Portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
