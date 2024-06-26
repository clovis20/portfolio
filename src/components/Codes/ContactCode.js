const contactCode = `/* Contacts.js */

import React, { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons"

import { useLanguage } from "../context/LanguageContext"
import CodePopup from "./CodePopup"
import useCodePopup from "../hooks/useCodePopup"
import contactCode from "./Codes/ContactCode"
import contactCss from "./Codes/ContactCss"

import contactPT from "./Languages/Contact/contactPT"
import contactEN from "./Languages/Contact/contactEN"
import contactES from "./Languages/Contact/contactES"

import "../styles/contact.scss"

const Contact = () => {
  const { language } = useLanguage()
  let aboutContent = contactPT

  if (language === "en") {
    aboutContent = contactEN
  } else if (language === "es") {
    aboutContent = contactES
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        "https://nome-do-seu-app.vercel.app/api/send-email",
        formData
      )

      alert("Mensagem enviada com sucesso!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Erro ao enviar mensagem", error)
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.")
    }
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
    <section id="contact">
      <h2>{aboutContent.contact}</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>{aboutContent.name}</label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>{aboutContent.message}</label>
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
            <button type="submit">{aboutContent.button}</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon size="2x" icon={faWhatsapp} />
            <h3>Whatsapp</h3>
            <p>+55 (85) 99787-0066</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
            <h3>E-mail</h3>
            <p>clovis20@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="code-icon-container">
        <FontAwesomeIcon
          icon={faCode}
          className="code-icon"
          onMouseOver={() => handleMouseOver(contactCode, contactCss)}
        />
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
    </section>
  )
}

export default Contact`

export default contactCode
