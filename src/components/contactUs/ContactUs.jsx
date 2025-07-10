import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <div className="contact-title">Contact Us</div>
        <div className="contact-subtitle">Need to get in touch with us?</div>
        <div className="contact-description">
         For any inquiries regarding this project — including functionality, design, or implementation — please use the contact form below. We aim to respond promptly and assist with anything you need.


        </div>
      </div>

      <div className="form-section">
        <div className="name-fields">
          <div className="input-group">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" placeholder="Enter your first name" />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" placeholder="Last Name" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your message..."></textarea>
        </div>

        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
