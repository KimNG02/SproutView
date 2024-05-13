import { useState } from "react";

function useHover(styleOnHover, styleOnNotHover = {})
  {
    const [style, setStyle] = useState(styleOnNotHover);

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return {style, onMouseEnter, onMouseLeave}
  }
export default useHover;