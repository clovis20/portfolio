import React, { useEffect, useState } from "react"
import CodePopup from "./components/CodePopup"
import "./styles/CodePopup.scss"
import "./App.css"
import Header from "./components/Header"
import headerCode from "./components/Codes/HeaderCode"
import headerCss from "./components/Codes/HeaderCss"
import Hero from "./components/Hero"
import { LanguageProvider } from "./context/LanguageContext"
import LanguageModal from "./components/LanguageModal"

const AppContent = () => {
  //const { language } = useLanguage()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [codeContent, setCodeContent] = useState("")
  const [isCssMode, setIsCssMode] = useState(false)
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(true)

  // Função para abrir o modal de seleção de idioma
  //const openLanguageModal = () => {
  //  setIsLanguageModalOpen(true)
  //}

  // Função para fechar o modal de seleção de idioma
  const closeLanguageModal = () => {
    setIsLanguageModalOpen(false)
  }

  const handleMouseOver = (content) => {
    setCodeContent(content)
    setIsPopupOpen(true)
    setIsCssMode(false)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleToggleMode = () => {
    if (isCssMode) {
      setCodeContent(headerCode)
    } else {
      setCodeContent(headerCss)
    }
    setIsCssMode(!isCssMode)
  }

  return (
    <>
      <Header onMouseOver={handleMouseOver} />
      <Hero />
      <main>
        <section id="about">
          <h2>Quem Sou</h2>
          <p>Breve descrição sobre você.</p>
        </section>
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
      <CodePopup
        isOpen={isPopupOpen}
        codeContent={codeContent}
        onClose={handleClosePopup}
        isCssMode={isCssMode}
        onToggleMode={handleToggleMode}
      />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
