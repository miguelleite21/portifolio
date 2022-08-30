import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Miguel Leite
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#experience">Habilidades</a>
        </li>
        <li>
          <a href="#portifolio">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/miguelleite21" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
