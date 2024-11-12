// src/components/Footer.jsx
import React from 'react';
import './Footer.css';  // เชื่อมโยงกับไฟล์ CSS ของ Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Portfolio Panayut Kosol</p>
        </div>
        <div className="footer-links">
          <a href="https://line.me/ti/p/BGCkAemJQA" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/LINE_logo_2022.png" alt="Line" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554584263650&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/wiboonasti?igsh=bGJ2M2FpbjF6Yjh4&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
