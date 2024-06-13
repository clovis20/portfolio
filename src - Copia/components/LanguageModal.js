import React from "react"
import { useLanguage } from "../context/LanguageContext"
import brazilFlag from "../assets/images/brazilflag.png"
import usaFlag from "../assets/images/englishflag.png"
import spainFlag from "../assets/images/spainflag.png"
import "../styles/LanguageModal.scss"
import "../styles/ModalBackground.scss"

const LanguageModal = ({ onClose }) => {
  const { switchLanguage } = useLanguage()

  const handleLanguageSelection = (lang) => {
    switchLanguage(lang)
    onClose() // Fecha o modal após selecionar um idioma
  }

  return (
    <div className="language-modal">
      <div className="modal-content">
        <h2>Select Your Language</h2>
        <div className="flags">
          <img
            src={brazilFlag}
            alt="Português"
            onClick={() => handleLanguageSelection("pt-br")}
          />
          <img
            src={usaFlag}
            alt="English"
            onClick={() => handleLanguageSelection("en")}
          />
          <img
            src={spainFlag}
            alt="Español"
            onClick={() => handleLanguageSelection("es")}
          />
        </div>
      </div>
    </div>
  )
}

export default LanguageModal
