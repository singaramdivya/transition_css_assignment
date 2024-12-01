import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { TiFlowMerge } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { PiNumberCircleOne } from "react-icons/pi";
import { PiNumberCircleTwo } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import { CiGift } from "react-icons/ci";
import './style.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img
          src="/logo.png"
          alt="Risk Hawk Logo"
          className="logo-image"
        />
        
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <AiOutlineFileSearch />
          Internal Audit
          <RiArrowRightSLine />
        </li>
        <li className="menu-item">
        <GoChecklist />
          UAT Testing
        </li>
        <li className="menu-item">
        <FaLink />
          Intract
          <RiArrowRightSLine />
        </li>
        <li className="menu-item">
        <GoPeople />
          Queue
        </li>
        <li className="menu-item">
        <TiFlowMerge />
          Workflow
        </li>
        <li className="menu-item">
        <IoPersonOutline />
          Admin
        </li>
        <li className="menu-item">
        <GrCube />
          Asset
        </li>
        <li className="menu-item">
        <GoPeople />
          Parent
        </li>
        <li className="menu-item">
        <PiNumberCircleOne />
          Option One
        </li>
        <li className="menu-item active">
        <PiNumberCircleTwo />
          Option Two
        </li>
        <li className="menu-item">
        <AiOutlineTool />
          All Accessories
        </li>
        <li className="menu-item">
          <AiOutlineFileSearch />
          Internal Audit
          <RiArrowRightSLine />
        </li>
        <li className="menu-item">
        <WiStars />
          Decorating
        </li>
        <li className="menu-item">
        <CiGift />
          Presenting
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
