import React from "react";
import "./LandingPage.css";
import profileImage from "../assets/proflie01.jpg"; // แก้ path ให้ตรงกับโครงสร้างไฟล์

const LandingPage = ({ onEnter }) => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <img
                    src={profileImage} // ใช้รูปภาพที่ import มา
                    alt="Profile"
                    className="profile-image"
                />
                <h1>Welcome to </h1>
                <h1>Portfolio Party</h1>
                <button className="enter-button" onClick={onEnter}>
                    เข้าสู่ port
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
