import React from 'react';
import "../styles/Component.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.name}</h1>
    </div>
  )
}

export default Header