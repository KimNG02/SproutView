import React from "react";
import "./styles/Footer.css";

const Footer = ({ timelinePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let background;
  switch (timelinePage) {
    case "Healthy":
      background = "#E8F9DF"; // background color for Healthy page
      break;
    case "Risky":
      background = "#fcf8cd"; // background color for Risky page
      break;
    case "Dead":
      background = "#fbeaea"; // background color for Dead page
      break;
    default:
      background = "inherit"; // Default background color
      break;
  }

  return (
    <footer className="footer" style={{ background }}>
      <div className="footer-content">
        <div className="footer-column">
          <a href="#aboutus">
            <h3>About Us</h3>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
        <p>&copy; 2024 Sprout View. Gulsparv Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
