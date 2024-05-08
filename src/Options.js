import React, { useState } from "react";
import "./styles/options.css";
import ApiServiceHandler from "./apiServiceHandler.js";
import CountrySelector from "./CountrySelector.js";
import envPageImage from "./images/leavesmin.png";
import leavesImage from "./images/leaves.webp";
import plant from "./images/optimg.png";
import Toolbar from "./Toolbar.js";
import { useHref } from "react-router-dom";


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
  const [isChecked, setIsChecked] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [modalOpenPotSize, setModalOpenPotSize] = useState(false);
  const [modalOpenLight, setModalOpenLight] = useState(false);
  const [modalOpenPlantCare, setModalOpenPlantCare] = useState(false);
  const [modalOpenSoil, setModalOpenSoil] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setPlantCare((prevState) => [...prevState, name]);
    } else {
      setPlantCare((prevState) => prevState.filter((item) => item !== name));
    }
  };

  const handleDontKnowCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(!isChecked);
    if(checked) {
      setpH("");
    } else {
      setpH(7.0);
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

  const handleOpenModalSoil = () => {
    setModalOpenSoil(true);
  };

  const handleOpenModalPotSize = () => {
    setModalOpenPotSize(true);
  };

  const handleOpenModalLight = () => {
    setModalOpenLight(true);
  };

  const handleOpenModalPlantCare = () => {
    setModalOpenPlantCare(true);
  };

  const handleCloseModalPlantCare = () => {
    setModalOpenPlantCare(false);
  };

  const handleCloseModalPotSize = () => {
    setModalOpenPotSize(false);
  };

  const handleCloseModalLight = () => {
    setModalOpenLight(false);
  };

  const handleCloseModalSoil = () => {
    setModalOpenSoil(false);
  };

  const handleWaterFrequencyChange = (event) => {
    setWaterFrequency(event.target.value);
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setSeasonPart(null); // Reset season part when a new season is selected
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

    window.location.href = '/#timeline';
  };


  const handleLightClick = (light) => {
    setSelectedLight(light);
  };

  // const handleEmptyLight = (event) => {
  //   event.preventDefault();
  //   if(!selectedLight){
  //     setErrorMessage("You must fill in the light option");
  //   }else{
  //     setErrorMessage("");
  //   }
  // };

  const handleHumidityChange = (event) => {
    setHumidity(event.target.value);
  };


  return (
    <div className="options-container">
      <div className="font-container">
        <h1 className="topic">Select Environment Options</h1>
      </div>
      <form onSubmit={confirmOptionsCB}>
        <div className="square">
        {/* <div className='options-section'>
        <CountrySelector />
        </div> */}

        <div className="box2">
          {/*Season Options*/}
          <div className="options-section">
            <h2>During which season do you plan to plant?</h2>
            <div className="season-buttons">
              <button type="button"
                className={`season ${selectedSeason === "Spring" && "selected"}`}
                onClick={() => handleSeasonClick("Spring")}
                
              >
                Spring
              </button>
              <button type="button"
                className={`season ${selectedSeason === "Summer" && "selected"}`}
                onClick={() => handleSeasonClick("Summer")}
              >
                Summer
              </button>
              <button type="button"
                className={`season ${selectedSeason === "Autumn" && "selected"}`}
                onClick={() => handleSeasonClick("Autumn")}
              >
                Autumn
              </button>
              <button type="button"
                className={`season ${selectedSeason === "Winter" && "selected"}`}
                onClick={() => handleSeasonClick("Winter")}
              >
                Winter
              </button>
            </div>

            {selectedSeason && (
              <div className="secondary-buttons">
                 <button type="button"
                    className={`early-late ${seasonPart === "early" && "selected"}`}
                    onClick={() => handleSeasonPartClick("early")}
                >Early</button> 
                <button type="button"
                className={`early-late ${seasonPart === "late" && "selected"}`}
                onClick={() => handleSeasonPartClick("late")}
                >Late</button>
              </div>
            )}
          </div>
          {/* Pot Size Options */}
          <div className="options-section">
            <div class="sizeguide">
            <h2>How large is the pot you wish to plant in?*</h2>
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
              
              <section className="linked-font" onClick={handleOpenModalPotSize}>
                Size Guide
              </section>

              {modalOpenPotSize && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModalPotSize}>
                    &times;
                  </span>
                  <p>
                    <h2>Pot size guide (diameter ranges): <br /><br /></h2> 
                    X-small: 12-16 cm (1-2 Liter)<br />
                    Small: 17-20 cm (2-4 Liter)<br />
                    Medium:21-29 cm (4-10 Liter)<br />
                    Large: 30-39 cm (10-25 Liter)<br />
                    X-large: 40-50 cm (25-40 Liter)<br />
                  </p>
                </div>
              </div>
              )}
            </div>
          </div>

          {/*Light-level*/}

          <div className="options-section">
            <div className="light-options">
              <h2>
                {" "}
                How much light will the plant recieve over the course of the
                day?*
              </h2>
              <button type="button"
                className={`Fullsun ${selectedLight === "full sun" ? "chosen-color" : ""}`}
                onClick={() => handleLightClick("full sun")}
              >
                {" "}
                <div>
                  Full Sun
                </div>
                {" "}
              </button>
              <button type="button"
                className={`Partialsun ${selectedLight === "partial sun" ? "chosen-color" : ""}`}
                onClick={() => handleLightClick("partial sun")}
                required
              >
                {" "}
                <div>
                  Partial Sun
                </div>
                {" "}
              </button>
              <button type="button"
                className={`Shade ${selectedLight === "shade" ? "chosen-color" : ""}`}
                onClick={() => handleLightClick("shade")}
                required
              >
                {" "}
                <div>
                  Shade
                </div>
                {" "}
              </button>

              <a className="linked-font" onClick={handleOpenModalLight}>
                ?
              </a>
              
              {modalOpenLight && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModalLight}>
                    &times;
                  </span>
                  <p>
                    <h2>Sunlight amount description <br /><br /></h2> 
                    Full Sun: When your plant is in direct sunlight for most of the day. <br />
                    Partial Sun: When your plant is in a shaded area within an area that receives direct sunlight or when the light is direct only during certain times of the day.<br />
                    Shade: When your plant is in a shaded area with minimum sunlight. <br />
                  </p>
                </div>
              </div>
              )}
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
                  Repotting
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
                  Trimming
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
                  Pruning
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
                  Fertilizer
              </label>
              <br />
              {/* Add more checkboxes as needed */}
            </div>

            <a className="linked-font" onClick={handleOpenModalPlantCare}>
                Plant-care description
            </a>

              {modalOpenPlantCare && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModalPlantCare}>
                    &times;
                  </span>
                  <p>
                    <h2>Plant-care descriptions <br /><br /></h2> 
                    Repotting: Moving the plant from one pot to another. <br />
                    Trimming: Trimming typically involves cutting back plant material for reasons other than health concerns. <br />
                    Pruning: Pruning typically involves removing dead or diseased wood and thinning out stems and branches to improve the overall health and appearance of a plant. <br />
                    Fertilizer: Typically contains a combination of essential nutrients such as nitrogen, phosphorus, and pottasium.<br />
                  </p>
                </div>
              </div>
              )}
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
            <div className="soil-options">
              <h2>What type of soil do you plan to use?*</h2>

              <a className="linked-font" onClick={handleOpenModalSoil}>
                Soil type description
              </a>
              
              {modalOpenSoil && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModalSoil}>
                    &times;
                  </span>
                  <p>
                    <h2>Soil type description <br /><br /></h2> 
                    Well-draining: Such as Sandy soil, Sandy loam or Gravelly soil. Allows
                      water to enter the soil at a moderate rate without pooling
                      or puddling. <br />
                    Loamy Soil:  Such as sandy loam, silt loam, clay loam, and silty clay
                      loam. Provides good drainage and nutrient retention with a
                      balanced mix of sand, silt, and clay. <br />
                    Potting mix: Soil specifically formulated for container gardening,
                      typically consists of a blend of organic and inorganic
                      materials that promote good drainage, aeration, and nutrient
                      retention. Typically for houseplants, vegetables, and
                      annuals. <br />
                  </p>
                </div>
              </div>
              )}
              <div className="radio-container">
                <input
                  type="radio"
                  id="welldr"
                  name="soilType"
                  value="Well-draining Soil"
                  onChange={() => handleSoilTypeChange("well draining")}
                  required
                />
                <label htmlFor="welldr">
                    Well-draining{" "}
                  </label>
                <br />
                <input
                  type="radio"
                  id="loamy"
                  name="soilType"
                  value="Loamy soil"
                  onChange={() => handleSoilTypeChange("loamy soil")}
                  required
                />
                <label htmlFor="loamy">
                    Loamy soil
                </label>
                <br />
                <input
                  type="radio"
                  id="potting"
                  name="soilType"
                  value="Potting mix"
                  onChange={() => handleSoilTypeChange("potting mix")}
                  required
                />
                <label htmlFor="potting">
                    Potting mix
                </label>
                <br />
                {/* Include other soil type radio inputs */}
              </div>
            </div>
          </div>
          {/* Watering Options */}
          <div className="options-section">
            <h2>How often do you plan to water you plant?*</h2>
            <div>
              Every{" "}
              <input
                type="number"
                placeholder="0"
                id="water_freq"
                value={waterFrequency}
                onChange={handleWaterFrequencyChange}
                required
              ></input>{" "}
              day(s).
            </div>
          </div>

          {/* Temperature Options */}
          <div className="options-section">
            <h2>What is the average temperature where your plant will be?*</h2>
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
              <div className="slider-value">{sliderValue} °C</div>
              
            </div>
          </div>

          {/* pH Options */}
          <div className="options-section">
            <h2>What is the pH of your soil?</h2>
            <div id="ph">
              <button type="button" onClick={decrement}>&#8722;</button>
              <b>{pH}</b>
              <button type="button" onClick={increment}>&#43;</button>
              
              <span className="green-font">
              <label for="dont-know">
                <input
                  type="checkbox"
                  id="dont-know"
                  checked={isChecked}
                  onChange={handleDontKnowCheckboxChange}
                />
              Don't know</label>
            </span>
            </div>
          </div>
        </div>
        </div>

        <div className="confirm-wrapper">
          <div className="confirm-link-wrapper">
              <button type="submit">Generate</button>
              <div class="confirm-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                </svg>
              </div>
        </div>
      </div>
      </form>    
      <img id="plant" src="https://i.imgur.com/T9NhnBE.png" alt="plant"/>
    </div>
  );
};

export default Options;
