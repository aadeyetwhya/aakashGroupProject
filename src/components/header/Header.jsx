import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerSection">
      <div className="header">

        <div className="right">
          <h1 className="title">React Landing</h1>
        </div>
        <div className="right">
          <ul className="rightHeader">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact</a></li>
                        <li><Link to="/weather">Weather</Link></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header