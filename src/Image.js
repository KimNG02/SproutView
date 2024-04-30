import { createElement, useEffect, useState } from "react"

function Image({imageSources, filter, click}) {

  const styleOnNotHover = {
    display: 'flex',
    transition: '300ms ease',
    alignItems: 'center',
    width: '100px',
    height: '100px',
  }
  const styleOnHover = {
    cursor: 'pointer',
    transition: '300ms ease',
    width: '120px',
    height: '120px'
  }
  function useHover(styleOnHover, styleOnNotHover = {})
  {
    const [style, setStyle] = useState(styleOnNotHover);

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return {style, onMouseEnter, onMouseLeave}
  }

  const hover = useHover(styleOnHover, styleOnNotHover)
  console.log(filter);
    return (
      <div>
        {imageSources.map((src, index) => (
          String.fromCharCode(filter) === src[0] && <img id={src[0]} onClick={() => click(src)} className={String.fromCharCode(filter)} src={`/api/image/${src}`} alt={`${index + 1}`} {...hover}/> 
        ))}
      </div>
    );
}

export default Image;