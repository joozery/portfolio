import React from 'react';
import './Footer.css';  // เชื่อมโยงกับไฟล์ CSS ของ Footer
import lineIcon from '../assets/line-icon.png'; // Path ไอคอน LINE ที่เก็บไว้ใน assets
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Portfolio Panayut Kosol</p>
        </div>
        <div className="footer-links">
          <a href="https://line.me/ti/p/BGCkAemJQA" target="_blank" rel="noopener noreferrer">
            <img src={lineIcon} alt="Line" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554584263650&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/wiboonasti?igsh=bGJ2M2FpbjF6Yjh4&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
