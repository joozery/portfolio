import React from "react";
import "./Activities.css"; // import CSS ที่เราสร้างไว้

// ใช้ import รูปภาพแทน require
import logoImage1 from "../assets/จิตอาสา เก็บขยะตามชายหาด บางแสน.jpg";
import logoImage2 from "../assets/การแข่งขัน pichingณ สถาบันเทคโนโลยีแห่งสุว.jpg";
import logoImage3 from "../assets/การแข่งขัน Microbit นิทรรศการวันวิทยาศาสตร_2.jpg";

const activities = [
  {
    id: 1,
    title: "จิตอาสา เก็บขยะตามชายหาด",
    description: "สถานที่ บางแสน",
    imageUrl: logoImage1,  // ใช้ imageUrl ที่เป็น import
    link: "/academic-activities"
  },
  {
    id: 2,
    title: "Academic Activities Training Attended",
    description: "กิจกรรมการอบรม ด้านวิชาการ",
    imageUrl: logoImage2,
    link: "/academic-activities-training-attended"
  },
  {
    id: 3,
    title: "การแข่งขัน micro:bit",
    description: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    imageUrl: logoImage3,
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
              <div className="activity-info">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <a href={activity.link} className="more-link">
                  more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Activities;
