import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import './style.css';

const Header = () => {
  return (
   <>
     <div className="header-title-section">
      <div className="home-section">
        <h2 className="header-title">Chat / Feed chat</h2>
        <div className="home-icon"><AiOutlineHome /></div>
      </div>
      <div className="header-actions">
          <button className="action-button process-owner">Process Owner HOD</button>
          <button className="action-button admin">Admin</button>
          <div className="profile-section">
            <span className="profile-name">Rajesh Bansal</span>
            <img
              className="profile-picture"
              src="https://via.placeholder.com/40"
              alt="User"
            />
            <CiSettings />
            <IoIosLogOut />
          </div>
        </div>
    </div>
    <header className="header">
      <div className="tabs">
        <div className="tab">JhonathHiggins</div>
        <div className="tab">Capt. Trunk</div>
        <div className="tab active">Hannibal Smith</div>
        <div className="tab">Capt. Trunk</div>
        <div className="tab">Cheyenne Bergson</div>
        <div className="tab">Hannibal Srini</div>
        <div className="tab action-tab">Messaging</div>
      </div>
    </header>
   </>
  );
};

export default Header;
