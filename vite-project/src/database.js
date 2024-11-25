// src/database.js
const Database = require('better-sqlite3');

// เปิดฐานข้อมูลที่มีอยู่แล้ว
const db = new Database('./src/activities.sqlite', { verbose: console.log });

// สร้างตารางกิจกรรม (ถ้ายังไม่มี)
db.exec(`
  CREATE TABLE IF NOT EXISTS activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT
  )
`);

module.exports = db;
