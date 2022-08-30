import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gqyv51j",
      "template_6sirxdi",
      form.current,
      "GgxQI2Ka5RIwDYAAR"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2> Fale Comigo</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>miguelleite360@gmail.com</h5>
            <a href="mailto:miguelleite360@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Miguel Leite</h5>
            <a
              href="https://www.linkedin.com/in/miguel-leite-/"
              target="_blank"
            >
              Envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>{`(17)991972659`}</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5517991972659"
              target="_blank"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu Nome" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
