import React, { useState } from "react";
import { createDatabase } from "../database"; // อัปเดต path ให้ถูกต้อง

function Dashboard() {
  const [newActivity, setNewActivity] = useState({ title: "", description: "", imageUrl: "" });
  const [db, setDb] = useState(null);

  // สร้างฐานข้อมูล SQLite เมื่อ Component Mount
  React.useEffect(() => {
    const initDb = async () => {
      const database = await createDatabase();
      setDb(database);
    };
    initDb();
  }, []);

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault();

    if (db) {
      db.run(
        "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)",
        [newActivity.title, newActivity.description, newActivity.imageUrl]
      );

      alert("Activity added successfully!");
      setNewActivity({ title: "", description: "", imageUrl: "" }); // รีเซ็ตฟอร์ม
    }
  };

  return (
    <div>
      <h1>Dashboard - Add New Activity</h1>
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
          type="text"
          placeholder="Image URL"
          value={newActivity.imageUrl}
          onChange={(e) => setNewActivity({ ...newActivity, imageUrl: e.target.value })}
          required
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default Dashboard;
