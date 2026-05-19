import React from 'react'
import Header from '../componets/Header'
import "../styles/Contact.css"
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      <Header name="Contact"/>
      <div className="contact">
        <Link to="https://linkedin.com/in/shubhamwork2026" target='_blank'><p>LinkedIn : @shubhamwork2026</p></Link>
        <Link to="https://x.com/perrythehacker" target='_blank'><p>Twitter/X : @perrythehacker</p></Link>
        <Link to="https://github.com/shubhamwork2026" target='_blank'><p>Github : @shubhamwork2026</p></Link>
        <a href="mailto:shubhamshwork@outlook.com"><p>Email : shubhamshwork@outlook.com</p></a>
        <a href="tel:+917901722460"><p>Phone : (+91) 7901722460</p></a>
      </div>
    </>
  )
}

export default ContactPage