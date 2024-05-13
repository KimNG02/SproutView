import React from "react";
import "./styles/Toolbar.css";
import icon from "./images/icon.png";

function Toolbar({ timelinePage }) {
  const backgroundColors = {
    Healthy: "#E8F9DF",
    Risky: "#fcf8cd",
    Dead: "#fbeaea",
    default: "inherit",
  };

  const background = backgroundColors[timelinePage] || backgroundColors.default;

  return (
    <div className="toolContainer" style={{ background }}>
      <div className="toolbar">
        <div className="tool-logo">
          <a href="/" className="lolo">
          <span className="sprout-view">
            <img className="tool-icon" alt="Toolbar icon" src={icon}></img>
          Sprout View</span>
          </a>
        </div>
        <div className="about">
          <a href="#aboutus" className="lolo">
            <span className="about-us">About us</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
