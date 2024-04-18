import React, { useState } from 'react';
import './options.css';
import ApiServiceHandler from './apiServiceHandler.js';

const Options = ({ selectedPlant, onConfirmOptions }) => {
  const [showChoices, setShowChoices] = useState({
    summer: false,
    fall: false,
    winter: false,
    spring: false,
  });

  const [selectedChoices, setSelectedChoices] = useState({
    summer: null,
    fall: null,
    winter: null,
    spring: null,
  });

  const [sliderValue, setSliderValue] = useState(50);

  const handleButtonClick = (season) => {
    setShowChoices((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === season;
        return acc;
      }, {}),
    }));

    Object.keys(showChoices).forEach((key) => {
      if (key !== season) {
        setSelectedChoices((prevState) => ({
          ...prevState,
          [key]: null,
        }));
        setShowChoices((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
  };

  const handleChoiceClick = (season, choice) => {
    setSelectedChoices((prevState) => ({
      ...prevState,
      [season]: choice,
    }));
  };

  const handleReset = (season) => {
    setSelectedChoices((prevState) => ({
      ...prevState,
      [season]: null,
    }));
    setShowChoices((prevState) => ({
      ...prevState,
      [season]: false,
    }));
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const confirmOptionsCB = () => {
    handleOptionsObject(selectedPlant, "sommar", "jord", "vatten", "ljus", "klimat");
    onConfirmOptions(); 
  };

  async function handleOptionsObject() {
    await ApiServiceHandler.getTimeline(selectedPlant).then((result) => { 
      document.getElementById("test").innerHTML = result.data;
    }).catch((err) => {
      document.getElementById("test").innerHTML = err;
    });
  }

  return (
    <>
      <div>
        <div className="font-container">
          <p className="text">
            <header className="topic"> Environment options</header>
          </p>
        </div>

        <div class="image-container">
          <img
            src="https://www.pngmart.com/files/1/Wedding-Border-284x279.png"
            style={{ width: '400px' }}
          />
        </div>

        <div className="container">
          {/* Pot Size Options */}
          <div className="potsize">
            <p style={{ fontSize: "20px" }}><b>How large is the initial pot size?</b></p>
            <form>
              <div className="radio-container">
                <input type="radio" id="xsmallpot" name="xPot" value="xsmall" />
                {/* Include other pot size radio inputs */}
              </div>
            </form>
          </div>

          {/* Soil Type Options */}
          <div className="soiltype">
            <p style={{ fontSize: "20px" }}><b>What type of soil are you planning to use for your plants?</b></p>
            <form>
              <div className="radio-container">
                <input type="radio" id="welldr" name="soilType" value="Well-draining Soil" />
                {/* Include other soil type radio inputs */}
              </div>
            </form>
          </div>
        </div>

        {/* Watering Options */}
        <div className="water">
          {/* Watering frequency */}
          <p style={{ fontSize: "20px" }}><b>Your watering habits</b></p>
          <div>
            {/* Watering frequency and amount inputs */}
            <label htmlFor="vatten"><b>How often are you able to water your plants?</b></label><br />
            <select name="Water" id="vatten">
              <option value="1">3-4 times a day</option>
              <option value="2">2 times a day</option>
              <option value="3">Everyday</option>
              <option value="4">3-4 times a week</option>
              <option value="5">Once a week</option>
              <option value="6">3 to 4 times a month</option>
              <option value="7">Once a month</option>
              <option value="8">Once every few months</option>
              <option value="9">Never</option>
            </select> <br />
            <label htmlFor="water1"><b>How much do you plan on watering your plant?</b></label><br />
            <input type="text" id="water1" name="water1" /> mL 
          </div>

          {/* Temperature Options */}
          <div className="temp">
            <p style={{ fontSize: "20px" }}><b>What is the average temperature range in your area during the growing season?</b></p>
            <div className="slidecontainer">
              <input type="range" min="0" max="100" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
              <div className="slider-value">{sliderValue}</div>
              <p className="place">°C</p>
            </div>
          </div>

          {/* Seasonal Preferences */}
          <div className="Season">
            <p style={{ fontSize: "20px" }}><b>Which season do you prefer for starting new plants?</b></p>
            {/* Seasonal preference buttons */}
          </div>
        </div>

        {/* Maintenance Options */}
        <div className="Plant-care">
          <p style={{ fontSize: "20px" }}><b>Maintenance</b></p>
          <legend><b>How do you care for your plant?</b></legend>
          <div>
            <input type="checkbox" id="repotting" name="repotting" defaultChecked />
            <label htmlFor="repotting" className="tooltip">Repotting</label><br />
            <input type="checkbox" id="trimming" name="trimming" defaultChecked />
            <label htmlFor="trimming" className="tooltip">Trimming</label><br />
            <input type="checkbox" id="pruning" name="pruning" defaultChecked />
            <label htmlFor="pruning" className="tooltip">Pruning</label><br />
            <input type="checkbox" id="fertilizer" name="fertilizer" defaultChecked />
            <label htmlFor="fertilizer" className="tooltip">Fertilizer</label><br />
          </div>
        </div>

        {/* Climate Zone Options */}
        <div className="clim-zon">
          <div className="climate-zone">
            <div> What climate zone are you in?</div>
            <div className="climate">
              <input
                className="zone"
                type="text"
                place-holder="Climate zone..." />
              <div />

            </div>
            <div>
              <button onClick={confirmOptionsCB}>Confirm Options</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
