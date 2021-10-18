import { useLayoutEffect, useState } from 'react';

function useWindowWidthSize() {
  const [widthSize, setWidthSize] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return widthSize;
}

export default useWindowWidthSize;
