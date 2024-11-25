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
      if (database) {
        console.log("Database initialized successfully"); // Log การสร้างฐานข้อมูล
        setDb(database);

        // ดึงข้อมูลกิจกรรมจากฐานข้อมูล
        const result = database.exec("SELECT * FROM activities");
        console.log("Fetched activities from database:", result); // Log ข้อมูลที่ดึงมา

        if (result.length > 0) {
          const rows = result[0].values.map(([id, title, description, image_url]) => ({
            id,
            title,
            description,
            imageUrl: image_url,
          }));
          console.log("Mapped activities:", rows); // Log ข้อมูลที่ถูก map
          setActivities(rows);
        }
      } else {
        console.error("Failed to initialize database"); // Log หากสร้างฐานข้อมูลล้มเหลว
      }
    };
    initDb();
  }, []);

  // ฟังก์ชันสำหรับอัปโหลดรูปภาพ
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file.name); // Log ชื่อไฟล์ที่ถูกเลือก
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Image converted to Base64:", reader.result); // Log Base64 ของรูปภาพ
        setNewActivity((prev) => ({ ...prev, imageFile: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected"); // Log หากไม่มีการเลือกไฟล์
    }
  };

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", newActivity); // Log ข้อมูลในฟอร์ม

    if (!db) {
      console.error("Database is not initialized"); // Log หากฐานข้อมูลยังไม่ได้ถูกตั้งค่า
      return;
    }

    if (!newActivity.title || !newActivity.description || !newActivity.imageFile) {
      console.error("Missing activity data:", newActivity); // Log หากข้อมูลในฟอร์มไม่ครบ
      return;
    }

    try {
      db.run(
        "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)",
        [newActivity.title, newActivity.description, newActivity.imageFile]
      );
      console.log("Activity added to database!"); // Log หากเพิ่มกิจกรรมสำเร็จ

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
      console.log("Activities updated:", activities); // Log ข้อมูลที่ถูกอัปเดตใน State

      // รีเซ็ตฟอร์ม
      setNewActivity({ title: "", description: "", imageFile: null });
    } catch (error) {
      console.error("Error adding activity:", error); // Log หากเกิดข้อผิดพลาด
    }
  };

  // ฟังก์ชันสำหรับลบกิจกรรม
  const deleteActivity = (id) => {
    if (db) {
      db.run("DELETE FROM activities WHERE id = ?", [id]);
      setActivities((prev) => prev.filter((activity) => activity.id !== id)); // อัปเดต State
      console.log(`Activity with id ${id} deleted successfully`); // Log การลบกิจกรรม
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f5fa", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        ระบบเพิ่มผลงาน Activity
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
