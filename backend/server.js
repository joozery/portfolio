import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// ใช้ fileURLToPath เพื่อให้ได้ __dirname ใน ES Module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

// เชื่อมต่อกับฐานข้อมูล SQLite
const db = new sqlite3.Database(path.resolve('activities.sqlite'), (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
  } else {
    console.log('Database connected');
  }
});

// ให้บริการไฟล์ static จากโฟลเดอร์ dist ของ frontend (vite-project)
app.use(express.static(path.join(__dirname, '..', 'vite-project', 'dist')));

app.get('/api/activities', (req, res) => {
  db.all("SELECT * FROM activities", (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching activities', error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/activities', (req, res) => {
  const { title, description, imageUrl } = req.body;

  const query = "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)";
  db.run(query, [title, description, imageUrl], function (err) {
    if (err) {
      res.status(500).send({ message: 'Error adding activity', error: err.message });
    } else {
      res.status(201).send({ message: 'Activity added', id: this.lastID });
    }
  });
});

// ส่งไฟล์ index.html เมื่อไม่ได้ระบุ route อื่น ๆ
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'vite-project', 'dist', 'index.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
