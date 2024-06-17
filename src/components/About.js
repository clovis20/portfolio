// About.js

import React from "react"
import CodePopup from "./CodePopup"
import aboutCss from "./Codes/AboutCss"
import aboutCode from "./Codes/AboutCode"
import useCodePopup from "../hooks/useCodePopup"
import { useLanguage } from "../context/LanguageContext"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import aboutPT from "./Languages/About/aboutPT"
import aboutEN from "./Languages/About/aboutEN"
import aboutES from "./Languages/About/aboutES"

import myPhoto from "../assets/images/myphoto.webp"
import "../styles/about.scss"

const About = () => {
  const { language } = useLanguage()
  let aboutContent = aboutPT

  if (language === "en") {
    aboutContent = aboutEN
  } else if (language === "es") {
    aboutContent = aboutES
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
    <section id="about">
      <div className="about-container">
        <h2 className="section-title">{aboutContent.title}</h2>
        <p className="intro-text">{aboutContent.intro}</p>
        <div className="about-content">
          <div className="left-column">
            <img src={myPhoto} alt="Minha Foto" className="my-photo" />
          </div>
          <div className="right-column">
            <ul className="about-list">
              <li>{aboutContent.listA}</li>
              <li>{aboutContent.listB}</li>
              <li>{aboutContent.listC}</li>
              <li>{aboutContent.listD}</li>
              <li>{aboutContent.listE}</li>
              <li>{aboutContent.listF}</li>
            </ul>
          </div>
        </div>
        <div className="code-icon-container">
          <FontAwesomeIcon
            icon={faCode}
            className="code-icon"
            onMouseOver={() => handleMouseOver(aboutCode, aboutCss)}
          />
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}></div>
      )}
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
