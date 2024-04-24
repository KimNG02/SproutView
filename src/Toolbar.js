import React from "react";

function Toolbar () {
    return(
        <div className="toolbar">
      <div className="logo">
        {/* Your logo component or image */}
        <span>Sprout View 🪴</span>
        <a href="/">
        <button>Home</button>
        </a>
      </div>
    </div>
    );
}

export default Toolbar;