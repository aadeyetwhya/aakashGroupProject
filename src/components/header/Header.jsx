import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


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
            <li><HashLink to="/#about">About Us</HashLink></li>
            <li><HashLink to="/#team">Our Team</HashLink></li>
            <li><HashLink to="/#contact">Contact</HashLink></li>
            <li><Link to="/movie">Movie Api</Link></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header