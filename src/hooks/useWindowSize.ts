import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sizes = {
    isSm: windowSize.width <= 640,
    isMd: windowSize.width > 640 && windowSize.width <= 768,
    isLg: windowSize.width > 768 && windowSize.width <= 1280,
    isXl: windowSize.width > 1280 && windowSize.width <= 1536,
    is2xl: windowSize.width > 1536,
  };

  return sizes;
};
