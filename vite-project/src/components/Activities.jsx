import React, { useState, useEffect } from "react";
import { createDatabase } from "../database";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [db, setDb] = useState(null);

  // สร้างฐานข้อมูล SQLite เมื่อ Component Mount
  useEffect(() => {
    const initDb = async () => {
      const database = await createDatabase();
      setDb(database);

      // ดึงข้อมูลกิจกรรมจากฐานข้อมูล
      const results = database.exec("SELECT * FROM activities");
      if (results.length > 0) {
        const activityData = results[0].values.map(([id, title, description, image_url]) => ({
          id,
          title,
          description,
          imageUrl: image_url,
        }));
        setActivities(activityData);
      }
    };
    initDb();
  }, []);

  return (
    <section className="activities-section">
      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities available. Please add some activities.</p>
      ) : (
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              <img src={activity.imageUrl} alt={activity.title} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <a href={`/activity/${activity.id}`} className="more-link">
                more
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Activities;
