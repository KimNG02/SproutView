function TimelineImage({src}) {
    const styleOnNotHover = {
        display: 'flex',
        transition: '300ms ease',
        alignItems: 'center',
        width: '100px',
        height: '100px',
    }
    var link;
    switch (src) {
        case "pot":
            link = "https://i.imgur.com/qE2NfVT.png";
            break;
        case "sprout":
            link = "https://i.imgur.com/A88pfLQ.png";
            break;
        case "vegetative":
            link = "https://i.imgur.com/kP702Ij.png";
            break;
        case "flowering":
            link = "https://i.imgur.com/aAdKX6Z.png";
            break;
        case "mature":
            link = "https://i.imgur.com/BDL6MYn.png";
            break;
    
        default:
            link = "invalid";
            break;
    }
    return (
        <img id={src} 
        src={`${link}`} 
        alt={`${link}`}
        style={styleOnNotHover}/>
      );
}

export default TimelineImage;