import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import potImage from "./images/pot1.webp";
import sprout from "./images/pot2.webp";
import half from "./images/pot3.webp";
import full from "./images/pot4.webp";
import withered from "./images/pot5.webp";
import apiServiceHandler from "./apiServiceHandler.js";
import { useHref } from "react-router-dom";

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj).replace("{", "").replace("}", "");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}

function Timeline({ optionsObj }) {
  const [stage, setStage] = useState(0);
  const [timelineData, setTimelineData] = useState(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTimeline(optionsObj);
        console.log(response);
        console.log(response.data);
        setTimelineData(response.data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
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

  const scrollToSuggestions = () => {
    suggestionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-container">
    <section className="timeline-section" id="timeline">
      <div>
        {timelineData ? (
          <div>
            <h1 className="timeline-state">{timelineData.timelineState}</h1>

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

      <div className="image-container">
        <button className="prev-next" onClick={handlePrev}>
          prev
        </button>
        <img src={getImage(stage)} alt="Your Image" width="200" height="250" />
        <button className="prev-next" onClick={handleNext}>
          next
        </button>
      </div>
      {timelineData ? (
      <div>
        <input
          className="timeline-bar"
          type="range"
          id="stage"
          name="stage"
          min="0"
          max="4"
          step="1"
          value={stage}
          onChange={(e) => setStage(parseInt(e.target.value))}
        />
        <div className="stages-container">
        <div className="stages">
          <span>Seed</span>
          <span>Sprout</span>
          <span>Vegetative</span>
          <span>Flowering</span>
          <span>Mature</span>
        </div>
        <div className="stages">
          <span>Now</span>
          <span>{timelineData.sproutTime}</span>
          <span>{timelineData.halfGrownTime}</span>
          <span>{timelineData.matureTime}</span>
          <span>{timelineData.witheringTime}</span>
        </div>
        </div>
      </div>
        ) : (
        <div>Loading...</div>
      )}
      <div>
        <button onClick={scrollToSuggestions}>
          HEJ HEJ GÅ NER TILL SUGGESTIONS
        </button>
      </div>
    </section>
    <section ref={suggestionsRef} id="suggestions" className="timeline-section">
      <div>HEJ OCH VÄLKOMMEN TILL SUGGESTIONS</div>
    </section>
    </div>
  );
}

export default Timeline;
