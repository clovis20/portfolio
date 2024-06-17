import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faVuejs,
  faSass,
  faBootstrap,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"
import { useLanguage } from "../context/LanguageContext"
import heroimage from "../assets/images/heroimagee.png"
import CodePopup from "./CodePopup"
import useCodePopup from "../hooks/useCodePopup"

import heroPT from "./Languages/Hero/heroPT"
import heroEN from "./Languages/Hero/heroEN"
import heroES from "./Languages/Hero/heroES"
import heroCss from "./Codes/HeroCss"
import heroCode from "./Codes/HeroCode"

import "../styles/hero.scss"

const Hero = () => {
  const { language } = useLanguage()
  let heroContent = heroPT

  if (language === "en") {
    heroContent = heroEN
  } else if (language === "es") {
    heroContent = heroES
  }

  const {
    handleToggleMode,
    handleMouseOver,
    handleClosePopup,
    isPopupOpen,
    popupJsContent,
    popupCssContent,
  } = useCodePopup()

  return (
    <section id="index" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="text-content">
            <h2>{heroContent.heroA}</h2>
            <h1>{heroContent.heroB}</h1>
          </div>
          <div className="hero-icons">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <FontAwesomeIcon icon={faJs} size="2x" />
            <FontAwesomeIcon icon={faReact} size="2x" />
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
            <FontAwesomeIcon icon={faVuejs} size="2x" />
            <FontAwesomeIcon icon={faBootstrap} size="2x" />
            <FontAwesomeIcon icon={faSass} size="2x" />
            <FontAwesomeIcon icon={faPython} size="2x" />
            <FontAwesomeIcon icon={faDocker} size="2x" />
            {/* Adicione mais ícones conforme necessário */}
          </div>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            src={heroimage}
            alt=""
            onMouseOver={() => handleMouseOver(heroCode, heroCss)}
          />
        </div>
      </div>
      <div className="scroll-down">
        <span></span>
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

export default Hero
