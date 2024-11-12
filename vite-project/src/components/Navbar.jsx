import React, { useState } from 'react';
import logo from '../assets/logo02.png';  // เส้นทางไปยังไฟล์โลโก้
import './Navbar.css';
import Sidebar from './Sidebar';  // นำเข้า Sidebar

const Navbar = () => {
  // สถานะการเปิด/ปิด Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันในการเปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  // ฟังก์ชันในการปิด Sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-group">
        <img src={logo} alt="Logo Left" className="navbar-logo" />
      </div>
      <button className="navbar-menu" onClick={toggleSidebar}>☰</button>

      {/* แสดง Sidebar เมื่อคลิก */}
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </nav>
  );
};

export default Navbar;
