import React, { useState, useEffect } from "react";
import { createDatabase } from "../database"; // ดึงข้อมูลจากฐานข้อมูล SQLite
import { Box, Grid, Paper, Typography, Button, TextField, List, ListItem, ListItemText } from "@mui/material";

function Dashboard() {
  const [db, setDb] = useState(null);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ title: "", description: "", imageUrl: "" });

  // สร้างฐานข้อมูล SQLite เมื่อ Component Mount
  useEffect(() => {
    const initDb = async () => {
      const database = await createDatabase();
      setDb(database);

      // ดึงข้อมูลกิจกรรมจากฐานข้อมูล
      const result = database.exec("SELECT * FROM activities");
      if (result.length > 0) {
        const rows = result[0].values.map(([id, title, description, imageUrl]) => ({
          id,
          title,
          description,
          imageUrl,
        }));
        setActivities(rows);
      }
    };
    initDb();
  }, []);

  // ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่
  const addActivity = (e) => {
    e.preventDefault();

    if (db) {
      // บันทึกกิจกรรมลงในฐานข้อมูล
      db.run(
        "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)",
        [newActivity.title, newActivity.description, newActivity.imageUrl]
      );

      // อัปเดตรายการกิจกรรมใน State
      setActivities((prev) => [
        ...prev,
        { id: prev.length + 1, ...newActivity },
      ]);

      // รีเซ็ตฟอร์ม
      setNewActivity({ title: "", description: "", imageUrl: "" });
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
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            value={newActivity.imageUrl}
            onChange={(e) => setNewActivity({ ...newActivity, imageUrl: e.target.value })}
            required
            margin="normal"
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
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}

export default Dashboard;
