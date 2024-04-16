import React from 'react';
import './App.css';
import strawberryImage from './Strawberry transparent.png';

function App() {
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
            onClick={() => window.location.href = 'https://www.facebook.com/'}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
