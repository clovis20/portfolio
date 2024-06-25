import React, { useState } from "react"
import { LanguageProvider } from "./context/LanguageContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LanguageModal from "./components/LanguageModal"
import "./styles/style.scss"
import "./styles/codePopup.scss"
import "./App.css"

const App = () => {
  //const { language } = useLanguage()
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(true)

  // Função para abrir o modal de seleção de idioma
  //const openLanguageModal = () => {
  //  setIsLanguageModalOpen(true)
  //}

  // Função para fechar o modal de seleção de idioma
  const closeLanguageModal = () => {
    setIsLanguageModalOpen(false)
  }

  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div
        className={`modal-background ${isLanguageModalOpen ? "" : "hidden"}`}
      >
        {isLanguageModalOpen && <LanguageModal onClose={closeLanguageModal} />}
      </div>
    </LanguageProvider>
  )
}

export default App
