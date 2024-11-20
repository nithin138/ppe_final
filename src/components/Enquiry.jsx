import React, { useState } from "react";
import '../Styles/Enquiry.css';
import { FaAngleRight } from "react-icons/fa";
import clothes from '../Assets/clothes.png';
import Enquirypopup from './enquirypopup'; // Import the Enquirypopup component

const Enquiry = () => {
  const [isBlurred, setIsBlurred] = useState(false); // State to manage blur
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false); // State to manage visibility of Enquirypopup
  const [activeCategory, setActiveCategory] = useState("Services"); // State to manage active category

  const postData = [
    // Services category (5 items)
    {
      id: 1,
      title: "Blueprint fidelity: between paper prototype and finished product",
      description: "Luas dan nyaman meski belum berani kemana-mana karena kondisi pandemi. Hanya menikmati kamar dan sarapan. Pelayanannya ramah.",
      date: "12 Jan 2024",
      views: 150,
      status: "Received",
      statusColor: "green",
      category: "Services"
    },
    {
      id: 2,
      title: "User-centered design: best practices and implementation",
      description: "Lokasi sangat strategis dekat dengan pusat perbelanjaan dan fasilitas yang memadai. Pengalaman yang menyenangkan.",
      date: "15 Feb 2024",
      views: 175,
      status: "In Progress",
      statusColor: "blue",
      category: "Services"
    },
    {
      id: 3,
      title: "Improving user interactions with prototypes",
      description: "Pelayanan yang cepat dan ramah, namun kamar agak kecil dibandingkan dengan hotel sekelasnya.",
      date: "22 Feb 2024",
      views: 120,
      status: "Pending",
      statusColor: "red",
      category: "Services"
    },
    {
      id: 4,
      title: "Enhancing product value with design",
      description: "Kenyamanan hotel ini membuat saya betah berlama-lama, dengan fasilitas kolam renang yang bersih dan luas.",
      date: "10 Mar 2024",
      views: 220,
      status: "Received",
      statusColor: "green",
      category: "Services"
    },
    {
      id: 5,
      title: "Design-driven product development",
      description: "Pengalaman menginap yang menyenangkan, tempatnya bersih, dan stafnya sangat ramah.",
      date: "01 Apr 2024",
      views: 250,
      status: "In Progress",
      statusColor: "blue",
      category: "Services"
    },

    // Events category (5 items)
    {
      id: 6,
      title: "User experience: refining interactive designs",
      description: "Menginap untuk kedua kalinya dan pelayanan tetap memuaskan. Lokasi sangat strategis dekat dengan pusat perbelanjaan.",
      date: "18 Feb 2024",
      views: 245,
      status: "Pending",
      statusColor: "red",
      category: "Events"
    },
    {
      id: 7,
      title: "Designing events for user engagement",
      description: "Acara berjalan lancar dengan dukungan tim yang profesional dan fasilitas yang mendukung.",
      date: "10 Mar 2024",
      views: 300,
      status: "Received",
      statusColor: "green",
      category: "Events"
    },
    {
      id: 8,
      title: "Interactive experiences: bridging gaps in event design",
      description: "Hotel sangat nyaman, cocok untuk penyelenggaraan event karena lokasi strategis dan fasilitasnya lengkap.",
      date: "25 Mar 2024",
      views: 190,
      status: "In Progress",
      statusColor: "blue",
      category: "Events"
    },
    {
      id: 9,
      title: "Engaging attendees through immersive designs",
      description: "Event yang diselenggarakan berlangsung dengan baik berkat tim yang solid dan fasilitas yang memadai.",
      date: "05 Apr 2024",
      views: 215,
      status: "Pending",
      statusColor: "red",
      category: "Events"
    },
    {
      id: 10,
      title: "Streamlining event workflows with prototypes",
      description: "Fasilitas dan staf mendukung dalam penyelenggaraan acara besar, hotel memiliki fasilitas yang luas dan nyaman.",
      date: "15 Apr 2024",
      views: 275,
      status: "Received",
      statusColor: "green",
      category: "Events"
    },

    // News category (5 items)
    {
      id: 11,
      title: "Visual design: optimizing for accessibility",
      description: "Menginap dalam rangka perjalanan bisnis, fasilitas dan lokasinya mendukung. Makanan cukup beragam dan enak.",
      date: "22 Apr 2024",
      views: 310,
      status: "In Progress",
      statusColor: "blue",
      category: "News"
    },
    {
      id: 12,
      title: "Making design news accessible to all users",
      description: "Lokasi yang sangat strategis, dan desain ruang hotel yang inovatif serta mudah diakses oleh semua kalangan.",
      date: "05 May 2024",
      views: 330,
      status: "Pending",
      statusColor: "red",
      category: "News"
    },
    {
      id: 13,
      title: "News design evolution: trends and challenges",
      description: "Desain hotel yang modern dan elegan, cocok untuk kunjungan bisnis maupun liburan.",
      date: "15 May 2024",
      views: 290,
      status: "Received",
      statusColor: "green",
      category: "News"
    },
    {
      id: 14,
      title: "News prototypes: faster iterations for better results",
      description: "Desain yang futuristik membuat hotel ini menarik untuk berbagai kebutuhan kunjungan.",
      date: "25 May 2024",
      views: 250,
      status: "In Progress",
      statusColor: "blue",
      category: "News"
    },
    {
      id: 15,
      title: "Improving news consumption with optimized design",
      description: "Hotel ini menawarkan pengalaman yang luar biasa dengan desain yang inovatif dan layanan prima.",
      date: "01 Jun 2024",
      views: 320,
      status: "Pending",
      statusColor: "red",
      category: "News"
    },

    // Auctions category (5 items)
    {
      id: 16,
      title: "From concept to implementation: aligning design with development",
      description: "Pengalaman yang menyenangkan, staf ramah, dan tempatnya bersih. Sayangnya kolam renang sedang direnovasi.",
      date: "10 May 2024",
      views: 200,
      status: "Pending",
      statusColor: "red",
      category: "Auctions"
    },
    {
      id: 17,
      title: "Auction design: how to attract more bidders",
      description: "Lelang berjalan lancar dengan desain antarmuka yang memudahkan pengguna.",
      date: "20 May 2024",
      views: 240,
      status: "In Progress",
      statusColor: "blue",
      category: "Auctions"
    },
    {
      id: 18,
      title: "Redesigning the auction experience for better engagement",
      description: "Hotel yang sangat nyaman dan cocok untuk acara lelang, fasilitas yang disediakan sangat lengkap.",
      date: "30 May 2024",
      views: 280,
      status: "Received",
      statusColor: "green",
      category: "Auctions"
    },
    {
      id: 19,
      title: "Prototyping auction platforms for scalability",
      description: "Sistem lelang yang sangat mudah digunakan dengan desain yang intuitif.",
      date: "05 Jun 2024",
      views: 210,
      status: "Pending",
      statusColor: "red",
      category: "Auctions"
    },
    {
      id: 20,
      title: "Enhancing auction platforms for better user experience",
      description: "Lelang berlangsung dengan baik, dan desain sistem yang membantu pengguna untuk memahami dengan cepat.",
      date: "15 Jun 2024",
      views: 265,
      status: "In Progress",
      statusColor: "blue",
      category: "Auctions"
    },

    // Products category (5 items)
    {
      id: 21,
      title: "Evaluating design systems for scalability",
      description: "Hotel nyaman, dekat dengan berbagai tempat wisata. Pelayanan sangat baik, fasilitas juga memadai.",
      date: "02 Jun 2024",
      views: 185,
      status: "Received",
      statusColor: "green",
      category: "Products"
    },
    {
      id: 22,
      title: "Scaling product design with modern tools",
      description: "Produk yang dijual sangat sesuai dengan deskripsi dan kualitas sangat baik.",
      date: "10 Jun 2024",
      views: 195,
      status: "In Progress",
      statusColor: "blue",
      category: "Products"
    },
    {
      id: 23,
      title: "Design thinking for innovative products",
      description: "Desain produk sangat menarik, dan sangat sesuai dengan kebutuhan pasar.",
      date: "15 Jun 2024",
      views: 175,
      status: "Pending",
      statusColor: "red",
      category: "Products"
    },
    {
      id: 24,
      title: "Innovating product design for better market fit",
      description: "Produk ini menawarkan inovasi baru yang sangat dibutuhkan oleh pasar saat ini.",
      date: "20 Jun 2024",
      views: 160,
      status: "Received",
      statusColor: "green",
      category: "Products"
    },
    {
      id: 25,
      title: "Optimizing product design for better usability",
      description: "Produk yang sangat user-friendly dan sesuai dengan tren saat ini.",
      date: "25 Jun 2024",
      views: 190,
      status: "In Progress",
      statusColor: "blue",
      category: "Products"
    }
  ];

  const handleViewDetails = () => {
    setIsBlurred(true); // Apply blur
    setShowEnquiryPopup(true); // Show Enquirypopup component
  };

  const handleClose = () => {
    setIsBlurred(false); // Remove blur
    setShowEnquiryPopup(false); // Hide Enquirypopup component
  };

  // Filter posts based on the selected category
  const filteredPosts = postData.filter(post => post.category === activeCategory);

  return (
    <div className={isBlurred ? 'blurred' : ''} style={{width:'100%'}}>
      <div className="emasth">
        <div className="emain-content">
          <div className="emain-cont">
            <div className="eposting-data">
              <h2>Enquiries</h2>
            </div>
            <div className="filters">
              <div className="filter-data">
                {/* Update activeCategory based on clicks */}
                <div
                  className={`filters-cont ${activeCategory === "Services" ? 'active' : ''}`}
                  onClick={() => setActiveCategory("Services")}
                >
                  Services
                </div>
                <div
                  className={`filters-cont ${activeCategory === "Events" ? 'active' : ''}`}
                  onClick={() => setActiveCategory("Events")}
                >
                  Events
                </div>
                <div
                  className={`filters-cont ${activeCategory === "News" ? 'active' : ''}`}
                  onClick={() => setActiveCategory("News")}
                >
                  News
                </div>
                <div
                  className={`filters-cont ${activeCategory === "Auctions" ? 'active' : ''}`}
                  onClick={() => setActiveCategory("Auctions")}
                >
                  Auctions
                </div>
                <div
                  className={`filters-cont ${activeCategory === "Products" ? 'active' : ''}`}
                  onClick={() => setActiveCategory("Products")}
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
          <div className="epostings-list">
            {filteredPosts.map((post) => (
              <div key={post.id} className="eposting-item">
                <div className="eposting-thumbnail">
                  <img src={clothes} alt="thumbnail" />
                </div>
                <div className="eposting-info">
                  <h3>{post.title}</h3>
                  <div className="epost-description">{post.description}</div>
                  <div className="epost-cont">
                    <div className="epost-views">
                      {post.date} • {post.views} views
                    </div>
                    <div className="eview" onClick={handleViewDetails}>
                      <div className="edetails">View details</div>
                      <FaAngleRight className="angle-right" />
                    </div>
                  </div>
                </div>
                <div className="eposting-state">
                  {post.status && (
                    <div className={`eposting-status ${post.status.toLowerCase()}`}>
                      <span className="estatus-text" style={{ color: post.statusColor }}>
                        {post.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Show Enquirypopup component when clicked */}
      {showEnquiryPopup && <Enquirypopup onClose={handleClose} />}
    </div>
  );
}
export default Enquiry;
  