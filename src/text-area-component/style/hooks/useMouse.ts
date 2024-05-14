import { useEffect, useState } from "react";

function useMouse() {
  const [clicks, setClicks] = useState(0);
  const [doubleClicks, setDoubleClicks] = useState(0);
  const [isDoubleClick, setIsDoubleClick] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDoubleClick) {
      setDoubleClicks((prevDoubleClicks) => prevDoubleClicks + 1);
      timer = setTimeout(() => {
        setIsDoubleClick(false);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [isDoubleClick]);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);

    if (clicks === 1) {
      setIsDoubleClick(true);
    }

    setTimeout(() => {
      setClicks(0);
    }, 300);
  };

  return {
    handleClick,
    clicks,
    isDoubleClick,
    doubleClicks,
  };
}

export default useMouse;
