import React from 'react';
import './Options.css';

const Options = () => {
  return (
    <div>
      <div className="temp">
        <p style={{ fontSize: "20px" }}><b>Temperature</b></p>
        <div className="slidecontainer">
          <input type="range" min="0" max="100" value="50" className="slider" id="myRange" />
          <div className="slider-value"></div>
          <p className="place">°C</p>
        </div>
      </div>

      <div className="soiltype">
        <p style={{ fontSize: "20px" }}><b>Soil Type</b></p>
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

      <div className="checkbox">
        <div className="indoor">
          <label htmlFor="indoor">
            <p style={{ fontSize: "20px" }}><b>Indoor</b></p>
          </label>
        </div>
        <div className="radio1">
          <input type="radio" id="radio1" name="location" value="indoor" className="radio" />
        </div>
      </div>

      <div className="checkbox">
        <div className="outdoor">
          <label htmlFor="outdoor">
            <p style={{ fontSize: "20px" }}><b>Outdoor</b></p>
          </label>
        </div>
        <div className="radio2">
          <input type="radio" id="radio" name="location" value="outdoor" className="radio" />
        </div>
      </div>

      <div className="water">
        <p style={{ fontSize: "20px" }}><b>Watering</b></p>
        <label htmlFor="water2"><b>How often will you water your plant?</b></label><br />
        <select name="Water" id="vatten">
          <option value="1">Never</option>
          <option value="2">Once per day</option>
          <option value="3">3 to 4 times a week</option>
          <option value="4">Everyday</option>
        </select>

        <label htmlFor="water1"><b>How much will you water your plant?</b></label><br />
        <select name="Water" id="vatten">
          <option value="1">1 gallon blabla</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="biggerlight">
        <div className="light">
          <p style={{ fontSize: "20px" }}><b>Light</b></p>
          <div>
            <input type="radio" id="light1" name="light" value="Full Sun" />
            <label htmlFor="light1" className="tooltip">Full sun
              <span className="tooltiptext">When your plant is in direct sunlight for most of the day.</span>
            </label>
            {/* Add other light condition radio inputs here */}
          </div>
        </div>
      </div>

      <div className="Season">
        <p style={{ fontSize: "20px" }}><b>Season</b></p>
        <img src="https://th.bing.com/th/id/OIP.b2odx_EHtvvlLXSNZGMzrAHaEK?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Season" />
        <form>
          <input type="checkbox" id="spring" name="fav_language" value="Spring" />
          <label htmlFor="spring" className="tooltip">Spring
            <span className="tooltiptext">banan</span>
          </label><br />
          {/* Add other season checkboxes here */}
        </form>
      </div>

      <label htmlFor="climate" className="tooltip"><b>Which climate do you live in?</b>
        <span className="tooltiptext">
          <p>Tropical zone characteristics: hot, high humidity, minimal seasonal variation, heavy rainfall, high precipitation, average temperatures are greater than 18°C (64°F) year-round, dense vegetation.</p>
          <p>Dry. Characteristics: dry, low humidity, minimal rainfall, little precipitation, wide temperature variations between day and night.</p>
          {/* Add other climate options */}
        </span>
      </label>
      <select name="climate" id="climate">
        <option value="1"></option>
        <option value="2">Dry</option>
        <option value="3">Temperate</option>
        <option value="4">Continental</option>
        <option value="5">Polar</option>
      </select>

      <div className="maintenance">
        <p style={{ fontSize: "20px" }}><b>Maintenance</b></p>
        <fieldset>
          <legend><b>How do you care for your plant?</b></legend>
          <div>
            <input type="checkbox" id="scales" name="scales" defaultChecked />
            <label htmlFor="scales">Scales</label>
          </div>
          {/* Add other maintenance checkboxes here */}
        </fieldset>
      </div>
    </div>
  );
};

export default Options;
