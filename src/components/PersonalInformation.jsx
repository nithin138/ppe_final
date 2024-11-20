import React, { useState } from "react";
import "../Styles/PersonalInformation.css";
import piclogo from "../Assets/2d6fa51f443cdc2177d85824beee5a71.png";
import uplogo from "../Assets/image.png";
import userdata from "../Assets/userdata.json";
function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(piclogo);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="profile-container-unique">
      <div className="profile-header-unique">
        <h2>Profile Information</h2>
        {isEditing ? (
          <button className="save-button-unique" onClick={handleSaveClick}>
            Save Details
          </button>
        ) : (
          <button className="edit-button-unique" onClick={handleEditClick}>
            Edit Details
          </button>
        )}
      </div>
      <div className="profile-content-unique">
        <div className="profile-image-unique">
          <img src={profileImage} alt="Profile" />
          {isEditing && (
            <label className="choose-image-button-unique">
              <img src={uplogo} alt="upload" />
              Choose Profile Image
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        <div className="profile-details-unique">
          <div className="name-fields-unique">
            <div className="profile-field-unique">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={userdata.user_list.firstname}
                readOnly={!isEditing}
              />
            </div>
            <div className="profile-field-unique">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={userdata.user_list.lastname}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="profile-field2-unique">
            <label>Your Gender</label>
            <div className="gender-selection-unique">
              <div style={{display:"flex" ,gap:0,alignItems:"center"}}>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                disabled={!isEditing}
                defaultChecked
              />
              <label htmlFor="male">Male</label>
              </div>
              <div style={{display:"flex" ,gap:0,alignItems:"center"}}>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                disabled={!isEditing}
              />
              <label htmlFor="female">Female</label>
              </div>
              <div style={{display:"flex" ,gap:0,alignItems:"center"}}>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                disabled={!isEditing}
              />
              <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="profile-field-unique">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={userdata.user_list.mail}
              readOnly={!isEditing}
            />
          </div>
          <div className="profile-field-unique">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder={userdata.user_list.contact_number}
              readOnly={!isEditing}
            />
          </div>
          {/* New unique field added */}
          <div className="profile-field-unique">
            <label htmlFor="pinCode">PinCode</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              placeholder={userdata.user_list.pincode || "Enter your PinCode"}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
      <div className="profile-faq-unique">
        <h3>FAQs</h3>
        <div className="faq-item-unique">
          <h4>
            What happens when I update my email address (or mobile number)?
          </h4>
          <p>
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account-related communication on your updated email
            address (or mobile number).
          </p>
        </div>
        <div className="faq-item-unique">
          <h4>
            When will my GoBooze account be updated with the new email address
            (or mobile number)?
          </h4>
          <p>
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account-related communication on your updated email
            address (or mobile number).
          </p>
        </div>
      </div>
    </div>
  );
}
export default PersonalInformation;
