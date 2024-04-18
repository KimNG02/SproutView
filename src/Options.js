import React, { useState } from 'react';
import './options.css';
import ApiServiceHandler from './apiServiceHandler.js';


const Options = ({selectedPlant, onConfirmOptions}) => {

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
    // Reset choices and hide choices for the other seasons
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
    onConfirmOptions(); // Call the function passed from the parent component
  };

<<<<<<< HEAD
  const test = () => {
    testtest();
  }

  async function testtest()
  {
    await ApiServiceHandler.getTimeline(selectedPlant).then((result) => { 
      document.getElementById("test").innerHTML = result.data;
    }).catch((err) => {
      document.getElementById("test").innerHTML = err;
    });
  }
  

=======
>>>>>>> 5554a1baca115308734c14fea331fa0943b75472
  return (
  
    <div> 
      <div className="font-container"> 
      
      <p className="text"> 

  <header className = "topic" > Environment options</header>
  </p> 

<<<<<<< HEAD
</div>
   
                
       {/* 
        <div class = "container">
          <div className="checkbox">
            <div className="indoor">
              <label htmlFor="indoor">
                <p style={{ fontSize: "20px" }}><b>Indoor</b></p>
              </label>
            </div>
            <div className="radio1">
              <input type="radio" id="radio1" name="location" value="indoor" className="radio" />
            </div>
=======
      <div className="checkbox">
        <div className="greenhouse">
          <label htmlFor="greenhouse">
            <p style={{ fontSize: "20px" }}><b>Greenhouse</b></p>
          </label>
        </div>
        <div className="radio2">
          <input type="radio" id="radio" name="location" value="outdoor" className="radio" />
        </div>
      </div> 

      <div className="biggerlight">
        <div className="light">
          <p style={{ fontSize: "20px" }}><b>Light</b></p>
          <div>
            <input type="checkbox" id="fullsun" name="light" value="Full Sun" />
            <label htmlFor="fullsun" className="tooltip">Full sun
              <span className="tooltiptext">When your plant is in direct sunlight for most of the day.</span>
            </label>
            <br />
            <input type="checkbox" id="partsun" name="light" value="Partial Sun" />
            <label htmlFor="partsun" className="tooltip">Partial Sun
              <span className="tooltiptext">When your plant is in a shaded area within an area that receives direct sunlight or when the light is direct only during certain times of the day.</span>
            </label> 
            <br />
            <input type="checkbox" id="shade" name="light" value="Shade" />
            <label htmlFor="shade" className="tooltip">Shade
              <span className="tooltiptext">When your plant is in a shaded area with minimum sunlight.</span>
            </label><br />

            <input type="checkbox" id="artificial" name="light" value="artificial" />
            <label htmlFor="artificial" className="tooltip">Artificial Light
              <span className="tooltiptext">When your plant is in an area with artifical lights such as fluorescent, incandescent, induction, or LED bulb lighting.</span>
            </label> 
            {/* Add other light condition radio inputs here */}
>>>>>>> 5554a1baca115308734c14fea331fa0943b75472
          </div>
      
          <div className="checkbox">
            <div className="greenhouse">
              <label htmlFor="greenhouse">
                <p style={{ fontSize: "20px" }}><b>Greenhouse</b></p>
              </label>
            </div>
            <div className="radio2">
              <input type="radio" id="radio" name="location" value="outdoor" className="radio" />
            </div>
          </div> 

        </div> 
        */
      }




<div class = "image-container">

  <img
  src="https://www.pngmart.com/files/1/Wedding-Border-284x279.png"
  style={{ width: '400px' }}

/>

</div>

    <div className="container">
  
    <div className="potsize">
        <p style={{ fontSize: "20px" }}><b>How large is the initial pot size?</b></p>
        <form>
          <div className="radio-container">
          <input type="radio" id="xsmallpot" name="xPot" value="xsmall" />
            <label htmlFor="bigpot" className="tooltip">xtra Small pot 
            <span className="tooltiptext"> Diameter range: 12-16cm, fits 1-2 liter</span>
            </label><br />
            <input type="radio" id="smallpot" name="xPot" value="small" />
            <label htmlFor="smallpot" className="tooltip">Small pot
            <span className="tooltiptext"> Diameter range: 17-20cm, fits 2-4 liter</span>
            </label> <br />
            <input type="radio" id="midpot" name="xPot" value="mid" />
            <label htmlFor="midpot" className="tooltip">Medium pot 
            <span className="tooltiptext"> Diameter range: 21-29cm, fits 4-10 liter</span>
            </label><br />
            <input type="radio" id="bigpot" name="xPot" value="big" />
            <label htmlFor="bigpot" className="tooltip">Big pot
            <span className="tooltiptext"> Diameter range: 30-39cm, fits 10-25 liter</span>
            </label><br />
            <input type="radio" id="xbigpot" name="xPot" value="xbig" />
            <label htmlFor="bigpot" className="tooltip">xtra Big pot
            <span className="tooltiptext"> Diameter range: 40-50cm, fits 25-40 liter</span>
            </label>
          </div> 
        </form>
      </div>
      
      

      <div className="soiltype">
        <p style={{ fontSize: "20px" }}><b>What type of soil are you planning to use for your plants?</b></p>
        <form>
          <div className="radio-container">
            <input type="radio" id="welldr" name="soilType" value="Well-draining Soil" />
            <label htmlFor="welldr" className="tooltip">Well-draining Soil
              <span className="tooltiptext">Such as Sandy soil, Sandy loam or Gravelly soil. Allows water to enter the soil at a moderate rate without pooling or puddling.</span>
            </label> <br />
            <input type="radio" id="loamy" name="soilType" value="Loamy Soil" />
            <label htmlFor="loamy" className="tooltip">Loamy soil
              <span className="tooltiptext">Such as sandy loam, silt loam, clay loam, and silty clay loam. Provides good drainage and nutrient retention with a balanced mix of sand, silt, and clay.</span>
            </label><br />
            <input type="radio" id="potmix" name="soilType" value="Potting Mix" />
            <label htmlFor="potmix" className="tooltip">Potting mix
              <span className="tooltiptext">Soil specifically formulated for container gardening, typically consists of a blend of organic and inorganic materials that promote good drainage, aeration, and nutrient retention. Typically for houseplants, vegetables, and annuals.</span>
            </label>
          </div> 
        </form>
      </div>
      </div>

<<<<<<< HEAD
      <div className="biggerlight">
        <div className="light">
          <p style={{ fontSize: "20px" }}><b> How much daily sunlight does your gardening area receive?</b></p>
          <div>
            <input type="checkbox" id="fullsun" name="light" value="Full Sun" />
            <label htmlFor="fullsun" className="tooltip">Full sun
              <span className="tooltiptext">When your plant is in direct sunlight for most of the day.</span>
=======
      <div className="soiltype">
        <p style={{ fontSize: "20px" }}><b>Pot size</b></p>
        <form>
          <div className="radio-container">
          <input type="radio" id="xsmallpot" name="xsPot" value="xsmall" />
            <label htmlFor="bigpot" className="tooltip">Extra Small 
            <span className="tooltiptext"> Diameter range: 12-16cm, fits 1-2 liter</span>
            </label><br />
            <input type="radio" id="smallpot" name="sPot" value="small" />
            <label htmlFor="smallpot" className="tooltip">Small 
            <span className="tooltiptext"> Diameter range: 17-20cm, fits 2-4 liter</span>
            </label> <br />
            <input type="radio" id="midpot" name="mPOt" value="mid" />
            <label htmlFor="midpot" className="tooltip">Medium  
            <span className="tooltiptext"> Diameter range: 21-29cm, fits 4-10 liter</span>
            </label><br />
            <input type="radio" id="bigpot" name="bPot" value="big" />
            <label htmlFor="bigpot" className="tooltip">Big 
            <span className="tooltiptext"> Diameter range: 30-39cm, fits 10-25 liter</span>
            </label><br />
            <input type="radio" id="xbigpot" name="xbPot" value="xbig" />
            <label htmlFor="bigpot" className="tooltip">Extra Big 
            <span className="tooltiptext"> Diameter range: 40-50cm, fits 25-40 liter</span>
>>>>>>> 5554a1baca115308734c14fea331fa0943b75472
            </label>
            <br />
            <input type="checkbox" id="partsun" name="light" value="Partial Sun" />
            <label htmlFor="partsun" className="tooltip">Partial Sun
              <span className="tooltiptext">When your plant is in a shaded area within an area that receives direct sunlight or when the light is direct only during certain times of the day.</span>
            </label> 
            <br />
            <input type="checkbox" id="shade" name="light" value="Shade" />
            <label htmlFor="shade" className="tooltip">Shade
              <span className="tooltiptext">When your plant is in a shaded area with minimum sunlight.</span>
            </label><br />

           
            {/* Add other light condition radio inputs here */}
          </div>
        </div>
      </div>

      

     
      

      <div className="water">
        <p style={{ fontSize: "20px" }}><b>Your watering habits</b></p>
        <div>
          <p style ={{ marginBottom: '20px' }}>
        <label htmlFor="water2"><b>How often are you able to water your plants?</b></label><br />
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

        </select> <br /></p>
       <p>
        <label htmlFor="water1"><b>How much do you plan on watering your plant?</b></label><br />
        <input type = "text" id = "water1" name = "water1"/> mL </p>
      </div>
     
   <div className="temp">
          <p style={{ fontSize: "20px" }}><b>What is the average temperature range in your area during the growing season?</b></p>
          <div className="slidecontainer">
            <input type="range" min="0" max="100" value={sliderValue} className="slider" id="myRange" onChange ={handleSliderChange}/>
            <div className="slider-value">{sliderValue}</div>
            <p className="place">°C</p>
          </div>
      
        </div>
      


        <div className="Season">
          <p style={{ fontSize: "20px" }}><b>Which season do you prefer for starting new plants?</b></p>


          <div className = "hbutton1">
            <div> <button onClick={()=>handleButtonClick('summer')}>Summer</button> </div>
            {showChoices['summer'] && (
              <div><button onClick={() => handleChoiceClick('summer','early')}style ={{bakgroundColor:selectedChoices['summer']=== 'early' ? 'green': 'gray'}}></button>
                 <button onClick={() => handleChoiceClick('summer','late')}style ={{bakgroundColor:selectedChoices['summer']=== 'late' ? 'green': 'gray'}}>
                Late 
              </button>
              </div>
              )
            }

            <div> <button onClick={()=>handleButtonClick('winter')}>Winter</button> </div>
            {showChoices['winter'] && (
              <div><button onClick={() => handleChoiceClick('winter','early')}style ={{bakgroundColor:selectedChoices['winter']=== 'early' ? 'green': 'gray'}}>Early</button>
                <button onClick={() => handleChoiceClick('winter','late')}style ={{bakgroundColor:selectedChoices['winter']=== 'late' ? 'green': 'gray'}}>
                Late 
              </button>
              </div>
              )
            }

          </div>


          <div className="hbutton2">

            <div> <button onClick={()=>handleButtonClick('fall')}>Fall</button> </div>
            {showChoices['fall'] && (
              <div><button onClick={() => handleChoiceClick('fall','early')}style ={{bakgroundColor:selectedChoices['fall']=== 'early' ? 'green': 'gray'}}> Early </button>
              <button onClick={() => handleChoiceClick('fall','late')}style ={{bakgroundColor:selectedChoices['fall']=== 'late' ? 'green': 'gray'}}>
                Late 
              </button>
              </div>
              )
            }

            <div> <button onClick={()=>handleButtonClick('spring')}>Spring</button> </div>
            {showChoices['spring'] && (
              <div><button onClick={() => handleChoiceClick('spring','early')}style ={{bakgroundColor:selectedChoices['spring']=== 'early' ? 'green': 'gray'}}>Early</button>
                <button onClick={() => handleChoiceClick('spring','late')}style ={{bakgroundColor:selectedChoices['spring']=== 'late' ? 'green': 'gray'}}>
                Late 
              </button>
              </div>
              )
            }

          </div>


          <div>
            <div>
          <button onClick={() => handleButtonClick('summer')}>Summer</button>
          </div>
          {showChoices['summer'] && (
            <div>
              <button
                onClick={() => handleChoiceClick('summer', 'early')}
                style={{
                  backgroundColor: selectedChoices['summer'] === 'early' ? 'green' : 'gray',
                }}
              >
                Early
              </button>
              <button
                onClick={() => handleChoiceClick('summer', 'late')}
                style={{
                  backgroundColor: selectedChoices['summer'] === 'late' ? 'green' : 'gray',
                }}
              >
                Late
              </button>
              
            </div>
          )}
          {selectedChoices['summer'] && <p>Selected choice for summer: {selectedChoices['summer']}</p>}
          <div>
          <button onClick={() => handleButtonClick('fall')}>Fall</button>
          </div>
          {showChoices['fall'] && (
            <div>
              <button
                onClick={() => handleChoiceClick('fall', 'early')}
                style={{
                  backgroundColor: selectedChoices['fall'] === 'early' ? 'green' : 'gray',
                }}
              >
                Early
              </button>
              <button
                onClick={() => handleChoiceClick('fall', 'late')}
                style={{
                  backgroundColor: selectedChoices['fall'] === 'late' ? 'green' : 'gray',
                }}
              >
                Late
              </button>
          
            </div>
          )}
          {selectedChoices['fall'] && <p>Selected choice for fall: {selectedChoices['fall']}</p>}

          <div>
          <button onClick={() => handleButtonClick('winter')}>Winter</button>
          </div>
          {showChoices['winter'] && (
            <div>
              <button
                onClick={() => handleChoiceClick('winter', 'early')}
                style={{
                  backgroundColor: selectedChoices['winter'] === 'early' ? 'green' : 'gray',
                }}
              >
                Early
              </button>
              <button
                onClick={() => handleChoiceClick('winter', 'late')}
                style={{
                  backgroundColor: selectedChoices['winter'] === 'late' ? 'green' : 'gray',
                }}
              >
                Late
              </button>
            
            </div>
          )}
          {selectedChoices['winter'] && <p>Selected choice for winter: {selectedChoices['winter']}</p>}

          <div> {/* First div for Spring */}
            <button onClick={() => handleButtonClick('spring')}>Spring</button>
            {showChoices['spring'] && (
          <div>
      <button onClick={() => handleChoiceClick('spring', 'early')}
        style={{
        backgroundColor: selectedChoices['spring'] === 'early' ? 'green' : 'gray',
        }} >Early</button>
      <button
        onClick={() => handleChoiceClick('spring', 'late')}
        style={{
          backgroundColor: selectedChoices['spring'] === 'late' ? 'green' : 'gray',
        }}>Late</button>
    </div>
    )}
  {selectedChoices['spring'] && <p>Selected choice for spring: {selectedChoices['spring']}</p>}










          

          {/*
            {showChoices['spring'] && (
              <div>
                <button
                  onClick={() => handleChoiceClick('spring', 'early')}
                  style={{
                    backgroundColor: selectedChoices['spring'] === 'early' ? 'green' : 'gray',
                  }}
                >
                  Early
                </button>
                <button
                  onClick={() => handleChoiceClick('spring', 'late')}
                  style={{
                    backgroundColor: selectedChoices['spring'] === 'late' ? 'green' : 'gray',
                  }}
                >
                  Late
                </button>
              </div>
            )}
            {selectedChoices['spring'] && <p>Selected choice for spring: {selectedChoices['spring']}</p>}
          </div>
          */}
      </div>
      
        

    
      
      
        
      </div>
      </div>

      {/*
      <label htmlFor="climate" className="tooltip"><b>Which climate do you live in?*</b>
        <span className="tooltiptext">
          <p>Tropical zone: hot, high humidity, minimal seasonal variation, heavy rainfall, high precipitation, average temperatures are greater than 18°C (64°F) year-round, dense vegetation.</p>
          <p>Dry zone: dry, low humidity, minimal rainfall, little precipitation, wide temperature variations between day and night.</p> 
          <p>Temperate zone: distinct seasons with warm and humid summers or thunderstorms and mild winters, moderate temperatures throughout the year, moderate rainfall (heavier for some regions, drier for others).</p>
          <p>Continental zone: distinct seasons, warm to cool summers and very cold winters, significant temperature fluctuations throughout the year, often receives moderate to low rainfall.</p>
          <p>Polar zone: extreme cold temperatures throughout the year, winter sees polar nights with minimum sunlight, summer has milder temperatures with more sunlight, frozen landscapes.</p>
        </span>
      </label>
      <select name="climate" id="climate">
        <option value="1">Tropical</option>
        <option value="2">Dry</option>
        <option value="3">Temperate</option>
        <option value="4">Continental</option>
        <option value="5">Polar</option>
      </select>


        */}
      
      

      <div className="Plant-care">
        <p style={{ fontSize: "20px" }}><b>Maintenance</b></p>
          <legend><b>How do you care for your plant?</b></legend>
          <div>
            <input type="checkbox" id="repotting" name="repotting" defaultChecked />
              <label htmlFor="repotting"  className="tooltip">Repotting
              <span className="tooltiptext">moving a plant from one pot to another</span>
              </label><br />
            <input type="checkbox" id="trimming" name="trimming" defaultChecked />
              <label htmlFor="trimming" className="tooltip">Trimming
              <span className="tooltiptext"> trimming typically involves cutting back plant material for reasons other than health concerns.</span>
              </label><br />
            <input type="checkbox" id="pruning" name="pruning" defaultChecked />
              <label htmlFor="repotting" className="tooltip">Pruning
              <span className="tooltiptext">pruning typically involves removing dead or diseased wood and thinning out stems and branches to improve the overall health and appearance of a plant.</span>
              </label><br />
            <input type="checkbox" id="fertilizer" name="fertilizer" defaultChecked />
              <label htmlFor="fertilizer" className="tooltip">Fertilizer
              <span className="tooltiptext">typically contains a combination of essential nutrients such as nitrogen, phosphorus, and pottasium.</span>
              </label><br />
          </div>
      </div>
      
    </div>


<div className = "clim-zon">
  <div className="climate-zone">
    <div> What climate zone are you in?</div> 
      <div className= "climate"> 
      <input
      className = "zone"
      type = "text"       
      place-holder = "Climate zone..."
      />
      <div/>
       
    </div>
<lable for="climatezone"> Choose a climate zone</lable> 
<select>
  <optgroup label = "A">
    <option value = "1">Af </option>
    <option value = "2">Am</option>
    <option value = "3">Aw </option>
  </optgroup>
  <optgroup label = "B">
  <option value = "4">BSh  </option>
  <option value = "5">BSk  </option>
  <option value = "6">BWh  </option>
  </optgroup>
  <optgroup label = "C">
  <option value = "7">Cfa  </option>
  <option value = "8">Csa  </option>
  <option value = "9">CSb </option>
  <option value = "10">Cwa  </option>
  <option value = "11">Cwb </option>
  <option value = "12">Cwc  </option>
  </optgroup>
  <optgroup label = "D">
  <option value = "13">Dfa </option>
  <option value = "14">Dfb </option>
  <option value = "15">Dfc </option>
  <option value = "16">Dfd </option>
  <option value = "17">Dsa </option>
  <option value = "18">Dsb </option>
  <option value = "19">Dsc </option>
  <option value = "20">Dsd </option>
  <option value = "21">Dwa </option>
  <option value = "22">Dwb </option>
  <option value = "23">Dwc </option>
  <option value = "24">Dwd </option>
  </optgroup>
  <optgroup label = "E">
  <option value = "25">EF </option>
  <option value = "26">ET </option>
  </optgroup>
</select>
<br/>
<a href = "https://www.koppen-map.com/"> Find your climate zone here!</a>
<div/>


</div>
      <div className = "confirmOption">
          <button onClick={confirmOptionsCB}>Confirm Options</button>
      </div>
</div>
</div>

 




  );
};


export default Options;

