import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// นำเข้าภาพ
import slide01 from '../assets/slide01.jpg';
import slide02 from '../assets/slide02.jpg';

const images = [slide01, slide02];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ฟังก์ชันเปลี่ยนภาพอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // เปลี่ยนภาพทุก 5 วินาที
    return () => clearInterval(interval); // เมื่อคอมโพเนนต์ถูกลบจะหยุด interval
  }, []);

  return (
    <div className="image-slider-container">
      <div className="image-slider-single">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image-single" />
      </div>
      
      {/* Dot indicators */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
