// src/database.js

// ฟังก์ชันการสร้างฐานข้อมูล (ตัวอย่าง)
export function createDatabase() {
    // สมมติฐานข้อมูลนี้มีฟังก์ชันหรือคำสั่งอื่น ๆ
    const db = {};  // ตัวอย่างฐานข้อมูลที่ใช้ในแอป (แก้ไขตามต้องการ)
  
    // สมมติฐานข้อมูลนี้มีฟังก์ชันสำหรับการสร้างตาราง
    db.createTable = function() {
      console.log("Table created!");
    };
  
    return db;  // ส่งคืนฐานข้อมูล
  }
  