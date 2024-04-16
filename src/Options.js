import React, { useState } from 'react';
import './options.css'; // Import your CSS file

const Options = () => {
  const [temperature, setTemperature] = useState(50);
  const [waterFrequency, setWaterFrequency] = useState('');
  const [waterAmount, setWaterAmount] = useState('');
  const [lightCondition, setLightCondition] = useState('');
  
  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleWaterFrequencyChange = (event) => {
    setWaterFrequency(event.target.value);
  };

  const handleWaterAmountChange = (event) => {
    setWaterAmount(event.target.value);
  };

  const handleLightConditionChange = (event) => {
    setLightCondition(event.target.value);
  };

  const handleGenerate = () => {
    // Handle generate button click here
    // You can implement the functionality as per your requirements
    console.log("Generate button clicked");
  };

  return (
    <div>
      <div className="temp">
        <p style={{ fontSize: "20px" }}>
          <b>Temperature</b>
        </p>
        <input type="range" min="0" max="100" value={temperature} onChange={handleTemperatureChange} className="slider" id="temperatureRange" />
        <div className="slider-value">{temperature}</div>
      </div>

      <div className="soiltype">
        <p style={{ fontSize: "20px" }}>
          <b>Soil Type</b>
        </p>
        <form>
          <div className="radio-container">
            <input type="radio" id="welldr" name="soilType" value="Well-draining Soil" />
            <label htmlFor="welldr" className="tooltip">Well-draining Soil
              <span className="tooltiptext">Such as Sandy soil, Sandy loam or Gravelly soil. Allows water to enter the soil at a moderate rate without pooling or puddling.</span>
            </label>

            {/* Add other radio inputs here */}

          </div>
        </form>
      </div>

      <div>
        <div className="water">
          <p style={{ fontSize: "20px" }}>
            <b>Watering</b>
          </p>
          <label htmlFor="waterFrequency"><b>How often do you water your plant?</b></label>
          <select name="waterFrequency" id="waterFrequency" value={waterFrequency} onChange={handleWaterFrequencyChange}>
            <option value="">Select Frequency</option>
            <option value="Never">Never</option>
            {/* Add other frequency options */}
          </select>

          <label htmlFor="waterAmount"><b>How much do you water your plant?</b></label>
          <select name="waterAmount" id="waterAmount" value={waterAmount} onChange={handleWaterAmountChange}>
            <option value="">Select Amount</option>
            <option value="1">1</option>
            {/* Add other amount options */}
          </select>
        </div>

        <div className="light">
          <p style={{ fontSize: "20px" }}>
            <b>Light</b>
          </p>
          <div className="radio-container">
            <input type="radio" id="fullSun" name="lightCondition" value="Full Sun" onChange={handleLightConditionChange} />
            <label htmlFor="fullSun" className="tooltip">Full sun
              <span className="tooltiptext">When your plant is in direct sunlight for most of the day.</span>
            </label>
            {/* Add other light condition radio inputs here */}
          </div>
        </div>
      </div>

      <button onClick={handleGenerate}><b>Generate</b></button>
    </div>
  );
}

export default Options;
