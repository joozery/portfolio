// src/components/Activities.jsx
import React from "react";
import "./Activities.css"; // import CSS ที่เราสร้างไว้

const activities = [
  {
    id: 1,
    title: "จิตอาสา เก็บขยะตามชายหาด",
    description: "สถานที่ บางแสน",
    imageUrl: require("../assets/จิตอาสา เก็บขยะตามชายหาด บางแสน.jpg"),
    link: "/academic-activities"
  },
  {
    id: 2,
    title: "Academic Activities Training Attended",
    description: "กิจกรรมการอบรม ด้านวิชาการ",
    imageUrl: "https://link-to-your-image-2.jpg",
    link: "/academic-activities-training-attended"
  },
  {
    id: 3,
    title: "Recreational Activities",
    description: "กิจกรรมด้าน สันทนาการ",
    imageUrl: "https://link-to-your-image-3.jpg",
    link: "/recreational-activities"
  }
];

const Activities = () => {
  return (
    <section className="activities-section">
      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities available. Please add some activities.</p>
      ) : (
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="activity-image"
              />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <a href={activity.link} className="more-link">
                more
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Activities;
