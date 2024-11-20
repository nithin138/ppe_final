import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RiHomeHeartLine, RiBuilding4Fill } from "react-icons/ri";

const Address = () => {
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
  const [ setIsAddingAddress] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    houseNo: "",
    roadName: "",
    state: "",
    city: "",
    pincode: "",
    contactNumber: "",
    email: "",
  });
  const [addressType, setAddressType] = useState("home");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSaveAddress = () => {
    if (!formData.fullName || !formData.contactNumber || !formData.pincode) {
      alert("Please fill in all required fields.");
      return;
    }
    const newAddress = {
      id: addresses.length + 1,
      name: formData.fullName,
      phoneNumber: formData.contactNumber,
      status: addressType === "home" ? "Home" : "Work",
      address: `${formData.houseNo}, ${formData.roadName}, ${formData.city}, ${formData.state}, India - ${formData.pincode}`,
    };
    setAddresses([...addresses, newAddress]);
    setIsAddingAddress(false);
    setFormData({
      fullName: "",
      houseNo: "",
      roadName: "",
      state: "",
      city: "",
      pincode: "",
      contactNumber: "",
      email: "",
    });
  };
  return (
    <div className="address-main">
          <div className="address-form">
            <div className="address-form-header">
              <div
                className="address-form-arrow"
                onClick={() => window.history.back()}
              >
                <FaArrowLeft />
                <h2 className="address-back-link">Add address</h2>
              </div>
              <button className="address-save-button" onClick={handleSaveAddress}>
                Save Address
              </button>
            </div>
            <div className="address-form-body">
              <div className="address-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>House No., Building Name</label>
                <input
                  type="text"
                  placeholder="House No., Building Name"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>Road Name, Area, Colony</label>
                <input
                  type="text"
                  placeholder="Road Name, Area, Colony"
                  name="roadName"
                  value={formData.roadName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>State</label>
                <input
                  type="text"
                  placeholder="Telangana"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Hyderabad"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  placeholder="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <div className="address-form-group">
                <label>Type of address</label>
                <div className="manage-address-type">
                  <button
                    className={addressType === "home" ? "address-active" : ""}
                    onClick={() => setAddressType("home")}
                  >
                    <RiHomeHeartLine /> Home
                  </button>
                  <button
                    className={addressType === "work" ? "address-active" : ""}
                    onClick={() => setAddressType("work")}
                  >
                    <RiBuilding4Fill /> Work
                  </button>
                </div>
              </div>
          </div>
        </div>
  );
};

export default Address;
