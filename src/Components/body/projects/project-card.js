import React from 'react';
import './project-card.css';

const ProjectCard = ({project}) => {

  return (
    <div className="project-card">
      <div className="project-info">
          <label className="project-title">{project.title}</label>
          <div className="project-links">
              {
                project.demo &&
                  <a className="project-link" href={project.demo} target="_blanck">
                    <div className="link-button">
                      <i className="ri-global-line"></i>
                      demo
                    </div>
                  </a>
              }
              {
                project.github &&
                  <a className="project-link" href={project.github} target="_blanck">
                    <div className="link-button">
                      <i className="ri-github-fill"></i>
                      github
                    </div>
                  </a>
              }
          </div>
          <p>{project.about}</p>
          <div className="project-tags">
          {project.tags.map(tag => {
                return <label className="tag" key={tag}>{tag}</label>})
            }
          </div>
      </div>
      <img src={project.images} className="project-photo"/>
    </div>
  )
}

export default ProjectCard
