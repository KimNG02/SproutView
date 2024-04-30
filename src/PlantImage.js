import useHover from "./Hover.js"

function PlantImage({src, index, filter, click}) {
    const styleOnNotHover = {
        display: 'flex',
        transition: '300ms ease',
        alignItems: 'center',
        width: '100px',
        height: '100px',
    }
    const styleOnHover = {
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        transition: '300ms ease',
        width: '120px',
        height: '120px'
    }
  const hover = useHover(styleOnHover, styleOnNotHover);
    return (
        String.fromCharCode(filter) === src[0] && 
        <img id={src[0]} 
        onClick={() => click(src)} 
        src={`/api/image/${src}`} 
        alt={`${index + 1}`} 
        key={index}
        {...hover}/>
      );
}

export default PlantImage;