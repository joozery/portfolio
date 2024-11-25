import React from 'react';
import logo from '../assets/logo02.png';  // นำเข้าโลโก้
import { Link } from 'react-router-dom';  // นำเข้า Link จาก React Router
import './Sidebar.css';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* ปุ่มปิด Sidebar */}
        <button className="close-btn" onClick={closeSidebar}>X</button>

        {/* โลโก้ */}
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" className="sidebar-logo-img" />
        </div>
      </div>

      {/* รายการเมนู */}
      <ul>
        <li><a href="#academic-activities">Academic Activities Competition</a></li>
        <li><a href="#academic-training">Academic Activities Training Attended</a></li>
        <li><a href="#recreational-activities">Recreational Activities</a></li>
        <li><a href="#home">Home</a></li>
        <li><Link to="/about">About</Link></li> {/* ใช้ Link จาก React Router */}
      </ul>
    </div>
  );
};

export default Sidebar;
