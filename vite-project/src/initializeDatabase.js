import initSqlJs from 'sql.js';

// ฟังก์ชันสำหรับตั้งค่าและสร้างฐานข้อมูล
const initializeDatabase = async () => {
  // โหลด sql.js
  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`,
  });

  // สร้างฐานข้อมูลในหน่วยความจำ
  const db = new SQL.Database();

  // สร้างตารางกิจกรรม (Schema)
  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `);

  console.log('Database initialized and table "activities" created.');
  return db;
};

export default initializeDatabase;
