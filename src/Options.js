import React, { useState } from 'react';
import './styles/options.css';
import ApiServiceHandler from './apiServiceHandler.js';
import CountrySelector from './CountrySelector.js';
import envPageImage from "./images/envimg.png";
import Toolbar from './Toolbar.js';


const Options = ({selectedPlant, handleOptionsObject}) => {

  const [sliderValue, setSliderValue] = useState(22.5);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [seasonPart, setSeasonPart] = useState('');
  const [potSize, setPotSize] = useState('');
  const [selectedLight, setSelectedLight] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterFrequency, setWaterFrequency] = useState('');
  const [pH, setpH] = useState(7);

  function increment() {
    setpH(function (prevCount) {
      if (prevCount === 14) {
        return (prevCount = 0); 
      } else 
      return (prevCount += 0.5);
    });
  }

  function decrement() {
    setpH(function (prevCount) {
      if (prevCount === 0) {
        return (prevCount = 14); 
      } else {
        return (prevCount -= 0.5);
      }
    });
  }

  const handleWaterClick = (waterfreq) => {
    setWaterFrequency(waterfreq);
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setSeasonPart(''); // Reset season part when a new season is selected
  };

  const handleSeasonPartClick = (part) => {
    setSeasonPart(part);
  };

  const handleSoilTypeChange = (soilType) => {
    setSoilType(soilType);
  }

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const confirmOptionsCB = () => {
    try {
      const fullSeason = `${seasonPart} ${selectedSeason}`.toLowerCase();
      console.log(selectedPlant);
      console.log(fullSeason);
      console.log(potSize);
      console.log(selectedLight);
      const plant = selectedPlant.toLowerCase();
      handleOptionsObject(plant, fullSeason, potSize, soilType, waterFrequency, selectedLight); // Call the function passed from the parent component
    } catch (error) {
      console.error(error);
    }
  };

  const handleLightClick = (light) => {
    setSelectedLight(light);
  };

  console.log("Selected Light " + selectedLight);


  return (

    <div className="options-container">
      <div className="font-container">
        <h1 className="topic">Select Environment Options</h1>
      </div>
      <div className="square">

      {/*<div className="image-section">
        <img src={envPageImage} alt="plant pot" className="envimage" />*/}

      <div className='options-section'>
        <CountrySelector />
      </div>

      {/*Season Options*/}
      <div className='options-section'>
      <h2>During which season do you plan to plant?</h2>
      <button className='Spring' onClick={() => handleSeasonClick('Spring')}>Spring</button>
      <button className='Summer' onClick={() => handleSeasonClick('Summer')}>Summer</button>
      <button className='Autumn' onClick={() => handleSeasonClick('Autumn')}>Autumn</button>
      <button className='Winter' onClick={() => handleSeasonClick('Winter')}>Winter</button>

      {selectedSeason && (
        <div className="secondary-buttons">
          <button onClick={() => handleSeasonPartClick('Early')}>Early</button>
          <button className='Late' onClick={() => handleSeasonPartClick('Late')}>Late</button>
        </div>
      )}

      {/* {(selectedSeason && seasonPart) && (
        <button className='confirm-button' onClick={confirmOptionsCB}>Confirm Season</button>
      )} */}
    </div>

    {/* Pot Size Options */}
    <div className="container">
      <div className="options-section">
        <h2>How large is the pot you wish to plant in?</h2>
        <select 
          value={potSize} 
          onChange={e => setPotSize(e.target.value)}
          className="potSize-dropdown">
          <option value="">Select pot size</option>
          <option value="xsmall">X-Small</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">X-Large</option>
        </select>
      </div>

        {/* Soil Type Options */}
        <div className="options-section">
          <h2>What type of soil do you plan to use?</h2>
          <div className="radio-container">
            <input type="radio" id="welldr" name="soilType" value="Well-draining Soil" 
            onChange={() => handleSoilTypeChange("well-draining")}/>
            <label htmlFor="welldr">
              <div className="tooltip">Well-draining <span class="tooltiptext">
                Such as Sandy soil, Sandy loam or Gravelly soil. Allows water to enter the soil at a moderate rate without pooling or puddling.</span>
              </div>
            </label><br/>
            <input type="radio" id="loamy" name="soilType" value="Loamy soil" 
            onChange={() => handleSoilTypeChange("loamy soil")}/>
            <label htmlFor="loamy">
              <div className="tooltip">Loamy soil<span class="tooltiptext">
                Such as sandy loam, silt loam, clay loam, and silty clay loam. Provides good drainage and nutrient retention with a balanced mix of sand, silt, and clay.</span>
              </div>
            </label><br />
            <input type="radio" id="potting" name="soilType" value="Potting mix" 
            onChange={() => handleSoilTypeChange("potting mix")}/>
            <label htmlFor="potting">
              <div className="tooltip">Potting mix<span class="tooltiptext">
                Soil specifically formulated for container gardening, typically consists of a blend of organic and inorganic 
                materials that promote good drainage, aeration, and nutrient retention. Typically for houseplants, vegetables, and annuals.</span>
              </div>
            </label><br />
            {/* Include other soil type radio inputs */}
          </div>
        </div>
      </div>

      <div class='box2'>
      {/* Watering Options */}
      <div className="options-section">
        <h2>How often do you plan to water you plant?</h2>
        <div>
          Every <input placeholder='0'></input> day(s).
        </div>
      </div>

      {/* Temperature Options */}
      <div className="options-section">
        <h2>What is the average temperature where your plant will be?</h2>
        <div className="slidecontainer">
          <input type="range" min="5" max="40" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
          <div className="slider-value">{sliderValue} </div>
          <p className="place">°C</p>
        </div>
      </div>

      </div>
      {/*Light-level*/}
      <div className="options-section">
        <div className='light-options'> 
          <h2> How much light will the plant recieve over the course of the day?</h2>
          <button className ="Full-sun" onClick= {() => handleLightClick('full sun')}> Full sun </button>
          <button className ='Partial sun' onClick={() => handleLightClick('partial sun')}> Partial sun </button>
          <button className ='Shade' onClick={() => handleLightClick('shade')}> Shade </button>
        </div>
      </div>
        
      {/* pH Options */}
      <div className="options-section">
      <h2>What is the pH of your soil?</h2>
      <div id="ph">
        <button onClick={increment}>&#43;</button>
        <legend><b>{pH}</b></legend>
        <button onClick={decrement}>&#8722;</button>
      </div>
      </div>

      {/* Plant-care Options */}
      <div className="options-section">
        <h2>How are you willing to care for your plant?</h2>
        <div>
          <input type="checkbox" id="repotting" name="repotting"  />
          <label htmlFor="repotting">
            <div className="tooltip">Repotting <span class="tooltiptext">
                Moving a plant from one pot to another.</span>
            </div>
          </label><br />
          <input type="checkbox" id="trimming" name="trimming"  />
          <label htmlFor="trimming">
            <div className="tooltip">Trimming <span class="tooltiptext">
              Trimming typically involves cutting back plant material for reasons other than health concerns.</span>
            </div>
          </label><br />
          <input type="checkbox" id="pruning" name="pruning"  />
          <label htmlFor="pruning">
            <div className="tooltip">Pruning <span class="tooltiptext">
              Pruning typically involves removing dead or diseased wood and thinning out stems and branches to improve the overall health and appearance of a plant.</span>
            </div></label><br />
          <input type="checkbox" id="fertilizer" name="fertilizer"  />
          <label htmlFor="fertilizer">
            <div className="tooltip">Fertilizer <span class="tooltiptext">
              Typically contains a combination of essential nutrients such as nitrogen, phosphorus, and pottasium.</span>
            </div>
          </label><br />
          {/* Include other maintenance options */}
        </div>
      </div>


      {/* Humidity Options */}
      <div className="options-section">
      <h2>What is the room humidity?</h2>
          <input placeholder='%' ></input>
      </div>

      <div className="options-section">
        <div className='confirm-zone'>
            <a href='#timeline'>
            <button onClick={confirmOptionsCB}>Generate</button>
            </a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Options;
