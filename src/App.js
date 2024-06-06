// src/App.js

import React, { useState } from "react"
import CodePopup from "./components/CodePopup"
import "./App.css"
import Header from "./components/Header"
import headerCode from "./components/Codes/HeaderCode"

function App() {
  const [editMode, setEditMode] = useState(false)
  const [isCodePopupOpen, setIsCodePopupOpen] = useState(false)
  const [codeContent, setCodeContent] = useState("")

  const handleMouseOver = (content) => {
    setCodeContent(content)
    setIsCodePopupOpen(true)
  }

  const handleCloseCodePopup = () => {
    setIsCodePopupOpen(false)
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={`App ${editMode ? "edit-mode" : ""}`}>
      <Header onMouseOver={handleMouseOver} headerCode={headerCode} />
      <main>
        <section id="about">
          <h2>Quem Sou</h2>
          <p>Breve descrição sobre você.</p>
          {editMode && (
            <div>
              <h3>Código Fonte:</h3>
              {/* Adicione aqui o código fonte da seção "Quem Sou" */}
              <button>Editar CSS</button>
            </div>
          )}
        </section>
        <section id="projects">
          <h2>Projetos</h2>
          <p>Descrição dos projetos.</p>
          {editMode && (
            <div>
              <h3>Código Fonte:</h3>
              {/* Adicione aqui o código fonte da seção "Projetos" */}
              <button>Editar CSS</button>
            </div>
          )}
        </section>
        <section id="contact">
          <h2>Contato</h2>
          <p>Informações de contato.</p>
          {editMode && (
            <div>
              <h3>Código Fonte:</h3>
              {/* Adicione aqui o código fonte da seção "Contato" */}
              <button>Editar CSS</button>
            </div>
          )}
        </section>
      </main>
      <CodePopup
        isOpen={isCodePopupOpen}
        codeContent={codeContent}
        onClose={handleCloseCodePopup}
      />
    </div>
  )
}

export default App
