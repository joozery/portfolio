import React, { useState } from "react";
import { createDatabase } from "./database";

function Dashboard() {
  const [newActivity, setNewActivity] = useState({ title: "", description: "" });
  const [db, setDb] = useState(null);

  // สร้างฐานข้อมูล SQLite เมื่อ Component Mount
  React.useEffect(() => {
    const initDb = async () => {
      const database = await createDatabase();
      setDb(database);
    };
    initDb();
  }, []);

  // เพิ่มกิจกรรมใหม่ลงในฐานข้อมูล
  const addActivity = (e) => {
    e.preventDefault();

    if (db) {
      db.run(
        "INSERT INTO activities (title, description) VALUES (?, ?)",
        [newActivity.title, newActivity.description]
      );

      alert("Activity added successfully!");
      setNewActivity({ title: "", description: "" });
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
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
    </div>
  );
}

export default Dashboard;
