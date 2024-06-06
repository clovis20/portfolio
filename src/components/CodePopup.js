import React, { useRef } from "react"
import "../styles/CodePopup.scss"
import CSSPopup from "./CSSPopup"

const CodePopup = ({ isOpen, codeContent, onClose, onToggleCssMode }) => {
  const popupRef = useRef(null)

  const handleMouseOut = (event) => {
    if (!popupRef.current.contains(event.relatedTarget)) {
      onClose()
    }
  }

  return (
    <div
      id="codePopup"
      className="popup"
      style={{ display: isOpen ? "block" : "none" }}
      onMouseOut={handleMouseOut}
      ref={popupRef}
    >
      <div id="code">
        <pre>
          <code>{codeContent}</code>
        </pre>
      </div>
      <button onClick={onToggleCssMode}>Editar CSS</button>
      <button onClick={onClose}>X</button>
    </div>
  )
}

export default CodePopup
