const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// ตัวอย่างฐานข้อมูลในหน่วยความจำ
let activities = [
  { id: 1, title: "Activity 1", description: "Description of Activity 1" },
  { id: 2, title: "Activity 2", description: "Description of Activity 2" },
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ดึงข้อมูลกิจกรรมทั้งหมด
app.get("/activities", (req, res) => {
  res.json(activities);
});

// เพิ่มกิจกรรมใหม่
app.post("/activities", (req, res) => {
  const { title, description } = req.body;
  const newActivity = { id: Date.now(), title, description };
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

// ลบกิจกรรม
app.delete("/activities/:id", (req, res) => {
  const { id } = req.params;
  activities = activities.filter((activity) => activity.id !== parseInt(id));
  res.status(200).json({ message: "Activity deleted successfully" });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
