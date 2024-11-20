import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../Styles/BusinessService.css";
import card1 from "../Assets/service image.svg";
import productgallery from '../Assets/prodimg.png';
import { BsThreeDotsVertical } from "react-icons/bs";


function BusinessService() {
  const navigate = useNavigate();


  // Separate promote mode and selected products for services and products
  const [promoteServiceMode, setPromoteServiceMode] = useState(false);
  const [promoteProductMode, setPromoteProductMode] = useState(false);
  const [selectedServiceProducts, setSelectedServiceProducts] = useState([]);
  const [selectedProductProducts, setSelectedProductProducts] = useState([]);

  // Handle product selection
  const handleServiceProductSelect = (productId) => {
    setSelectedServiceProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleProductProductSelect = (productId) => {
    setSelectedProductProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  // Reset functionality for OK and Cancel buttons
  const handlePromoteCancel = (section) => {
    if (section === 'service') {
      setPromoteServiceMode(false);
      setSelectedServiceProducts([]); // Clear selected service products
    } else if (section === 'product') {
      setPromoteProductMode(false);
      setSelectedProductProducts([]); // Clear selected product products
    }
  };

  return (
    <div className="ppe-businesspage">
      {/* {showAddService ? (
        <AddService onGoBack={handleGoBack} />
      ) : showAddProduct ? (
        <AddProduct onGoBack={handleGoBack} />
      ) : ( */}
        <div>
          <div className="ppe-topcont">
            <div className="ppe-topbar">
              <p>Business Service details</p>
              <div className="ppe-rbuttons">
                <input type="radio" style={{ cursor: "pointer" }} id="business" name="option" value="business" defaultChecked />
                <label htmlFor="business">Business</label>
                <input type="radio" style={{ cursor: "pointer" }} id="service" name="option" value="service" />
                <label htmlFor="service">Service</label>
              </div>
              <button className="ppe-b-button">Save Details</button>
            </div>
          </div>

          {/* Service Section */}
          <div className="ppe-service-list">
            <div className="ppe-service-list-heading">
              <div className="ppe-part1">
                <h4>Services</h4>
                <button onClick={() => setPromoteServiceMode(true)} className="promote-button">Promote</button>
                <button onClick={() => handlePromoteCancel('service')} className="ok-button">OK</button>
              </div>
              <div className="ppe-part2">
                <button className="ppe-servicebutton" onClick={() => {navigate('/profile/business-service/add-service')}}>+ Add Service</button>
              </div>
            </div>

            {promoteServiceMode && selectedServiceProducts.length > 0 && (
              <div className="order-summary-container">
                <div className="order-summary-card">
                  <h3 className="summary-title">Order Summary</h3>
                  <ul className="summary-items">
                    {selectedServiceProducts.map((productId) => {
                      const product = products.find((p) => p.id === productId);
                      return (
                        <li key={productId} className="summary-item">
                          <p>{product.name}</p>
                          <p> - ₹{product.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="summary-total-gst">
                    <p>GST : (18%)</p>
                    <p>₹{(selectedServiceProducts.reduce((acc, id) => {
                      const product = products.find((p) => p.id === id);
                      return acc + product.price;
                    }, 0) * 0.18).toFixed(2)}</p>
                  </p>
                  <p className="summary-total">
                    <p>Total:</p><p className="summary-total-price"> ₹{(selectedServiceProducts.reduce((acc, id) => {
                      const product = products.find((p) => p.id === id);
                      return acc + product.price;
                    }, 0) * 1.18).toFixed(2)}</p>
                  </p>
                  <div className="order-summary-actions">
                    <button className="cancel-button" onClick={() => setSelectedServiceProducts([])}>Cancel</button>
                    <button className="proceed-button">Proceed</button>
                  </div>
                </div>
              </div>
            )}

            <div className="ppe-services-cards">
              <ul className="ppe-cards-list">
                {products.map((product) => (
                  <li key={product.id} className="ppe-service-card">
                    <div className="ppe-servimg">
                      <img src={product.image} alt="service" />
                    </div>
                    <div className="ppe-servdescription">
                      <div className="ppe-service-price">
                        <h2 className="price-business-product"> ${product.price}</h2>
                        {promoteServiceMode ? (
                          <input
                            type="radio"
                            checked={selectedServiceProducts.includes(product.id)}
                            onChange={() => handleServiceProductSelect(product.id)}
                          />
                        ) : (
                          <BsThreeDotsVertical style={{ color: "black" }} />
                        )}
                      </div>
                      <h3>{product.name}</h3>
                      <p className="ppe-b-desc">{product.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Section */}
          <div className="ppe-service-list">
            <div className="ppe-service-list-heading">
              <div className="ppe-part1">
                <h4>Products</h4>
                <button onClick={() => setPromoteProductMode(true)} className="promote-button">Promote</button>
                <button onClick={() => handlePromoteCancel('product')} className="ok-button">OK</button>
              </div>
              <div className="ppe-part2">
                <button className="ppe-servicebutton" onClick={() => {navigate('/profile/business-service/add-product')}}>+ Add Product</button>
              </div>
            </div>

            {promoteProductMode && selectedProductProducts.length > 0 && (
              <div className="order-summary-container">
                <div className="order-summary-card">
                  <h3 className="summary-title">Order Summary</h3>
                  <ul className="summary-items">
                    {selectedProductProducts.map((productId) => {
                      const product = products2.find((p) => p.id === productId);
                      return (
                        <li key={productId} className="summary-item">
                          <p>{product.name}</p>
                          <p> - ₹{product.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="summary-total-gst">
                    <p>GST : (18%)</p>
                    <p>₹{(selectedProductProducts.reduce((acc, id) => {
                      const product = products2.find((p) => p.id === id);
                      return acc + product.price;
                    }, 0) * 0.18).toFixed(2)}</p>
                  </p>
                  <p className="summary-total">
                    <p>Total:</p><p className="summary-total-price"> ₹{(selectedProductProducts.reduce((acc, id) => {
                      const product = products2.find((p) => p.id === id);
                      return acc + product.price;
                    }, 0) * 1.18).toFixed(2)}</p>
                  </p>
                  <div className="order-summary-actions">
                    <button className="cancel-button" onClick={() => setSelectedProductProducts([])}>Cancel</button>
                    <button className="proceed-button">Proceed</button>
                  </div>
                </div>
              </div>
            )}

            <div className="ppe-services-cards">
              <ul className="ppe-cards-list">
                {products2.map((product) => (
                  <li key={product.id} className="ppe-b-product-card">
                    <div className="ppe-b-image-container">
                      <img src={product.image} alt="service" className="ppe-image" />
                      {promoteProductMode ? (
                          <input
                          className="ppe-three-dot-icon"
                            type="radio"
                            checked={selectedProductProducts.includes(product.id)}
                            onChange={() => handleProductProductSelect(product.id)}
                          />
                        ) : (
                          <BsThreeDotsVertical style={{ color: "black" }} className="ppe-three-dot-icon"/>
                        )}
                    </div>
                    <div className="ppe-proddesc">
                    <h3>{product.name}</h3>

                      <div className="ppe-priceline">
                        <h2 className="ppe-price"> ${product.price}</h2>
                        
                      </div>
                      <p className="ppe-desc">{product.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default BusinessService;

// Sample product data
const products = [
  {
    id: 1,
    image: card1,
    name: "Blueprint fidelity: between paper prototype and finished product",
    price: 1200,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 2,
    image: card1,
    name: "Blueprint fidelity: between paper prototype and finished product",
    price: 2300,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 3,
    image: card1,
    name: "Blueprint fidelity: between paper prototype and finished product",
    price: 3400,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 4,
    image: card1,
    name: "Blueprint fidelity: between paper prototype and finished product",
    price: 4500,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
];
const products2 = [
  {
    id: 1,
    image: productgallery,
    name: "Prakash Offset Printing Machine, For Industrial",
    price: 1200,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 2,
    image: productgallery,
    name: "Prakash Offset Printing Machine, For Industrial",
    price: 2300,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 3,
    image: productgallery,
    name: "Prakash Offset Printing Machine, For Industrial",
    price: 3400,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
  {
    id: 4,
    image: productgallery,
    name: "Prakash Offset Printing Machine, For Industrial",
    price: 4500,
    description: "Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi.",
  },
];