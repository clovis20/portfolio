// Header.js

import React from "react"
import CP from "./CP"
import { useLanguage } from "../context/LanguageContext"
import headerEN from "./Languages/Header/headerEN"
import headerPT from "./Languages/Header/headerPT"
import headerES from "./Languages/Header/headerES"
import headerCode from "./Codes/HeaderCode"

import "../styles/Header.scss"

const Header = ({ onMouseOver }) => {
  const { language } = useLanguage()
  let headerContent = headerPT

  if (language === "en") {
    headerContent = headerEN
  } else if (language === "es") {
    headerContent = headerES
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onMouseOver={() => onMouseOver(headerCode)}>
          <CP /> {/* Use o componente CP como a sua logo */}
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#inicio">{headerContent.home}</a>
            </li>
            <li>
              <a href="#quem-sou">{headerContent.about}</a>
            </li>
            <li>
              <a href="#projetos">{headerContent.projects}</a>
            </li>
            <li>
              <a href="#contato">{headerContent.contact}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
