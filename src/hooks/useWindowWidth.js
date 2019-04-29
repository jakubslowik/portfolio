import { useEffect, useState } from 'react';

function useWindowWidth() {
  //window is undefined during server-side rendering, so we mu check for its availability first
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
    return width;
  }
}

export default useWindowWidth;