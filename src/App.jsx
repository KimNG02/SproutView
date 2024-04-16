import React from 'react';
import './App.css';
import strawberryImage from './Strawberry transparent.png';

function App() {
  const handleImageClick = () => {
    const confirmed = window.confirm("Are you sure you want to plant a Strawberry?");
    if (confirmed) {
      window.open('https://www.facebook.com/', '_blank');
    }
  };
  return (
    <div>
      <header className="logo">
        Sprout View 🪴    
      </header>
      <main>
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
            src={strawberryImage} 
            alt="Strawberry"
            onClick={handleImageClick}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
