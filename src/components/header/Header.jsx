import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="headerSection">
      <div className="header">

        <div className="right">
          <h1 className="title">React Landing</h1>
        </div>
        <div className="right">
          <ul className="rightHeader">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header