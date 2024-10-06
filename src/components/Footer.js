import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-title">The Cake Corner</h3>
          <p>
          We are a proud member of the Colombo local merchant community, and love every opportunity 
          to interact <br />with our customers as we provide them with the freshest and most delicious ingredients.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-location">
            <h4><FaMapMarkerAlt /> Location</h4>
            <p>25, Buthgamuwa Road<br />Rajagiriya</p>
          </div>
          <div className="footer-contact">
            <h4><FaPhoneAlt /> Contact</h4>
            <p>0777 382 510<br /> contact@cakeconer.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
