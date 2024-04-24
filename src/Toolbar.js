import React from "react";
import "./styles/Toolbar.css";
import icon from "./images/icon.png";

function Toolbar () {
    return(
        <div className="toolContainer">
          <div className="toolbar">
            
          <div className="logo">
            <a href="/" className="lolo">
            <img className="icon" alt="icon" src={icon}></img>
            <span class = "sprout-view">Sprout View</span>
            </a>
          </div>
          <div className="logoo">
                <a href="#aboutus" className="toolbar-button">
                <span class = "about-us">About us</span>
              </a>
          </div>
          </div>

          </div>

    );
}

export default Toolbar;