import React from 'react';

function MainView(props) {
    return (
    <nav>
        <div className="logo">
            Sprout View 🪴    
        </div>
        <div className="searchBarContainer">
            <input
            className="searchBar"
            type="text"
            placeholder="Search plants..."
            />
        </div>
        <div className="imageContainer">
            <img 
            className="plantImage" 
            src="./assets/Strawberry transparent.png" 
            alt="Strawberry"
            onclick="location.href='https://www.facebook.com/'"
            />
        </div>
        <div class="plantName" 
            onclick = "location.href = 'https://www.facebook.com/'">
            Strawberry
        </div>
    </nav>
    )
}