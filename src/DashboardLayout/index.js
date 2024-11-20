// DashboardLayout.js
import React from "react";
import Sidebar from "./Sidebar";  
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main" >
        <Sidebar />  
        <div className="content-view">
            {children}
        </div> 
      </div>
    </div>
  );
};

export default DashboardLayout;
