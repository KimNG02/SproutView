import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import apiServiceHandler from "./apiServiceHandler.js";
import { useHref } from "react-router-dom";
import Healthy from "./Healthy.js";
import Risky from "./Risky.js";
import Dead from "./Dead.js";

async function getResources() {
  return await apiServiceHandler.getResources();
}

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj)
    .replace("{", "")
    .replace("}", "")
    .replace("[", "%5B")
    .replace("]", "%5D");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}

function Timeline({ optionsObj, timelinePage, setTimelinePage, selectedPlant}) {
  const [timelineData, setTimelineData] = useState(null);

  var links;
  var resourceNames;

  const [similarityTest, setSimilarityTest] = useState(1.0);
  const [resources, setResources] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTimeline(optionsObj);

        const resourceResponse = await getResources();

        setTimelineData(response.data);
        setResources(resourceResponse.data);

      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };
    fetchData();
  }, [optionsObj]);

  
  const parse = () => {
    var resourceString = resources.split("]")[0];
    var linksTemp = resources.split("]")[1];

    linksTemp = linksTemp.split("[")[1];
    linksTemp = linksTemp.replaceAll('"', '');
    console.log(linksTemp);
    linksTemp = linksTemp.split(",");
    links = linksTemp;

    resourceString = resourceString.substring(6,resourceString.length - 1);
    resourceString = resourceString.replaceAll('"', '');
    console.log(resourceString);
    resourceString = resourceString.split(",");
    resourceNames = resourceString;
  };
  
  const handleTimelinePage = (page) => {
    setTimelinePage(page);
    parse();
  };
  
  let timelineComponent;
  if (timelineData && resources) {
    const similarity = parseFloat(timelineData.similarity);
    if (similarity >= 0.9) {
      handleTimelinePage("Healthy");
      timelineComponent = <Healthy resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant}/>;
    } else if (similarity >= 0.5) {
      handleTimelinePage("Risky");
      timelineComponent = <Risky resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant}/>;
    } else {
      handleTimelinePage("Dead");
      timelineComponent = <Dead resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant}/>;
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
