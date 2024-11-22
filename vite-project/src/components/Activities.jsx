import React, { useEffect, useState } from "react";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ title: "", description: "" });

  // ฟังก์ชันสำหรับดึงข้อมูลกิจกรรมจาก Backend
  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:5000/activities");
      const data = await response.json();
      setActivities(data); // อัปเดต State
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      });
      if (response.ok) {
        fetchActivities(); // อัปเดตข้อมูลหลังจากเพิ่มกิจกรรมใหม่
        setNewActivity({ title: "", description: "" }); // เคลียร์ฟอร์ม
      } else {
        console.error("Error adding activity");
      }
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };

  // ฟังก์ชันสำหรับลบกิจกรรม
  const deleteActivity = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/activities/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchActivities(); // อัปเดตข้อมูลหลังจากลบกิจกรรม
      } else {
        console.error("Error deleting activity");
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  // เรียก fetchActivities เมื่อ Component ถูก mount
  useEffect(() => {
    fetchActivities();
  }, []);

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
        <button type="submit">Add Activity</button>
      </form>

      {activities.length === 0 ? (
        <p>No activities available. Please add some activities.</p>
      ) : (
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button onClick={() => deleteActivity(activity.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Activities;
