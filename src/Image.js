import { createElement, useEffect, useState } from "react"
import PlantImage from "./PlantImage";

function Image({imageSource, plant, index, filter, click}) {
  const letterSectionStyle = {
    display: 'flex',
    flexDirection: 'row'
  }
  if (plant === undefined) {
    return (<div></div>);
  }
    return (
      <div
      style={letterSectionStyle}
      >
        {String.fromCharCode(filter) === plant[0] &&
          <PlantImage src={imageSource} plant={plant} index={index} filter={filter} click={click} />}
      </div>
    );
}

export default Image;