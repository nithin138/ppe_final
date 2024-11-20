import React, { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import "../Styles/addservice.css";
import { GrUpload } from "react-icons/gr";

function AddService() {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Reference to the hidden file input
  const fileInputRef = useRef(null);

  const handleToggleDescription = () => {
    setDescriptionVisible((prev) => !prev);
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };
  const Navigate = useNavigate();
  return (
    <div className="addservice">
      <div className="addline">
        <FaArrowLeft className="k" style={{cursor:"pointer"}} onClick={() => {Navigate(-1)}}/>
        <p>Add Service</p>
      </div>
      <div className="profile-content">
        <div className="firstccont">
          <div className="info-field">
            <label htmlFor="service" className="add-service-title">Service</label>
            <select id="service" className="service-addservice">
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <p className="query-addservice" onClick={handleToggleDescription}>
            Don’t find your service?
          </p>
        </div>
        {isDescriptionVisible && (
          <div className="info-field">
            <label htmlFor="new service">Add new service</label>
            <div className="hiddengem">
              <input
                type="text"
                id="new service"
                name="new service"
                placeholder="Service name"
              />
              <p>Submit to review</p>
            </div>
          </div>
        )}

        <div className="info-field">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
          />
        </div>
        <div className="info-field">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter price"
          />
        </div>
        <div className="image-cont">
          <div className="addimage">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="uploaded-image-preview"
              />
            ) : (
              <GrUpload className="add-ser-uploadicon" />
            )}
            <p>{selectedImage ? "Image selected" : "Add Image"}</p>
          </div>
          <div className="upload">
            <button className="uploadbutton" onClick={handleUploadClick}>
              Click to upload
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none"  , width:"36px" , height:"36px"}}
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
        <div className="add-service-uploaddetails">
          <p>Add Service</p>
        </div>
      </div>
    </div>
  );
}

export default AddService;
