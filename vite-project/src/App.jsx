import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Activities from './components/Activities';  // Import Activities
import Footer from './components/Footer';  // Import Footer
import './App.css';
import profilePic from './assets/profile.png';

function App() {
  return (
    <>
      <Navbar />

      {/* เพิ่มข้อความ PORTFOLIO เหนือสไลด์โชว์ */}
      <section className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <p>Teeratat Wiboonsanti</p>
      </section>

      {/* ส่วนสไลด์โชว์ */}
      <ImageSlider />

      {/* ส่วนโปรไฟล์ */}
      <section className="profile-section">
        <h2>PROFILE</h2>
        <div className="profile-content">
          <img src={profilePic} alt="Teeratat Wiboonsanti" className="profile-picture" />
          <div className="profile-details">
            <h3>Teeratat Wiboonsanti</h3>
            <p>Sarasas Witaed Bangbuathong School</p>
            <p><strong>Nickname:</strong> Party</p>
            <p><strong>Nationality:</strong> Thai</p>
            <p><strong>Birthday:</strong> 08 February 2550</p>
            <p><strong>Study department:</strong> Science-Mathematics (ASEAN)</p>
          </div>
        </div>
      </section>

      {/* เพิ่มส่วน Activities */}
      <Activities />

      {/* เพิ่ม Footer */}
      <Footer />
    </>
  );
}

export default App;
