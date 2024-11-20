import React from 'react';
import '../Styles/enquirypopup.css';
import SDE2_icon from '../Assets/SDE2_incon.png'// Ensure the styles are linked

const Enquirypopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="epopup-card">
        <div className="epopup-header">
          <h3>Service Details</h3>
          <button className="epopup-close" onClick={onClose}>✕</button>
        </div>

        <div className="epopup-body">
          {/* Image at the top */}
          <img src={SDE2_icon} alt="Service" className="epopup-image" />

          {/* Content below the image */}
          <div className="epopup-content">
            {/* Price */}
            <h4 className="epopup-price">₹1,230</h4>

            {/* Title */}
            <h3 className="epopup-title">Blueprint fidelity: between paper prototype and finished product</h3>

            {/* Description */}
            <p className="epopup-description">
              Luas dan nyaman. Meski belum berani kemana-mana karena kondisi pandemi.
              Hanya menilmati kamar dan sarapan. Pelayanannya ramah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquirypopup;
