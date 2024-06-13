// About.js

import React from "react"
import CodePopup from "./CodePopup"
import useCodePopup from "../hooks/useCodePopup"
import myPhoto from "../assets/images/myphoto.jpg"
import "../styles/About.scss"
import aboutCss from "./Codes/AboutCss"
import aboutCode from "./Codes/AboutCode"

const About = () => {
  const {
    handleToggleMode,
    handleMouseOver,
    handleClosePopup,
    isPopupOpen,
    popupJsContent,
    popupCssContent,
  } = useCodePopup()

  return (
    <section id="about">
      <div className="about-container">
        <h2 className="section-title">Quem Sou</h2>
        <p className="intro-text">
          Apaixonado por tecnologia e desafios, tenho uma trajetória marcada
          pela integração de design e desenvolvimento, sempre em busca de
          soluções inovadoras e eficazes.
        </p>
        <div className="about-content">
          <div className="left-column">
            <img
              src={myPhoto}
              alt="Minha Foto"
              className="my-photo"
              onMouseOver={() => handleMouseOver(aboutCode, aboutCss)}
            />
          </div>
          <div className="right-column">
            <ul className="about-list">
              <li>
                Formado em Arquitetura e Urbanismo pela Universidade de
                Fortaleza (UNIFOR)
              </li>
              <li>Curso completo de Full Stack Python pela EBAC.</li>
              <li>
                Apaixonado por solucionar problemas, praticando todos os dias.
              </li>
              <li>Fácil comunicação. Trabalho bem em equipe.</li>
              <li>
                Falo inglês avançado e espanhol intermediário, e estou sempre
                pronto para colaborar em equipes diversas e internacionais.
              </li>
              <li>
                Fora do ambiente de trabalho, gosto de praticar Beach Tennis,
                pintar, assistir filmes e ouvir música.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CodePopup
        isOpen={isPopupOpen}
        jsCode={popupJsContent}
        cssCode={popupCssContent}
        onClose={handleClosePopup} // Utilizando a função closePopup corretamente
        onToggleMode={handleToggleMode} // Ajustar conforme necessário
      />
    </section>
  )
}

export default About
