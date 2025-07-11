import React from 'react'
import './Footer.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footerSection">
            <div className="footer">
                <div className="upperFooter">

                <div className="leftFooter">
                    <h1 className="footerTitle">
                        ReactLanding
                    </h1>
                    <p className="footerDescription">
                        Crafting great experiences
                    </p>
                </div>
                <div className="middleFooter">
                    <h2>Quick Links</h2>
                    <ul className="quickLinks">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="rightFooter">
                    <h2>Social Media</h2>
                    <ul className="socialMediaLinks">
                        <li className="socialMedia"><a href="https://x.com/" target="_blank"><FaTwitter /></a></li>
                        <li className="socialMedia"><a href="https://linkedin.com/in/aditya-kafle-0763311b4" target="_blank"><FaLinkedin /></a></li>
                        <li className="socialMedia"><a href="https://github.com/aadeyetwhya" target="_blank"><FaGithub /></a></li>
                        <li className="socialMedia"><a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a></li>
                    </ul>
                </div>
                </div>
                <div  className='bottomBar'>
        <p  style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
        <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.8rem' }}>
          Designed by Aditya Kafle
        </p>
      </div>
            </div>
        </div>
    )
}

export default Footer