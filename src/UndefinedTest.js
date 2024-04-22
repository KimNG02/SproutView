import React, { useState, useEffect } from 'react';
import apiServiceHandler from './apiServiceHandler.js';

async function getTimeline(optionsObj) {
  const stuff = JSON.stringify(optionsObj).replace("{", "").replace("}", "");
  console.log(stuff);
  return await apiServiceHandler.getTimeline(stuff);
}

function UndefinedTest({ optionsObj }) {
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

  return (
    <div>
      {timelineData ? (
        <div>{timelineData}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UndefinedTest;
