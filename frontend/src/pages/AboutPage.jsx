import React from 'react'
import Header from '../componets/Header'
import "../styles/About.css"

const AboutPage = () => {
  return (
    <>
      <Header name="About"/>
      <div className="about">
        <p>I'm a Software Developer focused on building modern, scalable web applications. Alongside development, I actively explore web security to understand real-world vulnerabilities and build more secure, reliable systems. </p>
      </div>
    </>
  )
}

export default AboutPage
