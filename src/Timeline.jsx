import React, { useState, useEffect, useRef } from "react";
import "./styles/Timeline.css";
import apiServiceHandler from "./apiServiceHandler.jsx";
import Healthy from "./Healthy.jsx";
import Risky from "./Risky.jsx";
import Dead from "./Dead.jsx";
import flowerAnimation from "./images/flowerAnimation.mp4";
import fruitAnimation from "./images/fruitAnimation.mp4";
import herbAnimation from "./images/herbAnimation.mp4";
import defaultAnimation from "./images/plantAnimation.mp4";

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
        const responseData = {similarity:"0.78",lightComment:"Good job!",soilComment:"Good job!",waterComment:"Instead of watering your plant every 3 days, you should water it every 2 days.",tempComment:"Good job!", potSizeComment:"Good job!",plantCareComment:"Good job!",humidityComment:"Good job!",phComment:"Good job!",sproutTime:"7-14 days",vegetativeTime:"8-12 weeks",floweringTime:"12-14 weeks",matureTime:"14-16 weeks"}
        
        
        console.log("Json testing: " + responseData["similarity"]);

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

    let plantAnimation = defaultAnimation;
    if(timelineData && resources) {
      if(timelineData.botanic_category == 'fruit') {
        plantAnimation = fruitAnimation;
      }
      if(timelineData.botanic_category == 'herb') {
        plantAnimation = herbAnimation;
      }
      if(timelineData.botanic_category == 'flower') {
        plantAnimation = flowerAnimation;
      }
    }
  
  let timelineComponent;
  if (timelineData && resources) {
    const similarity = parseFloat(timelineData.similarity);
    if (similarity >= 0.9) {
      handleTimelinePage("Healthy");
      timelineComponent = <Healthy resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant} plantAnimation={plantAnimation}/>;
    } else if (similarity >= 0.5) {
      handleTimelinePage("Risky");
      timelineComponent = <Risky resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant} plantAnimation={plantAnimation}/>;
    } else {
      handleTimelinePage("Dead");
      timelineComponent = <Dead resourceNames={resourceNames} links={links} timelineData={timelineData} selectedPlant = {selectedPlant} plantAnimation={plantAnimation}/>;
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
            src="https://i.imgur.com/IFpG99y.gif"
          />
        </div>
      )}
    </div>
    
  );
}

export default Timeline;
