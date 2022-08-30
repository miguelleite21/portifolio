import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
export const About = () => {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <article className="about__card">
          <FaAward className="about__icon" />
          <h5>Experiência</h5>
          <small>1 Ano</small>
        </article>
        <div className="about__content">
          <div className="about__cards"></div>
          <p>
            Olá, eu sou o Miguel. Meu contato com tecnologia começou desde a
            infância, aos 14 anos tive meu primeiro contato com programação.
            Depois disso, aos 17 anos fiz um curso técnico na área de
            eletroeletrônica e, como sempre gostei dessa área da tecnologia,
            decidi me aprofundar mais em programação e atualmente estou
            estudando para melhorar minhas habilidades como desenvolvedor
            FullStack!
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar ?
          </a>
        </div>
      </div>
    </section>
  );
};
