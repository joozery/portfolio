const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.db');

// ตัวอย่างการสร้างตาราง
db.run("CREATE TABLE IF NOT EXISTS activities (id INTEGER PRIMARY KEY, title TEXT, description TEXT)");

// ตัวอย่างการเพิ่มข้อมูล
const addActivity = (title, description) => {
  db.run("INSERT INTO activities (title, description) VALUES (?, ?)", [title, description], function(err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Added activity with ID: ${this.lastID}`);
    }
  });
};

// ตัวอย่างการดึงข้อมูล
const getActivities = (callback) => {
  db.all("SELECT * FROM activities", [], (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};
