'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

//  FUNCTION main hook
const useIntersect = <T extends Element = Element>(
  onIntersect?: onIntersectType,
  option?: IntersectionObserverInit,
  once = false
): [React.RefObject<T>, boolean] => {
  const target = useRef<T>(null);
  const [isView, setIsView] = useState(false);

  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        if (onIntersect) {
          onIntersect(entry, observer);
        }
        setIsView(true);
      } else {
        setIsView(false);
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      if (once) observer = new IntersectionObserver(onIntersectOnce<T>(checkIntersect, once, target), { ...option });
      else
        observer = new IntersectionObserver(checkIntersect, {
          ...option,
        });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, option, option?.root, option?.threshold, option?.rootMargin, checkIntersect, once]);

  return [target, isView];
};

const onIntersectOnce = <T extends Element = Element>(
  callback: IntersectionObserverCallback,
  triggerOnce: boolean,
  target: React.RefObject<T>
) => {
  return (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    callback(entries, observer);

    if (target.current && triggerOnce && !!entries?.some(entry => entry.isIntersecting)) {
      observer.unobserve(target.current);
    }
  };
};

// PARAM type
export type useIntersectType<T> = (
  onIntersect?: onIntersectType,
  option?: IntersectionObserverInit
) => [React.RefObject<T>, boolean];

export type onIntersectType = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

export default useIntersect;
