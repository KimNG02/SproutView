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
  const [optionsObj, setOptionsObj] = useState({
    plant: "",
    season: "",
    soiltype: "",
    water: "",
    light: "",
    climate: ""
  });

  const handleSelectedPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const handleConfirmPlanting = () => {
    setShowOptions(true);
  };

  const handleConfirmOptions = () => {
    setShowTimeline(true);
    setShowOptions(false);
  };

  const handleOptionsObject = (plant, season, soiltype, water, light, climate) => {
    setOptionsObj(({
      ...optionsObj,
      plant: plant,
      season: season,
      soiltype: soiltype,
      water: water,
      light: light,
      climate: climate}
    ));
    console.log(JSON.stringify(optionsObj));
    console.log(optionsObj.plant, optionsObj.climate);
  };

  return (
    <React.StrictMode>
      {showOptions ? (
        <Options onConfirmOptions={handleConfirmOptions} 
        selectedPlant={selectedPlant} 
        handleOptionsObject={handleOptionsObject}/>
      ) : showTimeline ? (
        <Timeline optionsObj={optionsObj}/>
      ) : (
        <App onConfirmPlanting={handleConfirmPlanting} 
        onPlantChange={handleSelectedPlant}
        selectedPlant={selectedPlant}
        />
      )}
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
