import React from 'react'
import './mobile.css'
const Mobile = ({isOpen , setIsOpen}) => {
  return (
    <div className="mobile">
        <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i className="ri-close-fill option-icon"></i>
        </div>
        <div className="mobile-options">
          <div className="mobile-option">
              <a  href="#projects">
                <i className="ri-settings-5-line option-icon"></i>
                Projects
              </a>
          </div>
          <div className="mobile-option">
              <a  href="#skills">
                <i className="ri-macbook-line option-icon"></i>
                Skills
              </a>
          </div>
      { /*  // untill i get a work experience
        <div className="mobile-option">
              <a  href="#work">Work</a>
          </div>*/}
          <div className="mobile-option">
              <a  href="#contact">
                <i className="ri-contacts-line option-icon"></i>
                Contact
              </a>
          </div>
        </div>
    </div>
  )
}

export default Mobile
