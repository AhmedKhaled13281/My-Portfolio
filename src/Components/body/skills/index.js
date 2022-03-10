import React from 'react'
import Separator from '../common/separator/index'
import './skills.css'
import {SkillsData} from '../data/skillsData'
import SkillCard from './skillsCard'

const Skills = () => {

  const renderSkills = () =>{
    return SkillsData.map(skill => {
      return (
          <div className="skills-section" key={skill.type}>
              <label className="skills-section-title">{skill.type}</label>
              <div className="skills-list">
                  {skill.list.map(item => {
                    return <SkillCard item={item} key={item.name} />
                  })}
              </div>
          </div>
      )
    })
  }
  return(
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
          {renderSkills()}
      </div>
    </div>
  )
}

export default Skills
