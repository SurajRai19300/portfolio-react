import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        CrzS
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100013076762104" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/suraz.rae/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; CrzS. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
