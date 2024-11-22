import React, { useEffect, useState } from 'react';
import './Activities.css';

const Activities = ({ db }) => {
  const [activities, setActivities] = useState([]);

  // ฟังก์ชันสำหรับดึงข้อมูลกิจกรรมจากฐานข้อมูล
  const fetchActivities = () => {
    if (db) {
      const results = db.exec("SELECT * FROM activities");
      if (results.length > 0) {
        const rows = results[0].values.map(([id, title, description]) => ({
          id,
          title,
          description,
        }));
        setActivities(rows);
      }
    }
  };

  // เรียก fetchActivities เมื่อ Component ถูก mount
  useEffect(() => {
    fetchActivities();
  }, [db]);

  return (
    <section className="activities-section">
      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities available. Please add some activities.</p>
      ) : (
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              {/* สามารถเพิ่มรูปภาพในฐานข้อมูลในอนาคต */}
              <img
                src={`https://via.placeholder.com/150?text=${activity.title}`}
                alt={activity.title}
                className="activity-image"
              />
              <div className="activity-details">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <a href={`/activity/${activity.id}`}>more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Activities;
