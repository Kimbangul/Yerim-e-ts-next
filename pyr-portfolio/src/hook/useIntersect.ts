'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const useIntersect = <T extends Element = Element>(onIntersect: onIntersectType, option?: IntersectionObserverInit) => {
  const target = useRef<T>(null);
  const [isView, setIsView] = useState(false);

  const checkIntersect: IntersectionObserverCallback = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
      setIsView(true);
    } else {
      setIsView(false);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(checkIntersect, {
        ...option,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, option?.root, option?.threshold, option?.rootMargin, checkIntersect]);

  return [target, isView];
};

export type useIntersectType<T> = (
  onIntersect: onIntersectType,
  option?: IntersectionObserverInit
) => [React.RefObject<T>, boolean];

export type onIntersectType = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

export default useIntersect;
