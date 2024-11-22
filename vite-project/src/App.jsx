import React, { useState, useEffect } from 'react';
import initializeDatabase from './initializeDatabase'; // Import ฟังก์ชันฐานข้อมูล
import LandingPage from './components/LandingPage'; // Import LandingPage
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Activities from './components/Activities';  // Import Activities
import Footer from './components/Footer';  // Import Footer
import './App.css';
import profilePic from './assets/profile.png';

function App() {
  // ใช้ state เพื่อควบคุมการแสดงผลหน้า LandingPage หรือ App
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [db, setDb] = useState(null); // เก็บฐานข้อมูล SQLite

  // ฟังก์ชันสำหรับเปลี่ยนไปยังหน้า App
  const handleEnterApp = () => {
    setShowLandingPage(false);
  };

  // โหลดฐานข้อมูล SQLite เมื่อ Component ถูก mount
  useEffect(() => {
    const setupDatabase = async () => {
      const database = await initializeDatabase();
      setDb(database);
    };
    setupDatabase();
  }, []);

  return (
    <>
      {showLandingPage ? (
        // ถ้า showLandingPage เป็น true ให้แสดง LandingPage
        <LandingPage onEnter={handleEnterApp} />
      ) : (
        // ถ้า showLandingPage เป็น false ให้แสดง App
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
          <Activities db={db} />

          {/* เพิ่ม Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
