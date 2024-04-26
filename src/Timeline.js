import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import apiServiceHandler from "./apiServiceHandler.js";
import { useHref } from "react-router-dom";
import Healthy from "./Healthy.js";
import Risky from "./Risky.js";
import Dead from "./Dead.js";

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj).replace("{", "").replace("}", "").replace("[", "%5B").replace("]", "%5D");
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
  }

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
      timelineComponent = <Healthy timelineData={timelineData} />;
    } else if (similarity >= 0.5) {
      timelineComponent = <Risky timelineData={timelineData} />;
    } else {
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
        <div>
          {timelineComponent}
        </div>
      ) : (
        <div>
          <img className="loading-screen" src="https://i.pinimg.com/originals/87/e9/35/87e935c85648e03d1fd8abd4569ca81b.gif"/>
        </div>
      )}
    </div>
  );
}

export default Timeline;