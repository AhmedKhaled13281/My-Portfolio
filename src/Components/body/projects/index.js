import React , {useState} from 'react'
import './projects.css'
import {ProjectData} from '../data/projectsData'
import ProjectCard from './project-card'
import Separator from '../common/separator/index'
import './projects.css'
const Projects = () => {
  const [data , setData] = useState(ProjectData)

  const renderProjects = () => {
    return data.map(project => {
      return (
        <div key={project.id}>
             <ProjectCard project={project} />
        </div>
      )
    })
  }

  const filterProjects = (term) => {
    const updateList = ProjectData.filter(x => x.catigory === term)
    setData(updateList)
  }

  return(
    <div className="project">
      <Separator />
        <label className="section-title">Projects</label>
        <div className="buttons">
          <button className="filter-button" onClick={() => setData(ProjectData)}>All</button>
          <button className="filter-button" onClick={() => filterProjects('react')}>React</button>
          <button className="filter-button" onClick={() => filterProjects('vanilla js')}>Vanilla Js</button>
          <button className="filter-button" onClick={() => filterProjects('animation')}>Animation</button>
      </div>
        <div>{renderProjects()}</div>
    </div>
  )
}

export default Projects
