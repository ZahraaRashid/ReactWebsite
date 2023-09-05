import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a question or want to collaborate? Reach out to us using the information below.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">📞</span>
              <p>+90 552 544 44 42</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📧</span>
              <p>info@Reader.com</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📍</span>
              <p>06 Cadde, Ankara, Turkey</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

