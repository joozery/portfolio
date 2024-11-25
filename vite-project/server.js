// เส้นทางสำหรับ GET ข้อมูลกิจกรรม
app.get("/api/activities", (req, res) => {
    // ดึงข้อมูลจากฐานข้อมูล activities.sqlite
    const db = new sqlite3.Database('./activities.sqlite');
    db.all("SELECT * FROM activities", [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows); // ส่งข้อมูลกิจกรรมกลับมาในรูปแบบ JSON
    });
  });
  
  // เส้นทางสำหรับเพิ่มกิจกรรมใหม่ (POST)
  app.post("/api/activities", (req, res) => {
    const { title, description, image_url } = req.body; // รับข้อมูลจาก body
    const db = new sqlite3.Database('./activities.sqlite');
    db.run(
      "INSERT INTO activities (title, description, image_url) VALUES (?, ?, ?)",
      [title, description, image_url],
      (err) => {
        if (err) {
          res.status(500).send("Error adding activity");
          return;
        }
        res.status(200).send("Activity added successfully");
      }
    );
  });
  