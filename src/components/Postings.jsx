import React, { useState } from "react";
import "../Styles/Postings.css";
import laptop from "../Assets/laptop.png";
import clothes from "../Assets/clothes.png";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineBlock } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
import { FaRegThumbsUp, FaAngleRight } from "react-icons/fa";
import arrow from "../Assets/arrow.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

const Postings = ({ onGoBack }) => {
  // const navigate = useNavigate();
  const [isViewDetails, setIsViewDetails] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false); // New state to show enquiry form
  const [selectedPost, setSelectedPost] = useState(null); // New state for the selected post
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category

  const handleToggle = () => {
    setShowMore((prevState) => !prevState);
  };

  const handleBack = () => {
    setIsViewDetails(false);
  };

  const handleEnquiryClick = () => {
    setShowEnquiryForm(true); // Show the enquiry form when button is clicked
  };

  const handleClose = () => {
    setShowEnquiryForm(false); // Hide the enquiry form when closed
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set selected category
  };

  const postData = [
        { 
          id: 1, 
          title: "Blueprint fidelity: between paper prototype and finished product", 
          description: "Luas dan nyaman meski belum berani kemana-mana karena kondisi pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.", 
          date: "12 Jan 2024", 
          views: 150, 
          status: "Approved", 
          statusColor: "#e0f7fa", 
          status1: "Promoted", 
          status1Color: "#28a745", 
          status2: "235", 
          status2Color: "#B25E09", 
          category: "Services" 
        },
        
        { 
          id: 2, 
          title: "Blueprint fidelity: between paper prototype and finished product", 
          description: "Luas dan nyaman meski belum berani kemana-mana karena kondisi pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.", 
          date: "12 Jan 2024", 
          views: 150, 
          status: "Rejected", 
          statusColor: "Red", 
          category: "Events" 
        },
    
        { 
          id: 3, 
          title: "Blueprint fidelity: between paper prototype and finished product", 
          description: "Luas dan nyaman meski belum berani kemana-mana karena kondisi pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.", 
          date: "12 Jan 2024", 
          views: 150, 
          status: "Suspended", 
          statusColor: "#FF8000", 
          status2: "235", 
          status2Color: "#B25E09", 
          category: "Events" 
        },
    
        { 
          id: 4, 
          title: "Blueprint fidelity: between paper prototype and finished product", 
          description: "Luas dan nyaman meski belum berani kemana-mana karena kondisi pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.", 
          date: "12 Jan 2024", 
          views: 150, 
          status: "Approved", 
          statusColor: "#00A9E8", 
          status1: "Expired", 
          status1Color: "orange", 
          status2: "235", 
          status2Color: "#B25E09", 
          category: "Products" 
        },
    
        { 
          id: 5, 
          title: "Advanced UI/UX Design Techniques", 
          description: "Learn advanced techniques for UI/UX design to enhance user experience and interface aesthetics.", 
          date: "01 Feb 2024", 
          views: 120, 
          status: "Approved", 
          statusColor: "#e0f7fa", 
          status1: "Featured", 
          status1Color: "#007bff", 
          status2: "300", 
          status2Color: "#FFC107", 
          category: "Services" 
        },
    
        { 
          id: 6, 
          title: "Tech Innovations 2024: What to Expect", 
          description: "Explore the latest technology innovations expected to shape the industry in 2024.", 
          date: "15 Feb 2024", 
          views: 200, 
          status: "Approved", 
          statusColor: "#e0f7fa", 
          status1: "Highlighted", 
          status1Color: "#28a745", 
          status2: "450", 
          status2Color: "#FF5722", 
          category: "News" 
        },
    
        { 
          id: 7, 
          title: "Networking Strategies for Professional Growth", 
          description: "Discover effective networking strategies to advance your career and build professional relationships.", 
          date: "22 Feb 2024", 
          views: 180, 
          status: "Suspended", 
          statusColor: "#FF8000", 
          status1: "New", 
          status1Color: "#17a2b8", 
          status2: "120", 
          status2Color: "#9C27B0", 
          category: "Events" 
        },
    
        { 
          id: 8, 
          title: "How to Host a Successful Online Auction", 
          description: "Step-by-step guide on organizing and executing a successful online auction.", 
          date: "05 Mar 2024", 
          views: 90, 
          status: "Rejected", 
          statusColor: "Red", 
          status1: "Expired", 
          status1Color: "gray", 
          status2: "75", 
          status2Color: "#E91E63", 
          category: "Auctions" 
        },
    
        { 
          id: 9, 
          title: "Top 10 Gadgets for 2024", 
          description: "A roundup of the top 10 gadgets to look out for in 2024, including their features and potential impact.", 
          date: "10 Mar 2024", 
          views: 350, 
          status: "Approved", 
          statusColor: "#e0f7fa", 
          status1: "Trending", 
          status1Color: "#FFC107", 
          status2: "500", 
          status2Color: "#009688", 
          category: "Products" 
        },
    
        { 
          id: 10, 
          title: "The Future of Virtual Reality", 
          description: "An in-depth look at the future of virtual reality technology and its potential applications.", 
          date: "20 Mar 2024", 
          views: 275, 
          status: "Approved", 
          statusColor: "#e0f7fa", 
          status1: "Promoted", 
          status1Color: "#007bff", 
          status2: "400", 
          status2Color: "#FFC107", 
          category: "News" 
        },
    
      ];

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? postData
      : postData.filter((post) => post.category === selectedCategory);

  // Handle the selection of a post and showing its details
  const handleViewDetails = (post) => {
    setSelectedPost(post); // Set the selected post
    setIsViewDetails(true); // Show the details view
  };

  return (
    <div style={{width:"100%"}}>
      <div className="masth">
        <div className="main-content">
          <div className="main-contt">
            <div className="posting-data">
              <h2>Postings</h2>
            </div>
            <div className="filters">
              <div className="filter-dataa">
                <div
                  className="filters-cont"
                  onClick={() => handleCategoryClick("Services")}
                >
                  Services
                </div>
                <div
                  className="filters-cont"
                  onClick={() => handleCategoryClick("Events")}
                >
                  Events
                </div>
                <div
                  className="filters-cont"
                  onClick={() => handleCategoryClick("News")}
                >
                  News
                </div>
                <div
                  className="filters-cont"
                  onClick={() => handleCategoryClick("Auctions")}
                >
                  Auctions
                </div>
                <div
                  className="filters-cont"
                  onClick={() => handleCategoryClick("Products")}
                >
                  Products
                </div>
              </div>
              <select>
                <option>Last 30 days</option>
                <option>Last 60 days</option>
              </select>
            </div>
          </div>

          {/* Show the enquiry form when the button is clicked */}
          {showEnquiryForm ? (
            <div className="contact-support-containers">
              <div className="cs-headers" onClick={handleClose}>
                <IoMdArrowBack className="cs-backs" />
                <label htmlFor="details" className="form-labels">
                  Customer Support
                </label>
              </div>
              <div className="form-groups">
                <label htmlFor="subject" className="form-labels">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-inputs"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="form-groups">
                <label htmlFor="details" className="form-labels">
                  Details
                </label>
                <textarea
                  id="details"
                  className="form-textareas"
                  rows="10"
                  placeholder="Enter Details here"
                />
              </div>
              <button className="pst-support-buttons">Save</button>
            </div>
          ) : isViewDetails && selectedPost ? (
            <div className="post-detail-container">
              <div className="back-nav">
                <FaArrowLeft onClick={onGoBack || handleBack} />
                <div className="back-b">Back</div>
              </div>
              <div className="post-card">
                <div className="post-left">
                  <img
                    src={laptop}
                    alt="Post Thumbnail"
                    className="post-thumbnail"
                  />
                </div>
                <div className="post-right">
                  <div className="post-header">
                    <div className="post-price">₹1,230</div>
                    <div className="post-statuses">
                      <span className="badge approved">
                        <AiFillSafetyCertificate className="status-icon" />
                        {selectedPost.status}
                      </span>
                      {selectedPost.status1 && (
                        <span className="badge promoted">
                          <TfiAnnouncement className="status-icon" />
                          {selectedPost.status1}
                        </span>
                      )}
                      {selectedPost.status2 && (
                        <span className="badge views">
                          <RiEyeFill className="status-icon" />
                          {selectedPost.status2} views
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="post-title">{selectedPost.title}</h3>
                  <p className="post-description">
                    {selectedPost.description}
                  </p>
                  {showMore && (
                    <div className="post-footers">
                      <div className="likeits">
                        <span className="likess">
                          <FaRegThumbsUp />
                          1235
                        </span>
                      </div>
                      <button className="enquiry-buttons" onClick={handleEnquiryClick}>
                        Request Enquiry
                      </button>
                    </div>
                  )}
                  <span className="read-more" onClick={handleToggle}>
                    {showMore ? "Read Less" : "Read More"}
                    <img src={arrow} alt="Arrow" />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="postings-list">
              {filteredPosts.map((post) => (
                <div key={post.id} className="posting-item">
                  <div className="posting-thumbnail">
                    <img src={clothes} alt="thumbnail" />
                  </div>
                  <div className="posting-info">
                    <h3>{post.title}</h3>
                    <div className="post-description">{post.description}</div>
                    <div className="post-cont">
                      <div className="post-views">
                        <div className="post-date">
                          {post.date} • {post.views} Views{" "}
                        </div>
                      </div>
                      <div className="view">
                        <div
                          className="detailss"
                          onClick={() => handleViewDetails(post)}
                        >
                          View details
                        </div>
                        <i className="fas fa-angle-right">
                          <FaAngleRight />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="posting-state">
                    <div className="post-status">
                      {post.status === "Approved" && (
                        <span className="status-badge approved">
                          <AiFillSafetyCertificate />
                          Approved
                        </span>
                      )}
                      {post.status === "Rejected" && (
                        <span className="status-badge rejected">
                          <IoMdCloseCircle />
                          Rejected
                        </span>
                      )}
                      {post.status === "Suspended" && (
                        <span className="status-badge suspended">
                          <MdOutlineBlock />
                          Suspended
                        </span>
                      )}
                    </div>
                    <div className="post-status">
                      {post.status1 === "Promoted" && (
                        <span className="status-badge promoted">
                          <TfiAnnouncement />
                          Promoted
                        </span>
                      )}
                      {post.status1 === "Expired" && (
                        <span className="status-badge expired">
                          <TfiAnnouncement />
                          Expired
                        </span>
                      )}
                    </div>
                    {post.status2 && (
                      <div className="post-views">
                        <span className="views-badge">
                          <RiEyeFill />
                          {post.status2} views
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Postings;