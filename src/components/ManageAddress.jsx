import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ManageAddress.css";
import { TbDotsVertical } from "react-icons/tb";
const Address = () => {
  const navigate = useNavigate();
  // const [isAddingAddress, setIsAddingAddress] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Rohan Jhonson",
      phoneNumber: "+61 123 456 789",
      status: "Work",
      address:
        "Bhairav Kripa Bldg, N G Acharya Rd, Opp Laxmi Market, Chembur, Mumbai, Maharashtra, India - 400071",
    },
    {
      id: 2,
      name: "Delilah Guerrero",
      phoneNumber: "+61 491 570 159",
      status: "Home",
      address:
        "Bhairav Kripa Bldg, N G Acharya Rd, Opp Laxmi Market, Chembur, Mumbai, Maharashtra, India - 400071",
    },
    {
      id: 3,
      name: "Aleesha Nicholson",
      phoneNumber: "+61 491 570 110",
      status: "Home",
      address:
        "Bhairav Kripa Bldg, N G Acharya Rd, Opp Laxmi Market, Chembur, Mumbai, Maharashtra, India - 400071",
    },
  ]);
  // State for form inputs
  
  const menuRef = useRef(null);
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

 
  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };
 
  return (
    <div className="sidebarss" style={{width:"100%"}}>
        <div className="main-contes">
          <div className="posting-datas">
            <h2>Manage Address</h2>
            <button className="add-adds" onClick={() => navigate("/profile/manage-address/add-address")} >
              Add Address
            </button>
          </div>
          <div className="postings-lists">
            {addresses.map((post) => (
              <div key={post.id} className="posting-itemss">
                <div className="posting-ins">
                
                  <div className="post-detailss">
                  
                    <div className="post-infos">
                    •
                      <h3>{post.name}</h3>
                      <div className="post-phones">{post.phoneNumber}</div>
                      <div className="posting-states">
                        {post.status && (
                          <div className={`posting-status ${post.status.toLowerCase()}`}>
                            <span className="status-texts" style={{ color: post.statusColor }}>
                              {post.status}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="post-addresss">{post.address}</div>
                  </div>
                </div>
                <div className="actionss">
                  <TbDotsVertical
                    onClick={() => toggleMenu(post.id)}
                    className="action-icons"
                  />
                  {activeMenu === post.id && (
                    <div className="action-menus">
                      <button
                        className="edit-actions"
                        onClick={() => navigate("/profile/manage-address/add-address")}                      >
                        Edit
                      </button>
                      <button
                        className="delete-actions"
                        onClick={() => handleDeleteAddress(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
};
export default Address;
// ) : (
//   <div className="address-main">
//     <div className="address-form">
//       <div className="address-form-header">
//         <div
//           className="address-form-arrow"
//           onClick={() => setIsAddingAddress(false)}
//         >
//           <FaArrowLeft />
//           <h2 className="address-back-link">Add address</h2>
//         </div>
//         <button className="address-save-button" onClick={handleSaveAddress}>
//           Save Address
//         </button>
//       </div>
//       <div className="address-form-body">
//         <div className="address-form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             placeholder="Full Name"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>House No., Building Name</label>
//           <input
//             type="text"
//             placeholder="House No., Building Name"
//             name="houseNo"
//             value={formData.houseNo}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>Road Name, Area, Colony</label>
//           <input
//             type="text"
//             placeholder="Road Name, Area, Colony"
//             name="roadName"
//             value={formData.roadName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>State</label>
//           <input
//             type="text"
//             placeholder="Telangana"
//             name="state"
//             value={formData.state}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>City</label>
//           <input
//             type="text"
//             placeholder="Hyderabad"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>Pincode</label>
//           <input
//             type="text"
//             placeholder="Pincode"
//             name="pincode"
//             value={formData.pincode}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>Contact Number</label>
//           <input
//             type="text"
//             placeholder="Contact Number"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="address-form-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         </div>

//         <div className="address-form-group">
//           <label>Type of address</label>
//           <div className="manage-address-type">
//             <button
//               className={addressType === "home" ? "address-active" : ""}
//               onClick={() => setAddressType("home")}
//             >
//               <RiHomeHeartLine /> Home
//             </button>
//             <button
//               className={addressType === "work" ? "address-active" : ""}
//               onClick={() => setAddressType("work")}
//             >
//               <RiBuilding4Fill /> Work
//             </button>
//           </div>
//         </div>
//     </div>
//   </div>
// )}