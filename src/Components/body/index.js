import React from 'react'
import Project from './projects'
import Skills from './skills'
import Contact from './contact'
import About from './about'

const Body = () => {
  return (
    <div>
        <section id="about">
            <About />
        </section>
        <section id="projects">
            <Project />
        </section>
        <section id="skills">
            <Skills />
        </section>
        <section id="contact">
            <Contact />
        </section>
    </div>
  )
}

export default Body
