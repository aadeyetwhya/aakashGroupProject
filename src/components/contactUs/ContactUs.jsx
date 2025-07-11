import React, { useState } from 'react';
import './Contactus.css';

function ContactUs() {
  const [contactData, setContactData] = useState({
    "fname": "",
    "lname": "",
    "email": "",
    "message": ""
  })
  const [responseData, setResponseData] = useState(null);


  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      console.log("post Response:", data);
      setResponseData(data);
      alert("Form submitted successfully (mock)!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }

  }
  return (
    <div className="contact-container" id="contact">
      <div className="contact-text">
        <div className="contact-title">Contact Us</div>
        <div className="contact-subtitle">Need to get in touch with us?</div>
        <div className="contact-description">
          For any inquiries regarding this project — including functionality, design, or implementation — please use the contact form below. We aim to respond promptly and assist with anything you need.


        </div>
      </div>

      <form className="form-section" onSubmit={handleSubmit}>
        <div className="name-fields">
          <div className="input-group">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" placeholder="Enter your first name" onChange={(e) => handleChange(e)} />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" placeholder="Last Name" onChange={(e) => handleChange(e)} />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" onChange={(e) => handleChange(e)} />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your message..." onChange={(e) => handleChange(e)}></textarea>
        </div>

        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
