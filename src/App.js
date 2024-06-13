import React, { useState } from "react"
import { LanguageProvider } from "./context/LanguageContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import LanguageModal from "./components/LanguageModal"
import "./styles/style.scss"
import "./styles/CodePopup.scss"
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
      <main>
        <section id="projects">
          <h2>Projetos</h2>
          <p>Descrição dos projetos.</p>
        </section>
        <section id="contact">
          <h2>Contato</h2>
          <p>Informações de contato.</p>
        </section>
      </main>
      <div
        className={`modal-background ${isLanguageModalOpen ? "" : "hidden"}`}
      >
        {isLanguageModalOpen && <LanguageModal onClose={closeLanguageModal} />}
      </div>
    </LanguageProvider>
  )
}

export default App
