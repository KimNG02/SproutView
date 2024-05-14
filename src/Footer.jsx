import React from "react";
import "./styles/Footer.css";

const Footer = ({ timelinePage }) => {

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
          <p>We are team Gulsparv with equal enthusiasm for both </p>
          <p> planting and coding. We have decided to use our coding</p>
          <p> capabilities to help you in your planting journey. </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Site: <a href="https://gulsparv.site">gulsparv.site</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sprout View. Gulsparv Inc. All Rights Reserved.</p>
        <div className="credit">Credit:<a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons">Sprout icons created by Freepik - Flaticon</a></div>
      </div>
    </footer>
  );
};

export default Footer;
