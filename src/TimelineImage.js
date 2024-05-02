function TimelineImage({src}) {
    const styleOnNotHover = {
        display: 'flex',
        transition: '300ms ease',
        alignItems: 'center',
        width: '100px',
        height: '100px',
    }
    return (
        <img id={src} 
        src={`/api/image/${src}`} 
        alt={`${src}`}
        style={styleOnNotHover}/>
      );
}

export default TimelineImage;