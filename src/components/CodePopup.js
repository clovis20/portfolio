// CodePopup.js

import React, { useRef, useEffect, useState } from "react"

const CodePopup = ({ isOpen, jsCode, cssCode, onClose, onToggleMode }) => {
  const popupRef = useRef(null)
  const [buttonText, setButtonText] = useState("Visualizar CSS")
  const [showCss, setShowCss] = useState(false)

  useEffect(() => {
    if (showCss) {
      setButtonText("Visualizar Código")
    } else {
      setButtonText("Visualizar CSS")
    }
  }, [showCss])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleToggleMode = () => {
    setShowCss(!showCss)
    onToggleMode()
  }

  return (
    <div
      id="codePopup"
      className="popup"
      style={{ display: isOpen ? "block" : "none" }}
      ref={popupRef}
    >
      <div id="code">
        <pre>
          <code>{showCss ? cssCode : jsCode}</code>
        </pre>
      </div>
      <button className="toggle-button" onClick={handleToggleMode}>
        {buttonText}
      </button>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  )
}

export default CodePopup
