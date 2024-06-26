import { useEffect, useState, useRef } from 'react'

export function useIsVisible(ref: any) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<any>();

  const observationOpts = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, observationOpts);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    observerRef?.current?.observe(ref.current);

    return () => {
      observerRef?.current?.disconnect();
    }
  }, [ref])

  return isVisible;
}
