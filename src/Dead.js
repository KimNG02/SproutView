import React, { useRef, useState } from "react";
import "./styles/Dead.css";
import "./styles/Timeline.css";

function Dead({ timelineData, selectedPlant}) {
  const suggestionsRef = useRef(null);
  const scrollToSuggestions = () => {
    suggestionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dead-container">
      {timelineData ? (
        <div>
          <section className="timeline-section" id="dead-timeline">
            <h1 className="growth-title">Oh no!!!</h1>
            <h4>
              Your {selectedPlant} plant is unlikely to grow in your current
              environment
            </h4>
            <div className="dead-circle-container">
              <img
                src="api/image/dead"
                alt="Pot"
              />
            </div>
            <div id="helpbuttoncontainer">
              <button id="helpbutton" onClick={scrollToSuggestions}>Tips!</button>
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
                <div className="comment">
                  <strong>Light:</strong>
                  <span>{timelineData.lightComment}</span>
                </div>
                <div className="comment">
                  <strong>Water:</strong>
                  <span>{timelineData.waterComment}</span>
                </div>
                <div className="comment">
                  <strong>Pot Size:</strong>
                  <span>{timelineData.potSizeComment}</span>
                </div>
                <div className="comment">
                  <strong>Soil:</strong>
                  <span>{timelineData.soilComment}</span>
                </div>
                <div className="comment">
                  <strong>Plant Care:</strong>
                  <span>{timelineData.plantCareComment}</span>
                </div>
                {timelineData.phComment ? <div className="comment">
                  <strong>pH:</strong>
                  <span>{timelineData.phComment}</span>
                </div> : <div></div>}
                {timelineData.humidityComment ? <div className="comment">
                  <strong>Humidity:</strong>
                  <span>{timelineData.humidityComment}</span>
                </div> : <div></div>}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="loading-screen">
          <img
            className="loading-screen"
            src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          />
        </div>
      )}
    </div>
  );
}

export default Dead;
