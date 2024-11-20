import React from 'react'
import '../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import ppe_logo from "../Assets/Frame.svg";
import userprofile from "../Assets/userprofile.svg";
import search from "../Assets/search.svg";
import settingsIcon from "../Assets/settingsIcon.svg";
import MVGL from "../Assets/MVGL.svg";
import ipp from "../Assets/ipp.svg";
import SFA from "../Assets/SFA_Logo.svg";
import OP2 from "../Assets/OP2.svg";
import logoHp from "../Assets/logoHp.svg";
import repro from "../Assets/repro.svg";
import { SlArrowDown } from "react-icons/sl";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <nav>
      <div className="nav-bar-container">
        <div className='nav-bar-left' onClick={() => navigate("/")} >
          <img src={ppe_logo} alt="" className="ppe-logo" style={{ cursor: "pointer" }}/>
          <h1 className="ppe-title">TechLink</h1>
        </div>
        <div className="nav-bar-right">
          <div className="search-container">
            <img src={search} alt="" className="search-icon" />
            <input
              type="text"
              placeholder="Search products/postcode"
              className="search-input"
            />
            <img src={settingsIcon} alt="settings-icon" className="settings-icon" />
          </div>
          <div className="user-profile" onClick={() => navigate("/profile")}>
            <img src={userprofile} alt="" />
            <p >Siddharth Joshi</p>
            <SlArrowDown  style={{marginLeft:"6px"}}/>
          </div>
        </div>
      </div>

      <div className="nav-bar-content">
  <div className="marquee">
    <div className="marquee-content">
      <img src={MVGL} alt="mvgl" />
      <img src={ipp} alt="ipp" />
      <img src={SFA} alt="sfa" />
      <img src={OP2} alt="op2" />
      <img src={logoHp} alt="logoHp" />
      <img src={repro} alt="repro" />
      
      {/* Duplicate the content to make the scroll seamless */}
      <img src={MVGL} alt="mvgl" />
      <img src={ipp} alt="ipp" />
      <img src={SFA} alt="sfa" />
      <img src={OP2} alt="op2" />
      <img src={logoHp} alt="logoHp" />
      <img src={repro} alt="repro" />
    </div>
  </div>
</div>

    </nav>
  </>
  )
}

export default Navbar