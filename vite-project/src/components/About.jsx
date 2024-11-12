import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <h1>ABOUT</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>สวัสดีครับทุกท่าน</h2>
          <p>
            ยินดีต้อนรับเข้าสู่เว็บไซต์ของกระผม เว็บไซต์นี้ถูกสร้างขึ้นเพื่อเป็นส่วนหนึ่งในการแสดงผลงานของกระผมด้านวิชาการและสันทนาการ
            งานวิจัยของกระผมประกอบด้วยการแข่งขัน โครงการวิจัย และผลงานวิจัยต่างๆ ที่สะท้อนถึงความตั้งใจและความสามารถของกระผมในการแข่งขันในสภาพแวดล้อมต่างๆ 
            หวังว่าเว็บไซต์นี้จะเป็นแหล่งข้อมูลและแรงบันดาลใจให้กับทุกท่าน หากมีข้อเสนอแนะหรือความคิดเห็นใด กระผมยินดีรับฟังและพัฒนาเว็บไซต์ให้ดีขึ้น
          </p>
        </div>
        <div className="about-image">
          <img src="about-image.jpg" alt="About Me" />
        </div>
      </div>
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
  );
};

export default About;
