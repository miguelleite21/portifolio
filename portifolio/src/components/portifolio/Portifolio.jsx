import React from "react";
import "./portifolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
export const Portifolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Habits</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/habits"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://habits-1.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Projeto
            </a>
            <div />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Code-By-Girls</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gustavohaas/grupo3-code-by-girls"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://grupo3-code-by-girls.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Projeto
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Hamburgueria</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/react-entrega-s5-hamburgueria-2-0-com-typescript-json-server-miguelleite21"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://react-entrega-s5-hamburgueria-2-0-com-typescript-jso-lgtos1sb4.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Projeto
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Emprestimo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/emprestimo"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://emprestimo-g8lxfxowr-miguelleite21.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Projeto
            </a>
            <div />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Capstone Django</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/leonardomlouzas/capstone_django"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://capstone-django-kenzie.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Petshop Django</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/petshop"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Banco Django</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/Banco-api"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Capstone Node.js</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/merogabriel/node-capstone-g12"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://capstone-security-server.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Kenzie Buster</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/q4-sprint2-kenzie-buster-miguelleite21"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://kenzie-buster-miguel.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Code-By-girls-API</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/LeandroMedvedev/code-by-girls-api"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://q3-capstone.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Emprestimo API</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/api-emprestimo"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://api-emprestimo.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Comunicação de perda</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/miguelleite21/api-loss-communication"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://api-loss-communication.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              API
            </a>
          </div>
        </article>
        
      </div>
    </section>
    
  );
};
