// src/database.js
const Database = require('better-sqlite3'); // ใช้ better-sqlite3 สำหรับ SQLite

function createDatabase() {
  const db = new Database('./src/activities.sqlite', { verbose: console.log });

  // สร้างตาราง activities หากยังไม่มี
  db.exec(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT
    )
  `);

  return db;
}

// ส่งออกฟังก์ชัน createDatabase
module.exports = { createDatabase };
