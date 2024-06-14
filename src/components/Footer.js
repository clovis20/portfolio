// Footer.js

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import { useLanguage } from "../context/LanguageContext"

import footerPT from "./Languages/Footer/footerPT"
import footerEN from "./Languages/Footer/footerEN"
import footerES from "./Languages/Footer/footerES"

import "../styles/footer.scss"

const Footer = () => {
  const { language } = useLanguage()
  let footerContent = footerPT

  if (language === "en") {
    footerContent = footerEN
  } else if (language === "es") {
    footerContent = footerES
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>&lt; CP /&gt;</span>
        </div>
        <div className="social-icons">
          <p>{footerContent.social}</p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div className="footer-text">
          <p>© 2024 Clovis Picanço - {footerContent.text}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
