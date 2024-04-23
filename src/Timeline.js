import React, { useState, useEffect } from 'react';
import './styles/Timeline.css';
import potImage from "./images/pot1.webp";
import sprout from "./images/pot2.webp";
import half from "./images/pot3.webp";
import full from "./images/pot4.webp";
import withered from "./images/pot5.webp";
import apiServiceHandler from './apiServiceHandler.js';

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj).replace("{", "").replace("}", "");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}


function Timeline({optionsObj}) {
  const [stage, setStage] = useState(0);
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTimeline(optionsObj);
        console.log(response.data);
        setTimelineData(response.data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };
    fetchData();
  }, [optionsObj]);

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
      <div>
        {timelineData ? (
          <div>
            {Object.keys(timelineData).map((key, index) => (
              <div key={index}>
                <strong>{key}:</strong> {timelineData[key]}
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
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
            <p>
              Seed
            </p>
            <p>
              Sprout
  
            </p>
            <p>
              half grown
            </p>
            <p>
              mature
            </p>
            <p>
              Withered
            </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;