import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import initializeDatabase from './initializeDatabase';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Activities from './components/Activities';
import Footer from './components/Footer';
import './App.css';
import profilePic from './assets/profile.png';

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [db, setDb] = useState(null);

  const handleEnterApp = () => {
    setShowLandingPage(false);
  };

  useEffect(() => {
    const setupDatabase = async () => {
      const database = await initializeDatabase();
      setDb(database);
    };
    setupDatabase();
  }, []);

  return (
    <Router>
      {showLandingPage ? (
        <LandingPage onEnter={handleEnterApp} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="portfolio-header">
                    <h1>PORTFOLIO</h1>
                    <p>Teeratat Wiboonsanti</p>
                  </section>
                  <ImageSlider />
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
                  <Activities db={db} />
                </>
              }
            />
            <Route path="/activities" element={<Activities db={db} />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
