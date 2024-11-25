import initSqlJs from "sql.js";

export async function createDatabase() {
  const SQL = await initSqlJs({
    locateFile: (file) => `/sql-wasm.wasm`, // ระบุไฟล์ WASM ใน public folder
  });

  const db = new SQL.Database();

  // สร้างตาราง activities
  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT
    )
  `);

  console.log("Database initialized and table created.");
  return db;
}
