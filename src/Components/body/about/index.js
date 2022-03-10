import React from 'react'
import './about.css'
import SocialContact from '../common/social-contact'

const About = () => {
  return(
    <div className="about">
      <div className="about-top">
          <div className="about-info">
              Hello There 🤙 , I'am <br /> <span className="info-name">Ahmed Khaled</span><br />
            Junior Front-End (React Engineer)
          </div>
          <div className="about-photo">
              <img src="../../assets/photo2.png" className="photo" />
          </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
