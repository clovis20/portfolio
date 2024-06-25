import React from "react"
import { useLanguage } from "../context/LanguageContext"
import brazilFlag from "../assets/images/brazilflag.png"
import usaFlag from "../assets/images/englishflag.png"
import spainFlag from "../assets/images/spainflag.png"
import "../styles/LanguageSelector.scss"

const LanguageSelector = () => {
  const { switchLanguage } = useLanguage()

  return (
    <div className="language-selector">
      <img
        src={brazilFlag}
        alt="Português"
        onClick={() => switchLanguage("pt-br")}
      />
      <img src={usaFlag} alt="English" onClick={() => switchLanguage("en")} />
      <img src={spainFlag} alt="Español" onClick={() => switchLanguage("es")} />
    </div>
  )
}

export default LanguageSelector
