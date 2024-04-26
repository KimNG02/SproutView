import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import apiServiceHandler from "./apiServiceHandler.js";
import { useHref } from "react-router-dom";
import Healthy from "./Healthy.js";
import Risky from "./Risky.js";
import Dead from "./Dead.js";

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj)
    .replace("{", "")
    .replace("}", "")
    .replace("[", "%5B")
    .replace("]", "%5D");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}

function Timeline({ optionsObj, timelinePage, setTimelinePage }) {
  const [timelineData, setTimelineData] = useState(null);
  const [similarityTest, setSimilarityTest] = useState(1.0);

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

  const handleTimelinePage = (page) => {
    setTimelinePage(page);
  };

  /*
  let timelineComponent;
  if (timelinePage === 'Healthy') {
    timelineComponent = <Healthy timelineData={timelineData}/>;
  } else if (timelinePage === 'Risky') {
    timelineComponent = <Risky timelineData={timelineData}/>;
  } else if (timelinePage === 'Dead') {
    timelineComponent = <Dead timelineData={timelineData}/>;
  }
  */

  let timelineComponent;
  if (timelineData) {
    const similarity = parseFloat(timelineData.similarity);
    if (similarity >= 0.9) {
      handleTimelinePage("Healthy");
      timelineComponent = <Healthy timelineData={timelineData} />;
    } else if (similarity >= 0.5) {
      handleTimelinePage("Risky");
      timelineComponent = <Risky timelineData={timelineData} />;
    } else {
      handleTimelinePage("Dead");
      timelineComponent = <Dead timelineData={timelineData} />;
    }
  }
  /* similarity Values
  Healthy: 1-0.9
  Risky: 0.9-0.5
  Dead: 0.5-0
  */

  return (
    <div id="timeline-page">
      {timelineData ? (
        <div>{timelineComponent}</div>
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

export default Timeline;
