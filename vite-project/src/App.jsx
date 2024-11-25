import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ImageSlider from './components/ImageSlider';
import Activities from './components/Activities';
import Dashboard from './components/Dashboard'; // นำเข้าไฟล์ Dashboard.jsx
import Footer from './components/Footer';
import './App.css';
import profilePic from './assets/profile.png';

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  // ฟังก์ชันสำหรับเปลี่ยนจาก LandingPage ไปยังหน้าอื่น ๆ
  const handleEnterApp = () => {
    setShowLandingPage(false);
  };

  return (
    <Router>
      <div className="app">
        {showLandingPage ? (
          <LandingPage onEnter={handleEnterApp} />
        ) : (
          <>
            {/* Routes */}
            <Routes>
              {/* Route สำหรับหน้า Portfolio */}
              <Route
                path="/"
                element={
                  <div className="portfolio">
                    <section className="portfolio-header">
                      <h1>PORTFOLIO</h1>
                      <p>Teeratat Wiboonsanti</p>
                    </section>
                    <ImageSlider />
                    <section className="profile-section">
                      <h2>PROFILE</h2>
                      <div className="profile-content">
                        <img
                          src={profilePic}
                          alt="Teeratat Wiboonsanti"
                          className="profile-picture"
                        />
                        <div className="profile-details">
                          <h3>Teeratat Wiboonsanti</h3>
                          <p>Sarasas Witaed Bangbuathong School</p>
                          <p>
                            <strong>Nickname:</strong> Party
                          </p>
                          <p>
                            <strong>Nationality:</strong> Thai
                          </p>
                          <p>
                            <strong>Birthday:</strong> 08 February 2550
                          </p>
                          <p>
                            <strong>Study department:</strong> Science-Mathematics (ASEAN)
                          </p>
                        </div>
                      </div>
                    </section>
                    <Activities /> {/* แสดงส่วน Activities */}
                  </div>
                }
              />
              {/* Route สำหรับหน้า Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Route สำหรับหน้า Activities */}
              <Route path="/activities" element={<Activities />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
