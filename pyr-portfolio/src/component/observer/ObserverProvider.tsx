'use client';
import useIntersect, { onIntersectType } from '@/hook/useIntersect';
import { ReactNode, useEffect, useRef } from 'react';

const ObserverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const sectionRef = useRef<null[] | Element[]>([]);

  useEffect(() => {
    if (typeof window === undefined) return;
    const section = document.querySelectorAll('.section');

    section.forEach((el, idx) => {
      sectionRef.current[idx] = el;
    });
    console.log(sectionRef);
  }, [typeof window]);

  const onIntersectSection: onIntersectType = entry => {
    console.log(entry);
  };

  const [target, isView] = useIntersect<HTMLDivElement>(onIntersectSection);

  useEffect(() => {
    console.log(target, isView);
  }, [target, isView]);

  return (
    <>
      <div ref={target}>{children}</div>
    </>
  );
};

export default ObserverProvider;
