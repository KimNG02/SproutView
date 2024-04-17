import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Options from './Options';
import Timeline from './Timeline';

const Root = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [optionsPromise, setOptionsPromise] = useState(null);

  const handleSelectedPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const handleConfirmPlanting = () => {
    setShowOptions(true);
  };

  const handleConfirmOptions = (promise) => {
    setOptionsPromise(promise)
    setShowTimeline(true);
    setShowOptions(false);
  };

  return (
    <React.StrictMode>
      {showOptions ? (
        <Options onConfirmOptions={handleConfirmOptions()} 
        selectedPlant={selectedPlant}/>
      ) : showTimeline ? (
        <Timeline optionsPromise={optionsPromise}/>
      ) : (
        <App onConfirmPlanting={handleConfirmPlanting} 
        onPlantChange={handleSelectedPlant}
        selectedPlant={selectedPlant}/>
      )}
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
