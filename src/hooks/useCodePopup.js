import { useState } from "react"

const useCodePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupJsContent, setPopupJsContent] = useState("")
  const [popupCssContent, setPopupCssContent] = useState("")

  const handleMouseOver = (jsContent, cssContent) => {
    setPopupJsContent(jsContent)
    setPopupCssContent(cssContent)
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleToggleMode = () => {
    console.log("Toggle mode executed")
  }

  return {
    isPopupOpen,
    popupJsContent,
    popupCssContent,
    handleMouseOver,
    handleClosePopup,
    handleToggleMode,
  }
}

export default useCodePopup
