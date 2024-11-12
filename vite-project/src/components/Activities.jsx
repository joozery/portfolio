import React from 'react';
import './Activities.css';

const Activities = () => {
  return (
    <section className="activities-section">
      <h2>Activities</h2>

      <div className="activity-item">
        <img src="activity1.jpg" alt="Activity 1" className="activity-image" />
        <div className="activity-details">
          <h3>Academic Activities Competition</h3>
          <p>กิจกรรมการแข่งขันด้านวิชาการ</p>
          <a href="/academic-activities">more</a>
        </div>
      </div>

      <div className="activity-item">
        <img src="activity2.jpg" alt="Activity 2" className="activity-image" />
        <div className="activity-details">
          <h3>Academic Activities Training Attended</h3>
          <p>กิจกรรมการอบรมด้านวิชาการ</p>
          <a href="/academic-activities-training-attended">more</a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
