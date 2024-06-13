import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faVuejs,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"
import { useLanguage } from "../context/LanguageContext"
import heroimage from "../assets/images/heroimage.png"
import "../styles/Hero.scss"

import heroPT from "./Languages/Hero/heroPT"
import heroEN from "./Languages/Hero/heroEN"
import heroES from "./Languages/Hero/heroES"
import "../styles/Header.scss"

const Hero = () => {
  const { language } = useLanguage()
  let heroContent = heroPT

  if (language === "en") {
    heroContent = heroEN
  } else if (language === "es") {
    heroContent = heroES
  }

  return (
    <section className="hero">
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
            <FontAwesomeIcon icon={faPython} size="2x" />
            <FontAwesomeIcon icon={faDocker} size="2x" />
            {/* Adicione mais ícones conforme necessário */}
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={heroimage} alt="" />
        </div>
      </div>
      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
