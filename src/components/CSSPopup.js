import React, { useRef, useEffect } from "react"

const CSSPopup = ({ isOpen, onClose, initialCss, onToggleCodeMode }) => {
  const popupRef = useRef(null)

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
      id="cssPopup"
      className="popup"
      style={{ display: isOpen ? "block" : "none" }}
      ref={popupRef}
    >
      <div id="code">
        <pre>
          <code>{initialCss}</code>
        </pre>
      </div>
      <button onClick={onToggleCodeMode}>Visualizar Código</button>
      <button onClick={onClose}>X</button>
    </div>
  )
}

export default CSSPopup
