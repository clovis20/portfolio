import React from "react"
import pypeep from "../assets/images/pypeep.png"
import efood from "../assets/images/efood.png"
import quicksand from "../assets/images/quicksand.png"

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

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">{projectsContent.title}</h2>
      </div>
      <div className="projects-content">
        <div className="project">
          <div className="project-image">
            <img src={pypeep} alt="PyPeep" />
          </div>
          <div className="project-details">
            <div className="project-title">{projectsContent.pTitleA}</div>
            <div className="project-description">
              {projectsContent.pDescriptionAa}
              <br />
              <br />
              {projectsContent.pDescriptionAb}
            </div>
            <div className="project-tools">{projectsContent.pToolsA}</div>
            <div className="project-link">
              <a
                href="https://cjr-projeto14.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsContent.button}
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={efood} alt="eFood" />
          </div>
          <div className="project-details">
            <div className="project-title">{projectsContent.pTitleB}</div>
            <div className="project-description">
              {projectsContent.pDescriptionBa}
              <br />
              <br />
              {projectsContent.pDescriptionBb}
            </div>
            <div className="project-tools">{projectsContent.pToolsB}</div>
            <div className="project-link">
              <a
                href="https://cjr-projeto14.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsContent.button}
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={quicksand} alt="Quicksand" />
          </div>
          <div className="project-details">
            <div className="project-title">{projectsContent.pTitleC}</div>
            <div className="project-description">
              {projectsContent.pDescriptionCa}
              <br />
              <br />
              {projectsContent.pDescriptionCb}
            </div>
            <div className="project-tools">{projectsContent.pToolsC}</div>
            <div className="project-link">
              <a
                href="https://cjr-projeto14.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsContent.button}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="project">
          <div className="project-image">
            <img src={pypeep} alt="PyPeep" />
          </div>
          <div className="project-details">
            <div className="project-title">PyPeep</div>
            <div className="project-description">
              Projeto final para o curso de FullStack da EBAC
              <br />
              <br />
              Desafio: criar um site clone do Twitter com sistema CRUD completo.
            </div>
            <div className="project-tools">
              Ferramentas: HTML, CSS, Bootstrap, Django, Python, Linux
            </div>
            <div className="project-link">
              <a
                href="http://clovisjr20.pythonanywhere.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Projeto
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Projects
