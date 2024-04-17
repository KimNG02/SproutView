import React, { useState } from 'react';
import './App.css';
import strawberryImage from './Strawberry transparent.png';
import cactusImage from './Cactus 209133001.png';
import jalapenoImage from './Jalapeno Chili 3 Stk.png';
import ApiServiceHandler from './apiServiceHandler.js';

const App = ({ onConfirmPlanting, onPlantChange, selectedPlant }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleImageClick = (plantType) => {
    setModalOpen(true);
    onPlantChange(plantType)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onPlantChange(null);
  };

  const handleConfirmPlantingClick = () => {
    setModalOpen(false);
    onConfirmPlanting(); // Call the function passed from the parent component (Root)
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
            onClick={() => handleImageClick('Strawberry')}
          />
          <img 
            className="plantImage" 
            src={jalapenoImage} 
            alt="Jalapeno"
            onClick={() => handleImageClick('Jalapeno')}
          />
        
          <img 
            className="plantImage" 
            src={cactusImage} 
            alt="Cactus"
            onClick={() => handleImageClick('Cactus')}
          />
        </div>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Are you sure you want to plant a {selectedPlant}?</h2>
              <button onClick={handleConfirmPlantingClick}>Yes</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
