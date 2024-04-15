import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);
  const updateScrollDirection = throttle(() => {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollY.current > 5 || scrollY - lastScrollY.current < -5)
    ) {
      setScrollDirection(direction);
    } else {
      lastScrollY.current = scrollY;
    }
  }, 300);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
};
export default useScrollDirection;
