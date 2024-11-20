import React, { useState } from 'react';
import '../Styles/CustomerSupport.css';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Customer = () => {

  const navigate = useNavigate();
  const [isContactDetails, setIsContactDetails] = useState(false);

  const handleClose = () => {
    navigate('/profile')
  }
  return (
    <div style={{width:"100%"}}>{
    isContactDetails ?
      (
        <div className="contact-support-containers" >
          <div className="cs-headers" onClick={handleClose}>
            <IoMdArrowBack className='cs-backs' />
            <label htmlFor="details" className="form-labels">Customer Support</label>
          </div>
          <div className="form-groups">
            <label htmlFor="subject" className="form-labels">Subject</label>
            <input
              type="text"
              id="subject"
              className="form-inputs"
              placeholder="Enter Subject"
            />
          </div>
          <div className="form-groups">
            <label htmlFor="details" className="form-labels">Details</label>
            <textarea
              id="details"
              className="form-textareas"
              rows="10"
              placeholder="Enter Details here"
            />
          </div>
          <div className='close-buttons'>
            <button className="buttons">Save</button>
            <button className="buttons" onClick={handleClose}>Close</button>
          </div>
        </div>
      )
      :
      (<div>
        <h2 className="section-title">Customer Support</h2>

        <div className="customer-support">
          <div className="support-card">
            <h3 className="card-title">Blueprint fidelity: between paper prototype and finished product</h3>
            <p className="card-description">
              Luas dan nyaman, meski belum berani kemana-mana karena kondisi pandemi, hanya menikmati kamar dan sarapan, pelayanannya ramah.
            </p>
            <div className="card-footer">
              <div className='lastline'>
                <span className="date">12 Jan 2024</span>
                <p  className="view-detail" onClick={() => setIsContactDetails(true)}>View detail</p>
              </div>
              <p  className="open-ticket">Open Ticket</p>
            </div>
          </div>
        </div>
      </div>)}
      </div>
  );
};

export default Customer;
