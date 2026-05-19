import React from 'react'
import Header from '../componets/Header'
import "../styles/Skill.css"

const SkillPage = () => {
  return (
    <>
      <Header name="Skills"/>
      <div className="skill">
        <p>Web Development : React, REST API, Express, NodeJS</p>
        <p>Programming Language: Python, JavaScript, C++</p>
        <p>Others: Unix, Git, Web Application Vulnerabilities</p>
      </div>
    </>
  )
}

export default SkillPage