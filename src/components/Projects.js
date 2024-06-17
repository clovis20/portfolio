import React, { useState } from "react"

import { useLanguage } from "../context/LanguageContext"

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

  const handleMoreInfoClick = (project) => {
    setSelectedProject(project)
  }

  const closePopup = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">{projectsContent.title}</h2>
      </div>
      <div className="projects-content">
        {projectsContent.projects &&
          projectsContent.projects.map((project, index) => (
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
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.descriptionb}</p>

            <img src={selectedProject.image} alt={selectedProject.title} />
            <p className="project-tools">{selectedProject.tools}</p>
            <div className="popup-links">
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
      )}
    </section>
  )
}

export default Projects
