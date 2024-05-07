import { createElement, useEffect, useState } from "react"
import PlantImage from "./PlantImage";

function Image({imageSources, plants, filter, click}) {
  const letterSectionStyle = {
    display: 'flex',
    flexDirection: 'row'
  }
  console.log(filter);
    return (
      <div
      style={letterSectionStyle}
      >
        {plants.map((src, index) => (
          String.fromCharCode(filter) === src[0] &&
          <PlantImage src={imageSources[index]} plant={src} index={index} filter={filter} click={click} />
        ))}
      </div>
    );
}

export default Image;