import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import apiServiceHandler from "./apiServiceHandler.js";
import { useHref } from "react-router-dom";
import Healthy from "./Healthy.js";
import Risky from "./Risky.js";
import Dead from "./Dead.js";


async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj).replace("{", "").replace("}", "");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}

function Timeline({ optionsObj }) {
  const [timelineData, setTimelineData] = useState(null);
  const [timelinePage, setTimelinePage] = useState('');

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

  let timelineComponent;
  if (timelinePage === 'Healthy') {
    timelineComponent = <Healthy timelineData={timelineData}/>;
  } else if (timelinePage === 'Risky') {
    timelineComponent = <Risky timelineData={timelineData}/>;
  } else if (timelinePage === 'Dead') {
    timelineComponent = <Dead timelineData={timelineData}/>;
  }

  return (
    <div id="timeline-page">
      <button onClick={() => handleTimelinePage('Healthy')}>Healthy</button>
      <button onClick={() => handleTimelinePage('Risky')}>Risky</button>
      <button onClick={() => handleTimelinePage('Dead')}>Dead</button>
      {timelineComponent}
    </div> 
  );
}

export default Timeline;
