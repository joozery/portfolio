import React, { useState, useEffect } from "react";
import { createDatabase } from "../database"; // เชื่อมต่อฐานข้อมูล SQLite
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Dashboard() {
  const [db, setDb] = useState(null); // เก็บฐานข้อมูล SQLite
  const [activities, setActivities] = useState([]); // เก็บรายการกิจกรรม
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    imageFile: null,
  }); // เก็บข้อมูลกิจกรรมใหม่

  // สร้างฐานข้อมูล SQLite เมื่อ Component Mount
  useEffect(() => {
    const initDb = async () => {
      const database = await createDatabase();
      setDb(database);

      // ดึงข้อมูลกิจกรรมจากฐานข้อมูล
      const result = database.exec("SELECT * FROM activities");
      if (result.length > 0) {
        const rows = result[0].values.map(([id, title, description, image_url]) => ({
          id,
          title,
          description,
          imageUrl: image_url,
        }));
        setActivities(rows); // อัปเดต State ด้วยข้อมูลที่ดึงมา
      }
    };
    initDb();
  }, []);

  // ฟังก์ชันสำหรับอัปโหลดรูปภาพ
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewActivity((prev) => ({ ...prev, imageFile: reader.result })); // เก็บ Base64 รูปภาพ
      };
      reader.readAsDataURL(file);
    }
  };

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault();

    if (db) {
      // บันทึกกิจกรรมลงในฐานข้อมูล
      db.run(
        "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)",
        [newActivity.title, newActivity.description, newActivity.imageFile]
      );

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

  // ฟังก์ชันสำหรับลบกิจกรรม
  const deleteActivity = (id) => {
    if (db) {
      db.run("DELETE FROM activities WHERE id = ?", [id]);
      setActivities((prev) => prev.filter((activity) => activity.id !== id)); // อัปเดต State
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f5fa", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Dashboard - Add and View Activities
      </Typography>

      {/* Form สำหรับเพิ่ม Activity */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h6">Add New Activity</Typography>
        <form onSubmit={addActivity}>
          <TextField
            fullWidth
            label="Activity Title"
            variant="outlined"
            value={newActivity.title}
            onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Activity Description"
            variant="outlined"
            multiline
            rows={4}
            value={newActivity.description}
            onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
            required
            margin="normal"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
            style={{ margin: "10px 0" }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Add Activity
          </Button>
        </form>
      </Paper>

      {/* แสดงรายการ Activity */}
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6">Activity List</Typography>
        {activities.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No activities available.
          </Typography>
        ) : (
          <List>
            {activities.map((activity) => (
              <ListItem key={activity.id} divider>
                <ListItemText
                  primary={activity.title}
                  secondary={activity.description}
                />
                {activity.imageUrl && (
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    style={{
                      width: "100px",
                      height: "auto",
                      borderRadius: "8px",
                      marginLeft: "20px",
                    }}
                  />
                )}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteActivity(activity.id)}
                  sx={{ marginLeft: 2 }}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}

export default Dashboard;
