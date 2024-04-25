import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Options from './Options';
import Timeline from './Timeline';
import AboutUs from './AboutUs';
import Toolbar from './Toolbar';
import Healthy from './Healthy';
import Risky from './Risky';
import Dead from './Dead';
import Footer from './Footer';

// Define handleRouteChange outside the Root component
const handleRouteChange = () => {
  window.scrollTo(0, 0);
  console.log("route change");
};

const Root = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [timelinePage, setTimelinePage] = useState('');
  const [optionsObj, setOptionsObj] = useState({
    plant: '',
    season: '',
    potsize: '',
    soiltype: '',
    water: '',
    light: '',
  });

  const handleSelectedPlant = (plant) => {
    setSelectedPlant(plant);
  };

  const handleOptionsObject = (plant, season, potsize, soiltype, water, light) => {
    setOptionsObj({
      ...optionsObj,
      plant: plant,
      season: season,
      potsize: potsize,
      soiltype: soiltype,
      water: water,
      light: light,
    });
  };

  useEffect(() => {
    // Listen for hashchange event and call handleRouteChange
    window.addEventListener('hashchange', handleRouteChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <React.StrictMode>
      <Toolbar timelinePage={timelinePage} />
      <RouterProvider 
        onUpdate={handleRouteChange}
        router={makeRouter({
          selectedPlant,
          handleSelectedPlant,
          handleOptionsObject,
          optionsObj,
          timelinePage,
          setTimelinePage,
        })}
      />
      <Footer timelinePage={timelinePage} />
    </React.StrictMode>
  );
};

function makeRouter({ 
  selectedPlant, 
  handleSelectedPlant, 
  handleOptionsObject, 
  optionsObj, 
  timelinePage, 
  setTimelinePage, 
  }) {
  return createHashRouter([
    {
      path: '/',
      element: <App selectedPlant={selectedPlant} onPlantChange={handleSelectedPlant} />,
    },
    {
      path: '/options',
      element: <Options selectedPlant={selectedPlant} handleOptionsObject={handleOptionsObject} />,
    },
    {
      path: '/timeline',
      element: <Timeline optionsObj={optionsObj} timelinePage={timelinePage} setTimelinePage={setTimelinePage} />,
    },
    {
      path: '/aboutus',
      element: <AboutUs setTimelinePage={setTimelinePage} />,
    },
    {
      path: '/healthy',
      element: <Healthy />,
    },
    {
      path: '/risky',
      element: <Risky />,
    },
    {
      path: '/dead',
      element: <Dead />,
    },
  ]); // Removed extra parenthesis here
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
