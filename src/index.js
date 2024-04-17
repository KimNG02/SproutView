import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Options from './Options';

const Root = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleSelectedPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const handleConfirmPlanting = () => {
    setShowOptions(true);
  };

  return (
    <React.StrictMode>
      {showOptions ? <Options selectedPlant={selectedPlant}/> : <App onConfirmPlanting={handleConfirmPlanting} 
      onPlantChange={handleSelectedPlant}
      selectedPlant={selectedPlant}/>}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
