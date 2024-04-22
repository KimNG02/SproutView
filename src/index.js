import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';
import App from './App';
import Options from './Options';
import Timeline from './Timeline';
import AboutUs from './AboutUs';
import UndefinedTest from './UndefinedTest';

const Root = () => {
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
    //console.log(JSON.stringify(optionsObj));
    //console.log(optionsObj.plant, optionsObj.climate);
  };

  return (
    <React.StrictMode>
        <RouterProvider router={makeRouter({
          selectedPlant, handleSelectedPlant, 
          handleOptionsObject, optionsObj})}/>
    </React.StrictMode>
  );
};
function makeRouter 
({selectedPlant, handleSelectedPlant, handleOptionsObject, optionsObj}) {
  return createHashRouter([
    {
      path: "/",
      element: <App 
      selectedPlant={selectedPlant} 
      onPlantChange={handleSelectedPlant}/>
    },
    {
      path: "/options",
      element: <Options selectedPlant={selectedPlant} handleOptionsObject={handleOptionsObject} />
    },
    {
      path: "/timeline",
      element: <Timeline optionsObj={optionsObj}/>
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/undefinedtest",
      element: <UndefinedTest optionsObj={optionsObj}/>
    }
  ])
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
