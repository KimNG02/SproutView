import React from "react";
import "./styles/Toolbar.css";
import icon from "./images/icon.png";

function Toolbar ({timelinePage}) {
  let background;
  switch (timelinePage) {
    case 'Healthy':
      background = '#E8F9DF'; // background color for Healthy page
      break;
    case 'Risky':
      background = '#fcf8cd'; // background color for Risky page
      break;
    case 'Dead':
      background = '#fbeaea'; // background color for Dead page
      break;
    default:
      background = 'inherit'; // Default background color
      break;
  }

    return(
        <div className="toolContainer" style={{background}}>
          <div className="toolbar">
            
          <div className="logo">
            <a href="/" className="lolo">
            <img className="icon" alt="icon" src={icon}></img>
            <span className="sprout-view">Sprout View</span>
            </a>
          </div>
          <div className="logo">
                <a href="#aboutus" className="lolo">
                <span className="about-us">About us</span>
                </a>
          </div>
          </div>

          </div>

    );
}

export default Toolbar;