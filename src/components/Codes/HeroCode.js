const heroCode = `/* Hero.js */

import React from "react"
import CP from "./CP"
import "../styles/Header.scss"
import headerCode from "./Codes/HeaderCode"

const Header = ({ onMouseOver }) => {

  return (
    <header className="header">
      <div className="logo" onMouseOver={() => onMouseOver(headerCode)}>
        <CP />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#inicio">INÍCIO</a>
          </li>
          <li>
            <a href="#quem-sou">QUEM SOU</a>
          </li>
          <li>
            <a href="#projetos">PROJETOS</a>
          </li>
          <li>
            <a href="#contato">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
`

export default heroCode
