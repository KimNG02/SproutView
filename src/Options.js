import React, { useState } from "react";
import "./styles/options.css";
import ApiServiceHandler from "./apiServiceHandler.js";
import CountrySelector from "./CountrySelector.js";
import envPageImage from "./images/leavesmin.png";
import leavesImage from "./images/leaves.webp";

import Toolbar from "./Toolbar.js";

const Options = ({ selectedPlant, handleOptionsObject }) => {
  const [sliderValue, setSliderValue] = useState(20);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [seasonPart, setSeasonPart] = useState("");
  const [potSize, setPotSize] = useState("");
  const [selectedLight, setSelectedLight] = useState("");
  const [soilType, setSoilType] = useState("");
  const [waterFrequency, setWaterFrequency] = useState("");
  const [pH, setpH] = useState(7.0);
  const [humidity, setHumidity] = useState("");
  const [plantCare, setPlantCare] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setPlantCare((prevState) => [...prevState, name]);
    } else {
      setPlantCare((prevState) => prevState.filter((item) => item !== name));
    }
  };

  function increment() {
    setpH(function (prevCount) {
      if (prevCount === 14) {
        return (prevCount = 0);
      } else return (prevCount += 0.5);
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

  const handleWaterFrequencyChange = (event) => {
    setWaterFrequency(event.target.value);
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setSeasonPart(""); // Reset season part when a new season is selected
  };

  const handleSeasonPartClick = (part) => {
    setSeasonPart(part);
  };

  const handleSoilTypeChange = (soilType) => {
    setSoilType(soilType);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  /* Options, stored in OptionsObj */
  /* plant, light, water, soil, temp, potSize, plantCare, humidity, pH */
  const confirmOptionsCB = () => {
    try {
      const plant = selectedPlant.toLowerCase();
      const waterFreq = waterFrequency * 24;
      handleOptionsObject(
        plant,
        selectedLight,
        waterFreq,
        soilType,
        sliderValue,
        potSize,
        plantCare,
        humidity,
        pH,
      ); // Call the function passed from the parent component
    } catch (error) {
      console.error(error);
    }
  };

  const handleLightClick = (light) => {
    setSelectedLight(light);
  };

  const handleHumidityChange = (event) => {
    setHumidity(event.target.value);
  };

  return (
    <div className="options-container">
      <div className="font-container">
        <h1 className="topic">Select Environment Options</h1>
      </div>
      <div className="square">
        <div className="image-section">
          <img src={envPageImage} alt="plant pot" className="envimage" />
        </div>
        {/* <div className='options-section'>
        <CountrySelector />
      </div> */}

        <div className="box2">
          {/*Season Options*/}
          <div className="options-section">
            <h2>During which season do you plan to plant?</h2>
            <div className="season-buttons">
              <button
                className="season"
                onClick={() => handleSeasonClick("Spring")}
              >
                Spring
              </button>
              <button
                className="season"
                onClick={() => handleSeasonClick("Summer")}
              >
                Summer
              </button>
              <button
                className="season"
                onClick={() => handleSeasonClick("Autumn")}
              >
                Autumn
              </button>
              <button
                className="season"
                onClick={() => handleSeasonClick("Winter")}
              >
                Winter
              </button>
            </div>

            {selectedSeason && (
              <div className="secondary-buttons">
                <button>Early</button>
                <button className="Late">Late</button>
              </div>
            )}
          </div>
          {/* Pot Size Options */}
          <div className="options-section">
            <h2>How large is the pot you wish to plant in?</h2>
            <select
              value={potSize}
              onChange={(e) => setPotSize(e.target.value)}
              className="potSize-dropdown"
            >
              <option value="any">Select pot size</option>
              <option value="extra small">X-Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra large">X-Large</option>
            </select>
          </div>

          {/*Light-level*/}
          <div className="options-section">
            <div className="light-options">
              <h2>
                {" "}
                How much light will the plant recieve over the course of the
                day?
              </h2>
              <button
                className="Full-sun"
                onClick={() => handleLightClick("full sun")}
              >
                {" "}
                <div className="tooltip">
                  Full Sun
                  <span class="tooltiptext">
                    When your plant is in direct sunlight for most of the day.
                  </span>
                </div>
                {" "}
              </button>
              <button
                className="Partial sun"
                onClick={() => handleLightClick("partial sun")}
              >
                {" "}
                <div className="tooltip">
                  Partial Sun
                  <span class="tooltiptext">
                  When your plant is in a shaded area within an area that receives direct sunlight or when the light is direct only during certain times of the day.
                  </span>
                </div>
                {" "}
              </button>
              <button
                className="Shade"
                onClick={() => handleLightClick("shade")}
              >
                {" "}
                <div className="tooltip">
                  Shade
                  <span class="tooltiptext">
                    When your plant is in a shaded area with minimum sunlight.
                    </span>
                </div>
                {" "}
              </button>
            </div>
          </div>

          {/* Plant-care Options */}
          <div className="options-section">
            <h2>How are you willing to care for your plant?</h2>
            <div>
              <input
                type="checkbox"
                id="repotting"
                name="repotting"
                checked={plantCare.includes("repotting")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="repotting">
                <div className="tooltip">
                  Repotting
                  <span class="tooltiptext">
                    Moving the plant from one pot to another.
                  </span>
                </div>
                </label>
              <br />

              <input
                type="checkbox"
                id="trimming"
                name="trimming"
                checked={plantCare.includes("trimming")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="trimming">
              <div className="tooltip">
                  Trimming
                  <span class="tooltiptext">
                  Trimming typically involves cutting back plant material for reasons other than health concerns.                  </span>
                </div>
              </label>
              <br />

              <input
                type="checkbox"
                id="pruning"
                name="pruning"
                checked={plantCare.includes("pruning")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="pruning">
                <div className="tooltip">
                  Pruning
                  <span class="tooltiptext">
                    Pruning typically involves removing dead or diseased wood and thinning out stems and branches to improve the overall health and appearance of a plant.
                  </span>
                </div>
              </label>
              <br />

              <input
                type="checkbox"
                id="fertilizer"
                name="fertilizer"
                checked={plantCare.includes("fertilizer")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="fertilizer">
              <div className="tooltip">
                  Fertilizer
                  <span class="tooltiptext">
                    Typically contains a combination of essential nutrients such as nitrogen, phosphorus, and pottasium.
                  </span>
                </div>
              </label>
              <br />
              {/* Add more checkboxes as needed */}
            </div>
          </div>
          {/* Humidity Options */}
          <div className="options-section">
            <h2>What is the room humidity?</h2>
            <input
              placeholder="%"
              value={humidity}
              onChange={handleHumidityChange}
            />
          </div>
        </div>
        <div className="box2">
          {/* Soil Type Options */}
          <div className="options-section">
            <h2>What type of soil do you plan to use?</h2>
            <div className="radio-container">
              <input
                type="radio"
                id="welldr"
                name="soilType"
                value="Well-draining Soil"
                onChange={() => handleSoilTypeChange("well draining")}
              />
              <label htmlFor="welldr">
                <div className="tooltip">
                  Well-draining{" "}
                  <span class="tooltiptext">
                    Such as Sandy soil, Sandy loam or Gravelly soil. Allows
                    water to enter the soil at a moderate rate without pooling
                    or puddling.
                  </span>
                </div>
              </label>
              <br />
              <input
                type="radio"
                id="loamy"
                name="soilType"
                value="Loamy soil"
                onChange={() => handleSoilTypeChange("loamy soil")}
              />
              <label htmlFor="loamy">
                <div className="tooltip">
                  Loamy soil
                  <span class="tooltiptext">
                    Such as sandy loam, silt loam, clay loam, and silty clay
                    loam. Provides good drainage and nutrient retention with a
                    balanced mix of sand, silt, and clay.
                  </span>
                </div>
              </label>
              <br />
              <input
                type="radio"
                id="potting"
                name="soilType"
                value="Potting mix"
                onChange={() => handleSoilTypeChange("potting mix")}
              />
              <label htmlFor="potting">
                <div className="tooltip">
                  Potting mix
                  <span class="tooltiptext">
                    Soil specifically formulated for container gardening,
                    typically consists of a blend of organic and inorganic
                    materials that promote good drainage, aeration, and nutrient
                    retention. Typically for houseplants, vegetables, and
                    annuals.
                  </span>
                </div>
              </label>
              <br />
              {/* Include other soil type radio inputs */}
            </div>
          </div>
          {/* Watering Options */}
          <div className="options-section">
            <h2>How often do you plan to water you plant?</h2>
            <div>
              Every{" "}
              <input
                placeholder="0"
                id="water_freq"
                value={waterFrequency}
                onChange={handleWaterFrequencyChange}
              ></input>{" "}
              day(s).
            </div>
          </div>

          {/* Temperature Options */}
          <div className="options-section">
            <h2>What is the average temperature where your plant will be?</h2>
            <div className="slidecontainer">
              <input
                type="range"
                min="10"
                max="30"
                value={sliderValue}
                className="slider"
                id="myRange"
                onChange={handleSliderChange}
              />
              <div className="slider-value">{sliderValue} </div>
              <p className="place">°C</p>
            </div>
          </div>

          {/* pH Options */}
          <div className="options-section">
            <h2>What is the pH of your soil?</h2>
            <div id="ph">
              <button onClick={decrement}>&#8722;</button>
              <b>{pH}</b>
              <button onClick={increment}>&#43;</button>
            </div>
          </div>
        </div>
        
        <div className="image-section">
          <img src={leavesImage} alt="plant pot" className="leavesimage" />
        </div>
      </div>

      <div>
        <div className="confirm-zone">
          <a href="#timeline">
            <div className="options-section"> 
            <button className="button" onClick={confirmOptionsCB}>
              Generate
            </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
