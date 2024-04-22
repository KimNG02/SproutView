import React, { useState } from 'react';
import './styles/Timeline.css';
import potImage from "./images/pot1.webp";
import sprout from "./images/pot2.webp";
import half from "./images/pot3.webp";
import full from "./images/pot4.webp";
import withered from "./images/pot5.webp";




function Timeline({optionsObj}) {
  const [stage, setStage] = useState(0);


  const handlePrev = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  const handleNext = () => {
    if (stage < 4) {
      setStage(stage + 1);
    }
  };

  const getImage = (stage) => {
    switch (stage) {
      case 0:
        return potImage;
      case 1:
        return sprout;
      case 2:
          return half;
      case 3:
          return full;
      case 4:
            return withered;    

    }
  };

  return (
    <div className='timeline-container'>
      <div>{optionsObj.season}</div>
      <div className="App">
        <div id="prev">
          <button onClick={handlePrev}>prev</button>
        </div>
        <div className="image-container">
          <img src={getImage(stage)} alt="Your Image" width="200" height="250" />
        </div>
        <div id="next">
          <button onClick={handleNext}>next</button>
        </div>
       
        <input
          type="range"
          id="stage"
          name="stage"
          min="0"
          max="4"
          step="1"
          value={stage}
          onChange={(e) => setStage(parseInt(e.target.value))}
        />
        <div className="labels">
            <p>seed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              sprout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              half grown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              mature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              withered 
                
            </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;