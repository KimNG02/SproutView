import React, { useState } from 'react';
import './styles/options.css';
import ApiServiceHandler from './apiServiceHandler.js';
import CountrySelector from './CountrySelector.js';

const Options = ({selectedPlant, handleOptionsObject}) => {

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const confirmOptionsCB = () => {
    handleOptionsObject(selectedPlant, sliderValue, "jord", "vatten", "ljus", "klimat"); // Call the function passed from the parent component
  };

  const handleCountrySelect = (country) => {
    console.log('Selected country:', country);
    // You can handle the selected country here, e.g., save it to state
  };

  return (
    <div className="options-container">
      <div className="font-container">
        <h1 className="topic">Environment Options</h1>
      </div>
      <div>
        <CountrySelector onSelect={handleCountrySelect} />
      </div>
      <div className="container">
        {/* Location Options */}
      <div className="options-section">
        <h2>Where do you live?</h2>
          <div className="input-container">
          <input type="text" id="country" name="country" placeholder="Enter your country" />
        </div>
      </div>


        <div className="options-section">
          <h2>How large is the initial pot size?</h2>
          <div className="radio-container">
            <input type="radio" id="xsmallpot" name="xPot" value="xsmall" />
            {/* Include other pot size radio inputs */}
          </div>
        </div>

        {/* Soil Type Options */}
        <div className="options-section">
          <h2>What type of soil are you planning to use for your plants?</h2>
          <div className="radio-container">
            <input type="radio" id="welldr" name="soilType" value="Well-draining Soil" />
            {/* Include other soil type radio inputs */}
          </div>
        </div>
      </div>

      {/* Watering Options */}
      <div className="options-section">
        <h2>Your watering habits</h2>
        <div>
          <label htmlFor="vatten"><b>How often are you able to water your plants?</b></label><br />
          <select name="Water" id="vatten">
            {/* Watering frequency options */}
          </select> <br />
          <label htmlFor="water1"><b>How much do you plan on watering your plant?</b></label><br />
          <input type="text" id="water1" name="water1" /> mL
        </div>
      </div>

      {/* Temperature Options */}
      <div className="options-section">
        <h2>What is the average temperature?</h2>
        <div className="slidecontainer">
          <input type="range" min="0" max="100" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
          <div className="slider-value">{sliderValue}</div>
          <p className="place">°C</p>
        </div>
      </div>

      {/* Seasonal Preferences */}
      <div className="options-section">
        <h2>Which season do you prefer for starting new plants?</h2>
        {/* Seasonal preference buttons */}
      </div>

      {/* Maintenance Options */}
      <div className="options-section">
        <h2>Maintenance</h2>
        <legend><b>How do you care for your plant?</b></legend>
        <div>
          <input type="checkbox" id="repotting" name="repotting" defaultChecked />
          <label htmlFor="repotting" className="tooltip">Repotting</label><br />
          {/* Include other maintenance options */}
        </div>
      </div>

      {/* Climate Zone Options */}
      <div className="options-section">
        <div className='confirm-zone'>
            <a href='#timeline'>
            <button onClick={confirmOptionsCB}>Confirm Options</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
