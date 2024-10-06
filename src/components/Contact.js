import React from 'react';
import './Contact.css';
import Footer from './Footer';
import Header from './Header';

const HeaderSection = () => {
    return (
      <div className="header-section3">
        <div className="header-content3">
          <h1>Contact Us</h1>
          </div>
      </div>
    );
  };


  const Contacts = () => {
    return (
      <div className="contact-page">
       
        <div className="map-fullscreen">
          <iframe 
            title="colombo-map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31685.61434304606!2d79.83855278791363!3d6.927078843188107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963dbbb2125%3A0xe0157553b7f91b13!2sColombo!5e0!3m2!1sen!2slk!4v1695130486969!5m2!1sen!2slk" 
            allowFullScreen="" 
            loading="lazy"
          />
        </div>

        <div className="section">
            <h2>Get in Touch</h2>
        </div>
  
        
        <div className="contact-form-section">
          <form className="contact-form">
            <textarea placeholder="Enter Message" className="message-box"></textarea>
            <input type="text" placeholder="Enter your name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="text" placeholder="Enter Subject" className="input-field" />
            <button type="submit" className="send-button">SEND</button>
          </form>
  
          <div className="contact-info">
            <div className="info-item">
              <span>📍</span>
              <p>25, Buthgamuwa Road, Rajagiriya</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>0777 382 510<br/>Mon to Fri 9am to 6pm</p>
            </div>
            <div className="info-item">
              <span>📧</span>
              <p>support@cakeconer.com<br/>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  

const Contact = () => {
    return (
      <div className="App">
        <Header />
        <HeaderSection />
        <Contacts />
        <Footer /> 
       </div>
    );
  };

export default Contact;
