import React, { useState, useEffect } from "react";
import { createDatabase } from "../database";  // นำเข้าไฟล์ฐานข้อมูล

function Activities() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    imageFile: null,
  });

  const [db, setDb] = useState(null);

  // สร้างฐานข้อมูลและดึงข้อมูลเมื่อ component mount
  useEffect(() => {
    const initDb = () => {
      const database = createDatabase();  // ใช้ฐานข้อมูลที่เราสร้างใน database.js
      setDb(database);

      // ดึงข้อมูลกิจกรรมจากฐานข้อมูล
      const results = database.prepare("SELECT * FROM activities").all();
      if (results.length > 0) {
        setActivities(results);  // เก็บข้อมูลใน state
      }
    };
    initDb();
  }, []);

  // ฟังก์ชันเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault();

    if (db) {
      db.prepare(
        "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)"
      ).run(newActivity.title, newActivity.description, newActivity.imageFile);

      // อัปเดตรายการกิจกรรมใน State
      setActivities((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: newActivity.title,
          description: newActivity.description,
          imageUrl: newActivity.imageFile,
        },
      ]);

      // รีเซ็ตฟอร์ม
      setNewActivity({ title: "", description: "", imageFile: null });
    }
  };

  return (
    <section className="activities-section">
      <h2>Activities</h2>

      <form onSubmit={addActivity}>
        <input
          type="text"
          placeholder="Activity Title"
          value={newActivity.title}
          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Activity Description"
          value={newActivity.description}
          onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
          required
        ></textarea>
        <input
          type="file"
          onChange={(e) => setNewActivity({ ...newActivity, imageFile: e.target.files[0] })}
          required
        />
        <button type="submit">Add Activity</button>
      </form>

      <div className="activities-list">
        {activities.length === 0 ? (
          <p>No activities available.</p>
        ) : (
          activities.map((activity) => (
            <div key={activity.id}>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <img src={activity.image_url} alt={activity.title} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Activities;
