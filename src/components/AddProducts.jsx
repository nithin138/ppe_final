import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

import { FaArrowLeft } from "react-icons/fa6";
import "../Styles/AddProducts.css";
import upload from "../Assets/upload.png";
const Products = () => {
  const Navigate = useNavigate();

  // State to manage product type selection (New or Used)
  const [productType, setProductType] = useState("NewProduct");
  // State to manage file upload progress and completion status
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  // Handler for product type selection
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };
  // Handler for file upload (simulate an upload process)
  const handleFileUpload = () => {
    const fakeUploadTime = 3000; // 3 seconds to simulate upload
    setUploadProgress(0);
    setUploadCompleted(false);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploadCompleted(true);
          return 100;
        }
        return newProgress;
      });
    }, fakeUploadTime / 10);
  };
  return (
    <div className="unique-container">
      <div className="unique-product-container" style={{cursor:"pointer"}} onClick={() => {Navigate(-1)}}>
        <FaArrowLeft className="unique-icon" />
        <div className="unique-product">Add Product</div>
      </div>
      <div className="unique-radio-container">
        <div className="radio-input">
          <input
            type="radio"
            name="productType"
            value="NewProduct"
            className="unique-radio-icon"
            checked={productType === "NewProduct"}
            onChange={handleProductTypeChange}
          />
          <label className="unique-new">New Product</label>
        </div>
        <div className="radio-input">
          <input
            type="radio"
            name="productType"
            value="UsedProduct"
            className="unique-radio-icon"
            checked={productType === "UsedProduct"}
            onChange={handleProductTypeChange}
          />
          <label className="unique-new">Used Product</label>
        </div>
      </div>
      <div className="unique-category-container">
        <label className="unique-category-label">Product Category</label>
        <div className="unique-select-container">
          <select id="category" className="unique-category-select">
            <option value="">Select category</option>
            {/* Add your categories here */}
          </select>
        </div>
      </div>
      <div className="unique-input-container">
        <label htmlFor="product-name" className="unique-input-label">
          Product Name
        </label>
        <input
          type="text"
          id="product-name"
          className="unique-input-field"
          placeholder="Enter product name"
        />
      </div>
      <div className="unique-form-group">
        <label htmlFor="description">Product Description</label>
        <textarea id="description" className="unique-form-control"></textarea>
      </div>
      <div className="unique-price-group">
        <div className="unique-form-group1">
          <label htmlFor="mrp">MRP</label>
          <input
            type="text"
            id="mrp"
            className="unique-form-control1"
            placeholder="₹ 0.00"
          />
        </div>
        <div className="unique-form-group1">
          <label htmlFor="discount-price">Discount Price</label>
          <input
            type="text"
            id="discount-price"
            className="unique-form-control1"
            placeholder="₹ 0.00"
          />
        </div>
      </div>
      <div className="unique-container1">
        <div className="unique-upload-container">
          <div className="unique-upload-container-up" style={{display:"flex",alignItems:"center"}}>
          <img src={upload} alt="upload" className="unique-upload-icon" />
          <div className="unique-image">Add image</div></div>
          <button className="unique-button" onClick={handleFileUpload}>
            Click to upload
          </button>
        </div>
      </div>
      <div className="unique-text">You can add max. 5 images</div>
      <div className="unique-upload-progress">
        {!uploadCompleted ? (
          <p>
            {uploadProgress}% • {100 - uploadProgress} seconds remaining
          </p>
        ) : (
          <p className="unique-upload-complete">
            Completed ✓ uploading successfully
          </p>
        )}
        <p className="unique-upload-file-info">
          Offset Printing Machine.png • 515kb
        </p>
        <div
          className="unique-progress-bar"
          style={{ width: `${uploadProgress}%` }}
        ></div>
      </div>
      {uploadCompleted && (
        <div className="unique-upload-status-container">
          <div className="unique-upload-status-left">
            <p className="unique-upload-completed">
              Completed <span className="unique-checkmark">:heavy_check_mark:</span>
            </p>
            <p className="unique-upload-message">uploading successfully</p>
          </div>
          <div className="unique-upload-status-right">
            <p className="unique-file-name">Offset Printing Machine.png</p>
            <p className="unique-file-size">515kb</p>
          </div>
        </div>
      )}
      <button className="unique-button-container">Add Product</button>
    </div>
  );
};
export default Products;