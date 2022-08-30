import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import ME from "../../assets/me.png";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Miguel Leite</h1>
        <h5 className="text-ligth">Desenvolvedor Fullstack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="EU" />
        </div>
      </div>
    </header>
  );
};
