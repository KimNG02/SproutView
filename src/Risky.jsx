import React, { useRef, useState } from "react";
import "./styles/Risky.css";
import "./styles/Timeline.css";

function Risky({ resourceNames, links, timelineData, selectedPlant, plantAnimation}) {
  const suggestionsRef = useRef(null);
  const [value, setValue] = useState(1);
  const [sprout, setSprout] = useState(true);
  const [vegetative, setVegetative] = useState(false);
  const [flowering, setFlowering] = useState(false);
  const [mature, setMature] = useState(false);

  var sproutImage;
  var vegetativeImage;
  var floweringImage;
  var matureImage;
  
  resourceNames.forEach((name, index) => {
    switch (name) {
      case "sprout":
        sproutImage = links[index];
        break;
      case "vegetative":
        vegetativeImage = links[index];
        break;
      case "flowering":
        floweringImage = links[index];
        break;
      case "mature":
        matureImage = links[index];
        break;
    
      default:
        break;
    }
  });
  
  resourceNames.forEach((name, index) => {
    switch (name) {
      case "sprout" + timelineData.botanic_category:
        sproutImage = links[index];
        break;
      case "vegetative" + timelineData.botanic_category:
        vegetativeImage = links[index];
        break;
      case "flowering" + timelineData.botanic_category:
        floweringImage = links[index];
        break;
      case "mature" + timelineData.botanic_category:
        matureImage = links[index];
        break;
    
      default:
        break;
    }
  });

  const scrollToSuggestions = () => {
    suggestionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (event, num = null) => {
    var valueHere = null;
    num ? valueHere = num : valueHere = parseInt(event.target.value)
    switch (valueHere) {
      case 1:
        setSprout(true);
        setVegetative(false);
        setFlowering(false);
        setMature(false);
        break;
      case 2:
          setSprout(false);
          setVegetative(true);
          setFlowering(false);
          setMature(false);
        break;
      case 3:
        setSprout(false);
        setVegetative(false);
        setFlowering(true);
        setMature(false);
        break;
      case 4:
        setSprout(false);
        setVegetative(false);
        setFlowering(false);
        setMature(true);
        break;
    
      default:
        break;
    }
    setValue(valueHere);
  };

  const incrementValue = (event) => {
    const newValue = Math.min(value + 1, 4);
    setValue(newValue);
    handleChange(event, newValue);
  };
  
  const decrementValue = (event) => {
    const newValue = Math.max(value - 1, 1);
    setValue(newValue);
    handleChange(event, newValue);
  };

  const data = (timelineData.lightComment || timelineData.waterComment || timelineData.potSizeComment || timelineData.tempComment || timelineData.soilComment || timelineData.plantCareComment || timelineData.phComment || timelineData.humidityComment) ? true : false;


  return (
    <div className="risky-container">
      {timelineData ? (
        <div>
          <section className="timeline-section" id="risky-timeline">
            <h1 className="growth-title">Risky Growth</h1>
            <h4>
              Your {selectedPlant} plant will grow relatively well, but you can do even better! <br /> A healthy growth would result in the following timeline
            </h4>
            <div className="risky-circle-container">
              <button className="arrow left-arrow" onClick={decrementValue}>
                &lt;
              </button>
                {sprout && <img src={sproutImage} alt="sprout"/>}
                {vegetative && <img src={vegetativeImage} alt="vegetative"/>}
                {flowering && <img src={floweringImage} alt="flowering"/>}
                {mature && <img src={matureImage} alt="mature"/>}
              <button className="arrow right-arrow" onClick={incrementValue}>
                &gt;
              </button>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="4"
                value={value}
                className="slider"
                onChange={handleChange}
              />
              <div className="labels">
                <span className={value === 1 ? "active" : ""}>
                  Sprout {timelineData.sproutTime}
                </span>
                <span className={value === 2 ? "active" : ""}>
                  Vegetative {timelineData.vegetativeTime}
                </span>
                <span className={value === 3 ? "active" : ""}>
                  Flowering {timelineData.floweringTime}
                </span>
                <span className={value === 4 ? "active" : ""}>
                  Mature/Ripe {timelineData.matureTime}
                </span>
              </div>
            </div>
            <div className="helpbuttoncontainer">
              <button className="helpbutton" onClick={scrollToSuggestions}>Tips!</button>
            </div>
          </section>
          <section
            ref={suggestionsRef}
            className="timeline-section"
            id="growth-suggestions"
          >
            <h1>Growth Suggestions</h1>
            <div className="white-rectangle">
              <div className="growth-suggestions">
              {data ? <div className="comment">Here are some suggestions for how you can improve the conditions for your plant:</div> : <div></div>}
                {timelineData.lightComment ? <div className="comment">
                <strong>Light<br/></strong>
                  <span>{timelineData.lightComment}</span> 
                </div> : <div></div>}
                {timelineData.waterComment ? <div className="comment">
                <strong>Water<br/></strong>
                  <span>{timelineData.waterComment}</span> 
                </div> : <div></div>}
                {timelineData.tempComment ? <div className="comment">
                <strong>Temperature<br/></strong>
                  <span>{timelineData.tempComment}</span> 
                </div> : <div></div>}
                {timelineData.potSizeComment ? <div className="comment">
                <strong>Pot Size<br/></strong>
                  <span>{timelineData.potSizeComment}</span> 
                </div> : <div></div>}
                {timelineData.soilComment ? <div className="comment">
                  <strong>Soil<br/></strong>
                  <span>{timelineData.soilComment}</span> 
                </div> : <div></div>}
                {timelineData.plantCareComment ? <div className="comment">
                  <strong>Plant Care<br/></strong>
                  <span>{timelineData.plantCareComment}</span> 
                </div> : <div></div>}
                {timelineData.phComment ? <div className="comment">
                  <strong>pH<br/></strong>
                  <span>{timelineData.phComment}</span>
                </div> : <div></div>}
                {timelineData.humidityComment ? <div className="comment">
                <strong>Humidity<br/></strong>
                  <span>{timelineData.humidityComment}</span>
                </div> : <div></div>}
              </div>
              <div className="plant-animation-container">
              <video className="plant-animation" autoPlay controls={false} loop>
                <source src={plantAnimation} type="video/mp4"/>
                Your browser does not support the animation
              </video>
            </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="loading-screen">
          <img
            className="loading-screen"
            src="https://i.imgur.com/IFpG99y.gif"
          />
        </div>
      )}
    </div>
  );
}

export default Risky;
