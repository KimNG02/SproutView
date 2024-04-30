import { createElement, useEffect, useState } from "react"
import PlantImage from "./PlantImage";

function Image({imageSources, filter, click}) {
  const letterSectionStyle = {
    display: 'flex',
    flexDirection: 'row'
  }
  console.log(filter);
    return (
      <div
      style={letterSectionStyle}
      >
        {imageSources.map((src, index) => (
          String.fromCharCode(filter) === src[0] &&
          <PlantImage src={src} index={index} filter={filter} click={click} />
        ))}
      </div>
    );
}

export default Image;