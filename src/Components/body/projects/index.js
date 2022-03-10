import React from 'react'
import './projects.css'
import {ProjectData} from '../data/projectsData'
import ProjectCard from './project-card'
import Separator from '../common/separator/index'

const Projects = () => {
  const renderProjects = () => {
    return ProjectData.map(project => {
      return (
        <div key={project.id}>
             <ProjectCard project={project} />
        </div>
      )
    })
  }
  return(
    <div className="project">
      <Separator />
        <label className="section-title">Projects</label>
        <div>{renderProjects()}</div>
    </div>
  )
}

export default Projects
