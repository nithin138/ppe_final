import React from "react";
import "../Styles/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegUser, FaRegCalendarMinus } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { IoBriefcaseOutline } from "react-icons/io5";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { BsBoxSeam, BsBriefcase } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const options = [
    { label: "Profile Information", path: "/", icon: <FaRegUser /> },
    { label: "Business/Service Details", path: "/business-service", icon: <BsBriefcase /> },
    { label: "Postings", path: "/postings", icon: <FaRegCalendarMinus /> },
    { label: "Enquiries", path: "/enquiries", icon: <HiOutlineDocumentText /> },
    { label: "Manage Address", path: "/manage-address", icon: <CiLocationOn /> },
    { label: "My Orders", path: "/my-orders", icon: <BsBoxSeam /> },
    { label: "Favorite Products", path: "/favorite-products", icon: <CiHeart /> },
    { label: "Customer Support", path: "/customer-support", icon: <BiMessageDetail /> },
    { label: "Log Out", path: "/", icon: <AiOutlineLogout /> },
  ];
  const handleMenuClick = (path,label) => {
    if (label === "Log Out")
      navigate('/')
    else
      navigate(`/profile${path}`);
  };
  return (
    <div className="sidebar-menu">
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(option.path,option.label)}
            className={location.pathname === `/profile${option.path}` ? "active" : ""}
          >
            <div className="left-piece">
              <span className="menu-icon">{option.icon}</span>
              <span className="menu-label">{option.label}</span>
              <MdKeyboardArrowRight className="arrow"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
