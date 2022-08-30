import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/miguel-leite-/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/miguelleite21" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
