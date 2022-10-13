import React, { useState} from "react";
import "./header.css";
import "animate.css";
import CTA from "./CTA";
import giphy from "../../assets/giphy.gif";
import headerImg from "../../assets/header-img.svg";
import HeaderSocial from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import { animate, motion } from "framer-motion";

const Header = () => {
  document.querySelectorAll(".bouncing-letters span").forEach((span) => {
    span.addEventListener("mouseover", function () {
      this.classList.add("bounce");
      setTimeout(
        function () {
          this.classList.remove("bounce");
        }.bind(this),
        1000
      );
    });
  });

  return (
    <header>
      <div className="container header__container">
        <h5 className="animate__animated animate__zoomInDown">Hello I'm</h5>
        <h1
          className="animate__animated animate__bounceInLeft animate__delay-1s bouncing-letters"
          id="sus"
        >
          <span>T</span>
          <span>a</span>
          <span>n</span>
          <span>i</span>
          <span>s</span>
          <span>h</span>
          <span>q</span>&nbsp;<span>G</span>
          <span>u</span>
          <span>p</span>
          <span>t</span>
          <span>a</span>
        </h1>
        <h5 className="text-light">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Web Developer",
                "Web Designer",
                "Graphic Designer",
                "Application Developer",
              ],
            }}
          />
        </h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={giphy} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
