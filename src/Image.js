import { createElement, useEffect, useState } from "react"
import PlantImage from "./PlantImage";

function Image({imageSource, index, filter, click}) {
  const letterSectionStyle = {
    display: 'flex',
    flexDirection: 'row'
  }
  console.log(filter);
    return (
      <div
      style={letterSectionStyle}
      >
        {String.fromCharCode(filter) === imageSource[0] &&
          <PlantImage src={imageSource} index={index} filter={filter} click={click} />}
      </div>
    );
}

export default Image;