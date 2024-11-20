import React, { useState } from "react";
import Switch from "react-switch";
import print from "../Assets/print.png";
import print1 from "../Assets/print1.png";
import print2 from "../Assets/print2.png";
import "../Styles/Myorders.css";

const Order = () => {
  const [checked, setChecked] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null); // Track which order is expanded
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const toggleExpand = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null); // Collapse if already expanded
    } else {
      setExpandedOrder(orderId); // Expand the selected order
    }
  };
  const orders = [
    {
      id: 1,
      placed: "18 January 2024",
      deliverystatus: "Arriving Soon",
      orderstatus: "Not Yet Dispatched",
      ocolor: "#009AE8",
      total: "₹431.6",
      shipTo: "Ravi Kumar",
      orderId: "#402-8638056-3817906",
      items: [
        {
          name: "Offset Printing Machine Manufacturers",
          quantity: 1,
          image: print,
          currentPrice: "₹2,56,239.00",
          originalPrice: "₹2,89,66.99",
        },
        {
          name: "Multi-Colour Offset Printing Machine",
          quantity: 2,
          image: print1,
          currentPrice: "₹2,56,238.00",
          originalPrice: "₹2,89,669.99",
        },
        {
          name: "Multi Color Digital Inkjet Printing Machine",
          quantity: 1,
          image: print2,
          currentPrice: "₹2,56,238.00",
          originalPrice: "₹2,89,669.99",
        },
      ],
    },
    {
      id: 2,
      placed: "22 February 2024",
      deliverystatus: "Delivered 05-Jan- 2024",
      orderstatus: "The order was delivered successfully",
      ocolor: "#08875D",
      total: "₹1,202.50",
      shipTo: "Anil Kumar",
      orderId: "#402-8638056-1234567",
      items: [
        {
          name: "Industrial Laser Printer",
          quantity: 1,
          image: print,
          currentPrice: "₹60,000.00",
          originalPrice: "₹70,000.00",
        },
        {
          name: "Color Label Printing Machine",
          quantity: 1,
          image: print1,
          currentPrice: "₹80,000.00",
          originalPrice: "₹1,00,000.00",
        },
      ],
    },
    {
      id: 3,
      placed: "10 March 2024",
      deliverystatus: "Arriving Soon",
      orderstatus: "Not Yet Dispatched",
      ocolor: "#009AE8",
      total: "₹3,890.00",
      shipTo: "Sunil Das",
      orderId: "#402-8638056-7896543",
      items: [
        {
          name: "Screen Printing Machine",
          quantity: 3,
          image: print2,
          currentPrice: "₹1,20,000.00",
          originalPrice: "₹1,50,000.00",
        },
        {
          name: "Digital UV Printing Machine",
          quantity: 1,
          image: print1,
          currentPrice: "₹50,000.00",
          originalPrice: "₹70,000.00",
        },
      ],
    },
  ];
  return (
    <>
      <div className="fullcont">
        <div className="order-name">
          <h2 className="name">My Orders</h2>
          <div className="cancelOrders">
            <Switch
              checked={checked}
              onChange={handleChange}
              onColor="#007bff"
              offColor="#cccccc"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              handleDiameter={16}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
              className="about-switch"
            />
            <div className="cancel">
              <p>Cancelled orders</p>
            </div>
          </div>
        </div>

        <div className="order-header">
          <span>3 Orders placed in</span>
          <select className="mo-select">
            <option>Last 30 days</option>
            <option>Last 6 months</option>
            <option>2023</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {orders.map((order) => (
            <div key={order.id} className="order-details">
              <div
                className="order-summary"
                onClick={() => toggleExpand(order.id)}
              >
                <div className="order-top">
                  <div className="order-summary-item">
                    <span className="order-label">ORDER PLACED</span>
                    <span className="order-value">{order.placed}</span>
                  </div>
                  <div className="order-summary-item">
                    <span className="order-label">TOTAL</span>
                    <span className="order-value">{order.total}</span>
                  </div>
                  <div className="order-summary-item">
                    <span className="order-label">SHIP TO</span>
                    <span className="order-value">{order.shipTo}</span>
                  </div>
                </div>
                <div className="ordertop2">
                  <div className="order-summary-item">
                    <span className="order-label">ORDER ID</span>
                    <span className="order-value">{order.orderId}</span>
                  </div>
                  <div className="order-summary-item">
                    <span className="order-label">INVOICE</span>
                    <p className="order-value">
                      Download
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="order-component">
                  <div className="order-content">
                    <div className="order-status">
                      <h2>{order.deliverystatus}</h2>
                      <p style={{ color: order.ocolor }}>{order.orderstatus}</p>
                    </div>
                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order-item">
                          <div className="item-quantity">{item.quantity}x</div>
                          <div className="item-image">
                            <img src={item.image} alt="Product" />
                          </div>
                          <div className="item-details">
                            <div className="details">
                              <span>{item.name}</span>
                            </div>
                            <div className="item-price">
                              <span className="item-current-price">
                                {item.currentPrice}
                              </span>
                              <span className="item-original-price">
                                {item.originalPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="aaction-button">
                    <div className="oorder-actions">
                      <button
                        className="view-order-buttons"
                        onClick={() => toggleExpand(order.id)}
                      >
                        {expandedOrder === order.id
                          ? "Hide Order Details"
                          : "View Order Details"}
                      </button>
                      <button className="cancel-order-buttons">
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </div>
                {expandedOrder === order.id && (
                  <div className="expanded-section">
                    <div className="order-summary-expanded">
                      <div className="expanded-section-inner">
                        <div style={{ borderBottom: " 1px solid #E1E6EF" }}>
                          <h3>Order Summary</h3>
                          <div className="expanded-section-inner-inner">
                            <div class="item">
                              <span class="label">Price (3 items)</span>
                              <span>:</span>
                              <span class="value" style={{ color: "#08875D" }}>
                                ₹7,37,476.00
                              </span>
                            </div>
                            <div class="item">
                              <span class="label">Discount</span>
                              <span>:</span>
                              <span class="value" style={{ color: "#08875D" }}>
                                - ₹2,21,242.00
                              </span>
                            </div>
                            <div class="item" style={{paddingBottom:"16px",borderBottom:"1px dashed #E1F1E6"}}>
                              <span class="label">Delivery Charges:</span>
                              <span>:</span>
                              <span class="value">FREE Delivery</span>
                            </div>
                            <div class="item">
                              <span class="label">Total Amount </span>
                              <h4>₹7,37,476.00</h4>
                            </div>
                          </div>
                        </div>
                        <span style={{color:"#08875D"}}>You will save ₹7,37,476.00 on this order</span>
                      </div>
                    </div>
                    <div className="order-detail-expanded">
                      <div className="expanded-section-inner">
                        <h3>Order Detail</h3>
                        <div className="expanded-section-inner-inner">
                          <div class="item">
                            <span class="label">Order Number</span>
                            <span>:</span>
                            <span class="value">{order.orderId}</span>
                          </div>
                          <div class="item">
                            <span class="label">Date</span>
                            <span>:</span>
                            <span class="value">{order.placed}</span>
                          </div>
                          <div class="item">
                            <span class="label">Payment</span>
                            <span>:</span>
                            <span class="value">Using Card(₹80,689.00)</span>
                          </div>
                          <div class="item">
                            <span class="label">Deliver to</span>
                            <span>:</span>
                            <span class="value">
                              A 4, Gali 4, Industrial Area Complex, Anand Parbat
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
