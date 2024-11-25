import initSqlJs from "sql.js";

export async function createDatabase() {
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  console.log("Database initialized"); // Log การสร้างฐานข้อมูล

  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT
    )
  `);
  console.log("Table 'activities' is ready"); // Log การสร้างตาราง

  return db;
}
