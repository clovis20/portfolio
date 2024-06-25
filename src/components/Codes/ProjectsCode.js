const projectsCode = `/* Projects.js */

import React, { useState, useEffect, useRef } from "react"
import { useLanguage } from "../context/LanguageContext"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CodePopup from "./CodePopup"
import useCodePopup from "../hooks/useCodePopup"
import projectsCode from "./Codes/ProjectsCode"
import projectsCss from "./Codes/ProjectsCss"

import projectsPT from "./Languages/Projects/projectsPT"
import projectsEN from "./Languages/Projects/projectsEN"
import projectsES from "./Languages/Projects/projectsES"
import "../styles/projects.scss"

const Projects = () => {
  const { language } = useLanguage()
  let projectsContent = projectsPT

  if (language === "en") {
    projectsContent = projectsEN
  } else if (language === "es") {
    projectsContent = projectsES
  }

  const [selectedProject, setSelectedProject] = useState(null)
  const popupRef = useRef(null)

  const handleMoreInfoClick = (project) => {
    setSelectedProject(project)
  }

  const closePopup = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedProject(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const {
    handleToggleMode,
    handleMouseOver,
    handleClosePopup,
    isPopupOpen,
    popupJsContent,
    popupCssContent,
  } = useCodePopup()

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">{projectsContent.title}</h2>
      </div>
      <div className="projects-content">
        {projectsContent.projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-title">{project.title}</div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-link">
              <button onClick={() => handleMoreInfoClick(project)}>
                {projectsContent.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="code-icon-container">
        <FontAwesomeIcon
          icon={faCode}
          className="code-icon"
          onMouseOver={() => handleMouseOver(projectsCode, projectsCss)}
        />
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}></div>
      )}
      <CodePopup
        isOpen={isPopupOpen}
        jsCode={popupJsContent}
        cssCode={popupCssContent}
        onClose={handleClosePopup}
        onToggleMode={handleToggleMode}
      />
      {selectedProject && (
        <div className="p-popup-overlay" onClick={closePopup}>
          <div className="p-popup" ref={popupRef}>
            <div className="p-popup-content">
              <button className="close-button" onClick={closePopup}>
                &times;
              </button>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.descriptionb}</p>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p className="project-tools">{selectedProject.tools}</p>
              <div className="p-popup-links">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.visit}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
`

export default projectsCode
