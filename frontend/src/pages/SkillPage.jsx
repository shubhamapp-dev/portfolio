import React from 'react'
import Header from '../componets/Header'
import "../styles/Skill.css"

const SkillPage = () => {
  return (
    <>
      <Header name="Skills"/>
      <div className="skill">
        <p>Languages: Python, JavaScript, HTML, CSS</p>
        <p>Stack: MERN (MongoDB, Express.js, React, Node.js)</p>
        <p>Tools: Git, Github, VS Code, Linux</p>
        <p>Concepts: JWT Authentication, CRUD Operations, Web Security, Rest APIs</p>
      </div>
    </>
  )
}

export default SkillPage
