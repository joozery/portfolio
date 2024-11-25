// src/database.js

export function createDatabase() {
    const db = {};  // ตัวอย่างฐานข้อมูลที่ใช้ในแอป (แก้ไขตามต้องการ)
    
    // สมมติฐานข้อมูลนี้มีฟังก์ชันหรือคำสั่งอื่น ๆ
    db.createTable = function() {
      console.log("Table created!");
    };
  
    return db;
}
