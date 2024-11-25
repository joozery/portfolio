import initSqlJs from "sql.js";

// ฟังก์ชันสำหรับสร้างฐานข้อมูล
export async function createDatabase() {
  // โหลด sql.js
  const SQL = await initSqlJs();

  // โหลดไฟล์ SQLite (ถ้ามี) หรือสร้างฐานข้อมูลในหน่วยความจำ
  const db = new SQL.Database();

  // สร้างตาราง `activities` หากยังไม่มี
  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT
    )
  `);

  return db;
}
