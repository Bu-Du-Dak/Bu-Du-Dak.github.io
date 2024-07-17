import { useEffect, useRef, useState, useCallback } from 'react';
import { throttle } from 'lodash';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const lastScrollY = useRef(0);

  const updateScroll = useCallback(throttle(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollY.current > 5 || scrollY - lastScrollY.current < -5)
    ) {
      setScrollDirection(direction);
    } 
    lastScrollY.current = scrollY;

    const totalScrollHeight = documentHeight - windowHeight;
    const scrollPos = Math.min(scrollY / totalScrollHeight, 1);
    if(documentHeight < 1000){
      setScrollPercentage(0)
    }else setScrollPercentage(Math.round(scrollPos * 100));
  }, 300), [scrollDirection]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [updateScroll]);

  return { scrollDirection, scrollPercentage };
};

export default useScrollDirection;
