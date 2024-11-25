import React from 'react';
import Navbar from './Navbar';  // นำเข้า Navbar
import './About.css';
import slide01 from '../assets/slide01.jpg';
import slide02 from '../assets/slide02.jpg';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [slide01, slide02];

  // ฟังก์ชันเปลี่ยนภาพอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // เปลี่ยนภาพทุก 5 วินาที
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar /> {/* เพิ่ม Navbar ใน About */}
      <section className="about-section">
        <h1>ABOUT</h1>
        <div className="about-content">
          {/* เนื้อหาภาษาไทย */}
          <div className="about-text">
            <h2>สวัสดีครับทุกท่าน</h2>
            <p>
              ยินดีต้อนรับเข้าสู่เว็บไซต์ของกระผม เว็บไซต์นี้ถูกสร้างขึ้นเพื่อเป็นส่วนหนึ่งในการแสดงผลงานของกระผมด้านวิชาการและสันทนาการ
              งานวิจัยของกระผมประกอบด้วยการแข่งขัน โครงการวิจัย และผลงานวิจัยต่างๆ ที่สะท้อนถึงความตั้งใจและความสามารถของกระผมในการแข่งขันในสภาพแวดล้อมต่างๆ
              หวังว่าเว็บไซต์นี้จะเป็นแหล่งข้อมูลและแรงบันดาลใจให้กับทุกท่าน หากมีข้อเสนอแนะหรือความคิดเห็นใด กระผมยินดีรับฟังและพัฒนาเว็บไซต์ให้ดีขึ้น
            </p>
          </div>

          {/* ส่วนแสดงผลภาพสไลด์ */}
          <div className="about-image">
            <div className="image-slider-container">
              <div className="image-slider-single">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image-single" />
              </div>
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
          </div>
        </div>

        {/* เนื้อหาภาษาอังกฤษ */}
        <div className="about-english">
          <h2>Hello everyone,</h2>
          <p>
            Welcome to my website. This site was created to showcase my work in various fields, both academic and recreational.
            My academic work includes competitions, research projects, and other scholarly outputs that reflect my knowledge and skills in various disciplines.
            These works demonstrate my dedication and effort in studying, researching, and excelling in competitive environments. This is an opportunity for those interested to learn and apply the knowledge to their own development.
          </p>
          <p>
            In addition to academic work, there are also recreational activities, hobbies, and personal interests that will help you get to know me from a different perspective.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
