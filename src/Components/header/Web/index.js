import React from 'react'
import './web.css'
const Web = () => {
  return (
    <div className="web">
        <div className="web-option">
            <a  href="#projects">
              <i className="ri-settings-5-line option-icon"></i>
              Projects
            </a>
        </div>
        <div className="web-option">
            <a  href="#skills">
              <i className="ri-macbook-line option-icon"></i>
              Skills
            </a>
        </div>
    { /*  // untill i get a work experience
      <div className="web-option">
            <a  href="#work">Work</a>
        </div>*/}
        <div className="web-option">
            <a  href="#contact">
              <i className="ri-contacts-line option-icon"></i>
              Contact
            </a>
        </div>
    </div>
  )
}

export default Web
