// Header.js

import React, { useEffect } from "react"
import CP from "./CP"
import { useLanguage } from "../context/LanguageContext"
import headerEN from "./Languages/Header/headerEN"
import headerPT from "./Languages/Header/headerPT"
import headerES from "./Languages/Header/headerES"
import headerCode from "./Codes/HeaderCode"
import headerCss from "./Codes/HeaderCss"
import CodePopup from "./CodePopup"
import useCodePopup from "../hooks/useCodePopup"
import "../styles/header.scss"

const Header = () => {
  const {
    handleToggleMode,
    handleMouseOver,
    handleClosePopup,
    isPopupOpen,
    popupJsContent,
    popupCssContent,
  } = useCodePopup()

  const { language } = useLanguage()
  let headerContent = headerPT

  if (language === "en") {
    headerContent = headerEN
  } else if (language === "es") {
    headerContent = headerES
  }

  useEffect(() => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav ul")

    const handleBurgerClick = () => {
      nav.classList.toggle("nav-active")
      burger.classList.toggle("toggle")
    }

    burger.addEventListener("click", handleBurgerClick)

    return () => {
      burger.removeEventListener("click", handleBurgerClick)
    }
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div
          className="logo"
          onMouseOver={() => handleMouseOver(headerCode, headerCss)}
        >
          <CP /> {/* Use o componente CP como a sua logo */}
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#index">{headerContent.home}</a>
            </li>
            <li>
              <a href="#about">{headerContent.about}</a>
            </li>
            <li>
              <a href="#projects">{headerContent.projects}</a>
            </li>
            <li>
              <a href="#contact">{headerContent.contact}</a>
            </li>
          </ul>
        </nav>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}></div>
      )}
      <CodePopup
        isOpen={isPopupOpen}
        jsCode={popupJsContent}
        cssCode={popupCssContent}
        onClose={handleClosePopup}
        onToggleMode={handleToggleMode}
      />
    </header>
  )
}

export default Header
