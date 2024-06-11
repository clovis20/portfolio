// CodePopup.js

import React, { useRef, useEffect, useState } from "react"

const CodePopup = ({
  isOpen,
  codeContent,
  onClose,
  isCssMode,
  onToggleMode,
}) => {
  const popupRef = useRef(null)
  const [buttonText, setButtonText] = useState("Visualizar CSS")

  useEffect(() => {
    if (isCssMode) {
      setButtonText("Visualizar Código")
    } else {
      setButtonText("Visualizar CSS")
    }
  }, [isCssMode])

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

  return (
    <div
      id="codePopup"
      className="popup"
      style={{ display: isOpen ? "block" : "none" }}
      ref={popupRef}
    >
      <div id="code">
        <pre>
          <code>{codeContent}</code>
        </pre>
      </div>
      <button className="toggle-button" onClick={onToggleMode}>
        {buttonText}
      </button>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  )
}

export default CodePopup
