import React, { useState } from "react";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]); // เก็บข้อมูลกิจกรรม
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
  }); // ฟอร์มสำหรับเพิ่มกิจกรรม

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault(); // ป้องกันการ refresh หน้า
    const newActivityItem = {
      id: Date.now(), // ใช้ timestamp เป็น ID
      title: newActivity.title,
      description: newActivity.description,
    };
    setActivities([...activities, newActivityItem]); // เพิ่มกิจกรรมใหม่ใน State
    setNewActivity({ title: "", description: "" }); // เคลียร์ฟอร์ม
  };

  // ฟังก์ชันสำหรับลบกิจกรรม
  const deleteActivity = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities); // อัปเดต State หลังลบ
  };

  return (
    <section className="activities-section">
      <h2>Activities</h2>

      {/* ฟอร์มสำหรับเพิ่มกิจกรรม */}
      <form onSubmit={addActivity}>
        <input
          type="text"
          placeholder="Activity Title"
          value={newActivity.title}
          onChange={(e) =>
            setNewActivity({ ...newActivity, title: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Activity Description"
          value={newActivity.description}
          onChange={(e) =>
            setNewActivity({ ...newActivity, description: e.target.value })
          }
          required
        ></textarea>
        <button type="submit">Add Activity</button>
      </form>

      {/* แสดงรายการกิจกรรม */}
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <button onClick={() => deleteActivity(activity.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
